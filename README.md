# AMA Frontend

Frontend inicial do **AMA — Assistência e Mobilização Animal**, estruturado a partir das referências visuais do protótipo Figma fornecidas pelo grupo.

## Telas incluídas

- Onboarding com três etapas: apresentação do AMA, compartilhamento de alertas e acompanhamento;
- Login;
- Criação de conta;
- Navegação entre as telas e validação básica dos formulários;
- Alternância de visibilidade de senha.

**Importante:** autenticação real, criação de contas no servidor, recuperação de senha, mapa, casos, chat e notificações ainda dependem da implementação da API/backend. Os formulários desta versão fazem validações locais e não criam contas nem autenticam usuários.

## Tecnologias

- HTML5 semântico;
- CSS3 responsivo;
- JavaScript com ES modules, sem framework ou dependências externas.

## Executar localmente

1. Extraia o ZIP ou clone o repositório.
2. Abra a pasta no VS Code.
3. Execute `index.html` com Live Server ou outro servidor HTTP local.
4. Teste em viewport de celular e computador.

O uso de servidor local é recomendado para módulos JavaScript. Não é necessário `npm install`.

## Estrutura

```text
ama_frontend/
├── index.html
├── README.md
├── .gitignore
├── .editorconfig
├── .env.example
├── assets/
│   └── illustrations/
│       ├── onboarding-rescue.svg
│       ├── onboarding-share.svg
│       └── onboarding-chat.svg
├── docs/
│   └── frontend-architecture.md
└── src/
    ├── css/
    │   ├── main.css
    │   ├── base/
    │   │   └── variables.css
    │   └── components/
    │       └── forms.css
    └── js/
        ├── main.js
        ├── config/
        │   └── env.js
        ├── services/
        │   └── api.js
        └── pages/
            └── app.js
```

## Convenções

- Pastas e arquivos em `kebab-case`;
- funções e variáveis em `camelCase`;
- estilos agrupados por responsabilidade;
- chamadas HTTP centralizadas em `services/api.js`;
- commits pequenos e descritivos, por exemplo `feat: implementa onboarding`, `feat: adiciona tela de login` e `fix: ajusta responsividade`.

## Próximas etapas

1. Conferir as telas com o protótipo original do Figma;
2. alinhar textos, ilustrações e dimensões com o design aprovado;
3. definir os contratos da API com o backend;
4. conectar autenticação e cadastro;
5. desenvolver as telas funcionais de casos, mapa e acompanhamento;
6. validar os requisitos e registrar evidências de teste.

Esta estrutura não significa que funcionalidades futuras já estejam implementadas.
