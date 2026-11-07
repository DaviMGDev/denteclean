# Template de Site DenteClean

Site institucional estático e configurável, feito com HTML, CSS e JavaScript puro. Todos os textos da clínica, contatos, imagens e informações de acessibilidade ficam em `site.config.json`; HTML e JavaScript definem a estrutura reutilizável e o comportamento.

## Pré-visualização

Requer Node.js 18 ou superior. Neste diretório, execute:

```bash
npm run preview
```

Acesse `http://127.0.0.1:4173`. O servidor local serve apenas para pré-visualização; o site é estático.

## Personalização

Edite `site.config.json` diretamente ou execute `npm run setup` para responder perguntas sobre nome, telefone, WhatsApp, e-mail e endereço. O assistente preserva os demais dados e mantém valores atuais quando a resposta fica em branco. `site.config.json.example` é um exemplo inicial.

O config contém apenas conteúdo da clínica. Textos estáticos ficam em `copy` (texto original → substituição), mensagens de diálogos e formulários em `ui`, e textos alternativos, placeholders, rótulos acessíveis, títulos e avisos toast em `attributeText`. `attributes` permite substituir atributos de texto por seletor. `images` mapeia seletores para caminhos de imagens locais. Identidade e contatos ficam em `clinic`; destinos sociais ficam em `clinic.social` e outros links em `links`, com `links.whatsapp` definindo a ação do WhatsApp. `services`, `team` e `stats` são listas que podem ser adicionadas, removidas ou reordenadas. Serviços usam `title`, `description`, `image`, `alt`, `badges` e `dialog`; equipe usa `name`, `role`, `description`, `image` e `badges`; estatísticas usam `value` e `label`. A estrutura e a aparência da página são definidas no HTML e CSS. Novos componentes estruturais exigem mudanças no código.

O formulário de agendamento é apenas uma demonstração: valida os campos e exibe um retorno simulado, mas não envia dados. Para agendar de verdade, use os links de telefone ou WhatsApp.

Valores inválidos são indicados na página pelo caminho do campo que precisa de correção. Cores usam hexadecimal de seis dígitos, telefones são verificados e destinos externos devem usar HTTP ou HTTPS. Os links e diálogos de contato usam os dados configurados.

## Build

```bash
npm run build
```

O site estático completo é gerado em `dist/`. Sirva essa pasta com qualquer servidor estático, por exemplo `npm run preview -- dist`.

## Estrutura

```text
index.html              Estrutura da página
style.css               Estilos e layout responsivo
app.js                  Interações e renderização do config
site.config.json        Conteúdo da clínica
site.config.json.example Exemplo de configuração
scripts/                Ferramentas de prévia, build e configuração
assets/images/          Imagens do site
```

O repositório não possui suíte de testes automatizados. Para conferir o visual, pré-visualize em larguras desktop e mobile e verifique navegação, diálogos, links de contato e retorno do formulário.

## Licença

[MIT](LICENSE) © 2026 DaviMGDev
