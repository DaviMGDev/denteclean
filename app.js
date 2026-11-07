    (async function() {
      'use strict';

      let config;
      try {
        const response = await fetch('site.config.json');
        if (!response.ok) throw new Error('site.config.json was not found. Run npm run setup or restore the file.');
        config = await response.json();
        validateConfig(config);
        renderConfig(config);
      } catch (error) {
        document.body.classList.remove('config-loading');
        document.body.setAttribute('aria-busy', 'false');
        document.body.innerHTML = '<main style="font:16px sans-serif;padding:2rem"><h1>Não foi possível carregar a configuração</h1><p></p></main>';
        document.querySelector('main p').textContent = error.message + ' — confira o site.config.json.';
        return;
      }

      function validateConfig(data) {
        const fail = (path, message) => { throw new Error(`${path}: ${message}`); };
        if (!data || typeof data !== 'object') fail('config', 'deve ser um objeto JSON.');
        const required = [['clinic.name', data.clinic?.name], ['clinic.phone', data.clinic?.phone], ['clinic.phoneLink', data.clinic?.phoneLink], ['clinic.whatsapp', data.clinic?.whatsapp], ['clinic.email', data.clinic?.email], ['clinic.address', data.clinic?.address], ['clinic.city', data.clinic?.city]];
        const missing = required.filter(([, value]) => typeof value !== 'string' || !value.trim()).map(([key]) => key);
        if (missing.length) throw new Error('Campos obrigatórios ausentes ou inválidos: ' + missing.join(', '));
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.clinic.email)) throw new Error('clinic.email precisa ser um endereço de e-mail válido.');
        if (!/^\d{8,15}$/.test(data.clinic.whatsapp)) throw new Error('clinic.whatsapp precisa conter o número com código do país, apenas dígitos (8 a 15 números).');
        if (data.clinic.phoneLink && !/^\+?[\d().\s-]{8,20}$/.test(data.clinic.phoneLink)) fail('clinic.phoneLink', 'use um telefone válido.');
        for (const [key, value] of Object.entries(data.clinic.social || {})) if (!validUrl(value)) fail(`clinic.social.${key}`, 'use uma URL http ou https válida.');
        if (data.links) for (const [key, value] of Object.entries(data.links)) if (!validUrl(String(value).replace('{whatsapp}', data.clinic.whatsapp))) fail(`links.${key}`, 'use uma URL http ou https válida; {whatsapp} pode representar o número configurado.');
        if (data.copy && Object.entries(data.copy).some(([key,value]) => !key.trim() || typeof value !== 'string')) fail('copy', 'use pares de texto original e novo texto.');
        if (data.attributeText && Object.entries(data.attributeText).some(([key,value]) => !key || typeof value !== 'string')) fail('attributeText', 'use pares de texto de atributo e substituição.');
        for (const [selector,src] of Object.entries(data.images || {})) { try { document.querySelector(selector); } catch { fail(`images.${selector}`, 'seletor CSS inválido.'); } if (!validImage(src)) fail(`images.${selector}`, 'use um caminho local ou uma URL https.'); }
        if (data.attributes) for (const [selector,attrs] of Object.entries(data.attributes)) {
          try { document.querySelector(selector); } catch { fail(`attributes.${selector}`, 'seletor CSS inválido.'); }
          if (!attrs || typeof attrs !== 'object') fail(`attributes.${selector}`, 'deve ser um objeto de atributos.');
          for (const [name,value] of Object.entries(attrs)) if (!['alt','aria-label','placeholder','title','data-toast'].includes(name) || typeof value !== 'string') fail(`attributes.${selector}.${name}`, 'somente textos alternativos, rótulos acessíveis, placeholders, títulos e avisos são configuráveis.');
        }
        for (const [key, fields] of [['services',['title','description','image']],['team',['name','role','description','image']],['stats',['value','label']]]) {
          if (!Array.isArray(data[key])) throw new Error(key + ' precisa ser uma lista.');
          data[key].forEach((item, index) => {
            const absent = fields.filter(field => typeof item?.[field] !== 'string' || !item[field].trim());
            if (absent.length) fail(`${key}[${index}]`, `preencha: ${absent.join(', ')}.`);
            if (item.image && !validImage(item.image)) fail(`${key}[${index}].image`, 'use um caminho local ou URL https.');
            if (item.badges !== undefined && (!Array.isArray(item.badges) || item.badges.some(label => typeof label !== 'string'))) fail(`${key}[${index}].badges`, 'deve ser uma lista de textos.');
          });
        }
      }

      function renderConfig(data) {
        const clinic = data.clinic;
        document.title = clinic.name + ' — ' + (clinic.tagline || 'Odontologia');
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
          const node = walker.currentNode; const raw = node.textContent; const key = raw.trim().replace(/\s+/g, ' ');
          if (data.copy?.[key] !== undefined) { const leading = raw.match(/^\s*/)?.[0] || ''; const trailing = raw.match(/\s*$/)?.[0] || ''; node.textContent = leading + data.copy[key] + trailing; }
          node.textContent = node.textContent.replaceAll('DenteClean', clinic.name);
        }
        document.querySelectorAll('[aria-label], img[alt]').forEach(el => { for (const attr of ['aria-label','alt']) if (el.hasAttribute(attr)) el.setAttribute(attr, el.getAttribute(attr).replaceAll('DenteClean', clinic.name)); });
        if (data.attributeText) document.querySelectorAll('*').forEach(el => { for (const attr of ['alt','aria-label','placeholder','title','data-toast']) if (el.hasAttribute(attr)) { const value = el.getAttribute(attr); if (data.attributeText[value] !== undefined) el.setAttribute(attr, data.attributeText[value].replaceAll('DenteClean', clinic.name).replaceAll('{name}', clinic.name).replaceAll('{phone}', clinic.phone)); } });
        document.querySelector('.navbar-brand').textContent = clinic.name;
        document.querySelector('.navbar-brand').setAttribute('aria-label', clinic.name + ' — voltar ao topo');
        document.querySelectorAll('.hero-trust-number')[1].textContent = data.stats[1]?.value || '';
        document.querySelectorAll('.hero-trust-number')[2].textContent = data.stats[0]?.value || '';
        const contactValues = document.querySelectorAll('.contact-icon-value');
        contactValues[0].textContent = clinic.address + ' — ' + clinic.city;
        contactValues[1].textContent = clinic.phone;
        const whatsappUrl = String(data.links?.whatsapp || 'https://wa.me/{whatsapp}').replace('{whatsapp}', encodeURIComponent(clinic.whatsapp));
        contactValues[1].innerHTML = `<a href="tel:${escapeHtml(clinic.phoneLink)}">${escapeHtml(clinic.phone)}</a> · <a href="${escapeHtml(whatsappUrl)}">${escapeHtml(ui('whatsappLinkLabel'))}</a>`;
        contactValues[2].innerHTML = `<a href="mailto:${escapeHtml(clinic.email)}">${escapeHtml(clinic.email)}</a>`;
        contactValues[3].textContent = clinic.hours || '';
        document.querySelectorAll('.service-row').forEach((node, index) => { if (index >= data.services.length) node.remove(); });
        const servicesGrid = document.querySelector('.services-grid');
        const serviceTemplate = servicesGrid.querySelector('.service-row');
        data.services.forEach((service, index) => {
          const node = index < servicesGrid.querySelectorAll('.service-row').length ? servicesGrid.querySelectorAll('.service-row')[index] : serviceTemplate.cloneNode(true);
          node.className = 'service-row reveal' + (index % 2 ? ' service-row-reversed' : '');
          node.querySelector('.service-title').textContent = service.title;
          node.querySelector('.service-desc').textContent = service.description;
          const image = node.querySelector('.service-image img'); image.src = service.image; image.alt = service.alt || service.title;
          const badges = node.querySelector('.service-badges'); badges.replaceChildren(...(service.badges || []).map((label, i) => { const span = document.createElement('span'); span.className = 'badge ' + (i % 2 ? 'badge-info' : 'badge-success'); span.textContent = label; return span; }));
          const button = node.querySelector('[data-dialog]'); button.dataset.dialog = 'service-' + index; button.textContent = ui('serviceMore').replaceAll('{title}', service.title);
          if (index >= servicesGrid.querySelectorAll('.service-row').length) servicesGrid.appendChild(node);
        });
        document.querySelectorAll('.team-member').forEach((node, index) => { if (index >= data.team.length) node.remove(); });
        const teamGrid = document.querySelector('.team-grid'); const teamTemplate = teamGrid.querySelector('.team-member');
        data.team.forEach((member, index) => {
          const existing = teamGrid.querySelectorAll('.team-member'); const node = index < existing.length ? existing[index] : teamTemplate.cloneNode(true);
          node.className = 'team-member reveal';
          node.querySelector('.team-member-name').textContent = member.name; node.querySelector('.team-member-role').textContent = member.role; node.querySelector('.team-member-desc').textContent = member.description;
          const img = node.querySelector('img'); img.src = member.image; img.alt = member.name + ', ' + member.role;
          node.querySelector('.team-member-badges').replaceChildren(...(member.badges || []).map(label => { const span = document.createElement('span'); span.className = 'badge badge-success'; span.textContent = label; return span; }));
          if (index >= existing.length) teamGrid.appendChild(node);
        });
        const stats = document.querySelector('.stats-strip'); const statTemplate = stats.querySelector('.stat-item');
        stats.replaceChildren(...data.stats.map(item => { const node = statTemplate.cloneNode(true); node.querySelector('.stat-number').textContent = item.value; node.querySelector('.stat-label').textContent = item.label; return node; }));
        document.querySelectorAll('.contact-info-item')[1].querySelector('.contact-icon-value').dataset.phone = clinic.phone;
        if (data.images) for (const [selector,src] of Object.entries(data.images)) { const image = document.querySelector(selector); if (image && typeof src === 'string') image.src = src; }
        document.querySelector('.whatsapp-float').href = whatsappUrl;
        for (const [selector,attrs] of Object.entries(data.attributes || {})) { const element = document.querySelector(selector); if (element) for (const [name,value] of Object.entries(attrs)) element.setAttribute(name, String(value).replaceAll('DenteClean', clinic.name).replaceAll('{name}', clinic.name).replaceAll('{phone}', clinic.phone).replaceAll('{whatsapp}', clinic.whatsapp).replaceAll('{email}', clinic.email)); }
        for (const [selector,url] of Object.entries(data.links || {})) { const element = document.querySelector(selector); if (element) element.href = url; }
        const social = document.querySelector('.social-links'); social.replaceChildren(...Object.entries(clinic.social || {}).flatMap(([label, url], index) => { const a = document.createElement('a'); a.className = 'social-link'; a.href = url; a.textContent = label; a.target = '_blank'; a.rel = 'noopener noreferrer'; return index ? [document.createTextNode(' · '), a] : [a]; }));
      }
      function escapeHtml(value) { return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
      function validUrl(value) { try { return ['http:','https:'].includes(new URL(value).protocol); } catch { return false; } }
      function validImage(value) { return typeof value === 'string' && /^(?!javascript:)(?!data:)[^\s]+$/i.test(value); }
      function ui(key) { return config.ui?.[key] ?? ({ close: 'Fechar', send: 'Enviar Mensagem', sending: 'Enviando...', serviceMore: 'Saiba mais sobre {title}' }[key] || key); }

      // ---- Navbar — scroll transition & mobile toggle ----
      const navbar = document.getElementById('navbar');
      const navbarToggle = document.getElementById('navbar-toggle');
      const navbarLinks = document.getElementById('navbar-links');

      // Scroll listener: add .scrolled class when past hero
      function updateNavbar() {
        const scrollY = document.getElementById('root').scrollTop || window.scrollY;
        navbar.classList.toggle('scrolled', scrollY > 60);

        // Dynamic scrollbar: gold over dark hero, dark over light content
        const root = document.getElementById('root');
        const heroHeight = document.querySelector('.hero').offsetHeight;
        if (scrollY < heroHeight - 80) {
          root.style.setProperty('--scrollbar-thumb', 'var(--accent-gold)');
          root.style.setProperty('--scrollbar-thumb-hover', 'var(--accent-gold-hover)');
        } else {
          root.style.setProperty('--scrollbar-thumb', 'var(--primary)');
          root.style.setProperty('--scrollbar-thumb-hover', 'var(--primary-hover)');
        }
      }
      document.getElementById('root').addEventListener('scroll', updateNavbar, { passive: true });
      window.addEventListener('scroll', updateNavbar, { passive: true });
      updateNavbar(); // initial state

      // Mobile hamburger toggle
      // The page scrolls inside #root, so locking <body> never actually froze it.
      const rootScroller = document.getElementById('root');

      function setMobileMenu(open) {
        navbarToggle.setAttribute('aria-expanded', String(open));
        navbarToggle.setAttribute('aria-label', open ? ui('menuClose') : ui('menuOpen'));
        navbarLinks.classList.toggle('open', open);
        rootScroller.style.overflow = open ? 'hidden' : '';

        if (open) {
          const firstLink = navbarLinks.querySelector('.navbar-link');
          if (firstLink) firstLink.focus();
        } else if (navbarLinks.contains(document.activeElement)) {
          navbarToggle.focus();
        }
      }

      navbarToggle.addEventListener('click', function() {
        setMobileMenu(this.getAttribute('aria-expanded') !== 'true');
      });

      // Escape closes the menu, same as pressing the close (X) control
      document.addEventListener('keydown', function(event) {
        if (event.key !== 'Escape') return;
        if (navbarToggle.getAttribute('aria-expanded') !== 'true') return;
        setMobileMenu(false);
        navbarToggle.focus();
      });

      // Close mobile menu when a link is clicked
      function closeMobileMenu() {
        setMobileMenu(false);
      }

      // Brand logo → scroll to top
      document.querySelector('.navbar-brand').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('root').scrollTo({ top: 0, behavior: 'smooth' });
      });

      // Nav link click → smooth scroll to section
      document.querySelectorAll('[data-nav]').forEach(function(link) {
        link.addEventListener('click', function() {
          closeMobileMenu();
          const target = this.dataset.nav;
          const sectionMap = {
            services: '.section-arch',
            about: '.about-section',
            team: '.team-intro',
            contact: '.contact-section'
          };
          const selector = sectionMap[target];
          if (selector) {
            const el = document.querySelector(selector);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        });
      });

      // Dialog content store ----
      const dialogs = {
        'booking-dialog': {
          title: ui('bookingTitle'),
          body: ui('bookingBody').replaceAll('{phone}', config.clinic.phone),
          actions: [
            { text: ui('contactAction'), type: 'primary', action: 'scroll-to-contact' },
            { text: ui('close'), type: 'ghost', action: 'close' }
          ]
        },
        'cleaning-dialog': {
          title: ui('cleaningTitle'),
          body: ui('cleaningBody'),
          actions: [
            { text: ui('close'), type: 'ghost', action: 'close' }
          ]
        },
        'whitening-dialog': {
          title: ui('whiteningTitle'),
          body: ui('whiteningBody'),
          actions: [
            { text: ui('close'), type: 'ghost', action: 'close' }
          ]
        },
        'implants-dialog': {
          title: ui('implantsTitle'),
          body: ui('implantsBody'),
          actions: [
            { text: ui('close'), type: 'ghost', action: 'close' }
          ]
        }
      };
      config.services.forEach((service, index) => { dialogs['service-' + index] = { title: service.title, body: service.dialog || service.description, actions: [{ text: ui('close'), type: 'ghost', action: 'close' }] }; });

      // ---- Modal ----
      const overlay = document.getElementById('modal-overlay');
      const modalTitle = document.getElementById('modal-title');
      const modalBody = document.getElementById('modal-body');
      const modalActions = document.getElementById('modal-actions');
      const modalCloseBtn = document.getElementById('modal-close-btn');

      function openModal(dialogKey) {
        const data = dialogs[dialogKey];
        if (!data) return;

        modalTitle.textContent = data.title;
        modalBody.textContent = data.body;
        modalActions.innerHTML = '';

        data.actions.forEach(function(action) {
          const btn = document.createElement('button');
          btn.textContent = action.text;
          btn.className = action.type === 'primary'
            ? 'btn btn-primary'
            : 'btn btn-ghost';
          btn.addEventListener('click', function() {
            if (action.action === 'close') {
              closeModal();
            } else if (action.action === 'scroll-to-contact') {
              closeModal();
              document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' });
            }
          });
          modalActions.appendChild(btn);
        });

        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Focus the close button
        setTimeout(function() { modalCloseBtn.focus(); }, 100);
      }

      function closeModal() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }

      // Open dialog buttons
      document.querySelectorAll('[data-dialog]').forEach(function(btn) {
        btn.addEventListener('click', function() {
          openModal(this.dataset.dialog);
        });
      });

      // Close modal events
      modalCloseBtn.addEventListener('click', closeModal);
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closeModal();
      });
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
          closeModal();
        }
      });

      // ---- Toast ----
      const toastContainer = document.getElementById('toast-container');

      function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toastContainer.appendChild(toast);

        // Trigger animation
        requestAnimationFrame(function() {
          toast.classList.add('show');
        });

        setTimeout(function() {
          toast.classList.remove('show');
          setTimeout(function() {
            toast.remove();
          }, 300);
        }, 3000);
      }

      document.querySelectorAll('[data-toast]').forEach(function(btn) {
        btn.addEventListener('click', function() {
          showToast(this.dataset.toast);
        });
      });

      // Scroll-to-top for footer Home link
      document.querySelector('[data-scroll-top]')?.addEventListener('click', function() {
        document.getElementById('root').scrollTo({ top: 0, behavior: 'smooth' });
      });

      // ---- Form ----
      const form = document.getElementById('appointment-form');
      const submitBtn = document.getElementById('form-submit-btn');

      form.addEventListener('submit', function(e) {
        e.preventDefault();

        let valid = true;
        const nameInput = document.getElementById('full-name');
        const emailInput = document.getElementById('email');

        // Simple validation
        [nameInput, emailInput].forEach(function(input) {
          input.classList.remove('error');
          const errorSpan = input.parentElement.querySelector('.form-error');
          errorSpan.classList.add('sr-only');
          errorSpan.textContent = '';
        });

        if (!nameInput.value.trim()) {
          nameInput.classList.add('error');
          const errorSpan = nameInput.parentElement.querySelector('.form-error');
          errorSpan.textContent = ui('formNameRequired');
          errorSpan.classList.remove('sr-only');
          valid = false;
        }

        if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
          emailInput.classList.add('error');
          const errorSpan = emailInput.parentElement.querySelector('.form-error');
          errorSpan.textContent = ui('formEmailRequired');
          errorSpan.classList.remove('sr-only');
          valid = false;
        }

        if (valid) {
          submitBtn.disabled = true;
          submitBtn.textContent = ui('sending');

          setTimeout(function() {
            showToast(ui('success'));
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = ui('send');
          }, 800);
        }
      });

      // Live validation reset on input
      form.querySelectorAll('.form-input, .form-textarea').forEach(function(input) {
        input.addEventListener('input', function() {
          this.classList.remove('error');
          const errorSpan = this.parentElement.querySelector('.form-error');
          if (errorSpan) {
            errorSpan.classList.add('sr-only');
            errorSpan.textContent = '';
          }
        });
      });

      // ---- Scroll Reveal (Intersection Observer) ----
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px'
        });

        document.querySelectorAll('.reveal').forEach(function(el) {
          observer.observe(el);
        });
      } else {
        // Fallback: show all
        document.querySelectorAll('.reveal').forEach(function(el) {
          el.classList.add('visible');
        });
      }

      // ---- Hero link scroll behavior ----
      document.querySelector('.hero-link[data-toast]')?.addEventListener('click', function() {
        const servicesSection = document.querySelector('.services-intro');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      });

      document.body.classList.remove('config-loading');
      document.body.setAttribute('aria-busy', 'false');
      document.getElementById('loading-skeleton')?.remove();

    })();
