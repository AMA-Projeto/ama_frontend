# Arquitetura do frontend AMA

## Responsabilidades

O frontend é a camada de apresentação: renderiza telas, coleta entradas, realiza validações básicas de interface e envia requisições à API. Regras de negócio, autorização e persistência devem permanecer no backend.

## Organização

- `index.html`: documento e ponto de entrada;
- `src/css/base/`: variáveis visuais globais;
- `src/css/components/`: estilos compartilhados de formulários e controles;
- `src/js/main.js`: inicialização da aplicação;
- `src/js/pages/app.js`: navegação e renderização das telas atuais;
- `src/js/services/api.js`: cliente HTTP centralizado;
- `src/js/config/env.js`: endereço-base de API para desenvolvimento;
- `assets/illustrations/`: ilustrações SVG usadas no onboarding.

## Estado atual

Implementados nesta base: três etapas de onboarding, navegação para login e cadastro, campos com atributos de acessibilidade, alternância de visibilidade de senha e validação local básica.

Ainda não implementados: autenticação no servidor, criação real de conta, recuperação de senha, persistência de sessão, mapa, cadastro/consulta de casos, chat, notificações e integrações com serviços externos.

## Próximos passos técnicos

1. Confirmar o contrato dos endpoints com a equipe de backend;
2. implementar chamadas para cadastro/login em `services/`;
3. definir tratamento de sessão e erros;
4. construir telas funcionais para casos, mapa e acompanhamento;
5. testar em tamanhos de tela diferentes e registrar evidências.

Não colocar tokens privados, senhas ou chaves secretas no frontend.
