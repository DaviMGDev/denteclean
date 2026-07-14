    (function() {
      'use strict';

      // ---- Dialog content store ----
      const dialogs = {
        'booking-dialog': {
          title: 'Agende sua Consulta',
          body: 'Pronto para o sorriso mais saudável? Ligue para (41) 99842-0142 ou use o formulário abaixo para agendar sua primeira consulta. Novos pacientes recebem uma avaliação gratuita.',
          actions: [
            { text: 'Ir para Contato', type: 'primary', action: 'scroll-to-contact' },
            { text: 'Fechar', type: 'ghost', action: 'close' }
          ]
        },
        'cleaning-dialog': {
          title: 'Limpeza Profissional',
          body: 'Nossos higienistas utilizam ultra-sons e jateamento para uma limpeza profunda e suave. Inclui tratamento com flúor e orientação de higiene bucal. Coberto pela maioria dos convênios.',
          actions: [
            { text: 'Fechar', type: 'ghost', action: 'close' }
          ]
        },
        'whitening-dialog': {
          title: 'Clareamento a Laser',
          body: 'Nosso sistema de clareamento Zoom! com ativação LED entrega resultados até 8 tons mais claros em menos de 90 minutos. Kits para uso em casa também disponíveis para retoques.',
          actions: [
            { text: 'Fechar', type: 'ghost', action: 'close' }
          ]
        },
        'implants-dialog': {
          title: 'Implantes Dentários',
          body: 'De restaurações unitárias a arcos completos. Utilizamos imagens CBCT 3D para posicionamento de precisão e oferecemos opções de sedação para casos complexos. Avaliação gratuita para novos pacientes.',
          actions: [
            { text: 'Fechar', type: 'ghost', action: 'close' }
          ]
        }
      };

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
          errorSpan.textContent = 'O nome é obrigatório';
          errorSpan.classList.remove('sr-only');
          valid = false;
        }

        if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
          emailInput.classList.add('error');
          const errorSpan = emailInput.parentElement.querySelector('.form-error');
          errorSpan.textContent = 'Um e-mail válido é obrigatório';
          errorSpan.classList.remove('sr-only');
          valid = false;
        }

        if (valid) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Enviando...';

          setTimeout(function() {
            showToast("Mensagem enviada! Entraremos em contato em até 24 horas. \u2728");
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Mensagem';
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

    })();
