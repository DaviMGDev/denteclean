# DenteClean — Landing Page de Clínica Odontológica Premium

Site institucional de página única para uma clínica odontológica premium (fictícia). Construído com HTML5 semântico, CSS moderno (design tokens, estética inspirada em Art Nouveau) e JavaScript puro para componentes interativos. Zero frameworks, zero etapa de build, zero backend.

---

## Funcionalidades

- **Seção Hero** — Apresentação em tela cheia com imagem de fundo, vinheta escura e dois CTAs (modal de agendamento + scroll para serviços)
- **Serviços** — Três procedimentos (limpeza, clareamento, implantes) em layout editorial alternado com badges e modais de detalhes
- **Sobre Nós** — Composição dividida com foto da clínica, declaração de missão e depoimento de paciente
- **Equipe** — Três perfis com layouts distintos (grande em destaque, compacto texto-imagem, imagem deslocada) e faixa de estatísticas de credibilidade
- **Formulário de Contato** — Layout de duas colunas com cartão de informações (endereço, telefone, e-mail, horários) e formulário de agendamento com validação client-side e notificações toast
- **Rodapé** — Três colunas em fundo escuro com marca, links rápidos e referências legais
- **Sistema de Modal** — Dialog acessível e navegável por teclado para detalhes de serviços e CTA de agendamento
- **Notificações Toast** — Mensagens de feedback não intrusivas para interações do usuário
- **Revelação ao Scroll** — Animações de fade-in baseadas em Intersection Observer
- **Responsivo** — Tipografia fluida (`clamp()`), dois breakpoints (900px, 600px), colapso mobile-first

---

## Sistema de Design

A linguagem visual concilia **elegância estrutural Art Nouveau** com **minimalismo clínico**:

- **Baseado em tokens:** cores, tipografia, espaçamento, raios de borda, z-index — todos definidos como propriedades CSS customizadas em `:root`
- **Especificação DESIGN.md:** sistema de design completo documentado em [`design/design.md`](design/design.md) (compatível com CLI `@google/design.md`)
- **Protótipo InterSpec:** wireframe definido em [`design/index.is`](design/index.is) usando notação InterSpec
- **Princípios-chave:** profundidade tonal em vez de sombras, containers com arco superior, motivos de vinhas botânicas, único acento dourado por viewport, paleta neutro-quente

---

## Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| **Marcação** | HTML5 (semântico, landmarks ARIA) |
| **Estilização** | CSS3 (propriedades customizadas, `clamp()`, flexbox, unidades `dvh`) |
| **Interatividade** | JavaScript (ES6, Intersection Observer, padrão IIFE) |
| **Imagens** | WebP (convertido de PNG via ImageMagick) |
| **Documentação de design** | DESIGN.md + InterSpec |
| **Testes** | Playwright (estrutura inicial criada) |
| **Versionamento** | Git + GitHub |

**Zero dependências em tempo de execução.** Sem npm, sem bundlers, sem frameworks.

---

## Estrutura do Projeto

```
denteclean/
├── index.html              # Página principal
├── style.css               # Folha de estilos completa (~1366 linhas)
├── app.js                  # Lógica client-side (~223 linhas)
├── LICENSE                 # Licença MIT
├── design/
│   ├── design.md           # Especificação completa do design system
│   └── index.is            # Wireframe InterSpec
├── assets/
│   └── images/             # 9 imagens WebP (otimizadas)
├── tests/
│   └── playwright/         # Estrutura para testes E2E
└── .gitignore
```

---

## Começando

```bash
# Clone o repositório
git clone https://github.com/DaviMGDev/denteclean.git

# Abra diretamente — sem etapa de build
open denteclean/index.html
```

Ou sirva o diretório com qualquer servidor de arquivos estáticos:

```bash
npx serve denteclean/
# ou
python3 -m http.server -d denteclean/
```

---

## Otimização de Imagens

Todas as imagens raster foram convertidas de PNG para **WebP** usando ImageMagick (qualidade 85, metadados removidos), resultando em **93% de redução de tamanho** (3,8 MB → 268 KB no total).

---

## Licença

[MIT](LICENSE) © 2026 DaviMGDev
