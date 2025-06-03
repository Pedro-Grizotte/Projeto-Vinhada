# Projeto Vinhada (Laravel + React)

Projeto: Esse é um projeto de agendamento de eventos, onde voce pode
cadastrat eventos, marcar imprevisto e será marcado no google calendar
como uma anotação. Possivelmente será adicionado a funcionalidade de
enviar e-mail para os participantes e todos receberam um e-mail para
confirmar a inscrição.

## Visão Geral

A aplicação permite visualizar um calendário de eventos, agendar novos encontros e (futuramente) receber notificações.

## Tecnologias: 
- Laravel 12, React, Vite, PHP 8.x, Node.js, Composer, NPM,
- SQLite (momentaneamnte), Google Calendar API, PHPMailers

---

## Configuração do Ambiente de Desenvolvimento
Siga esses passos após clonar o projeto:
1. instalar dependencias PHP:
- Certifique-se de ter o [Composer](https://getcomposer.org)
  instalado.
- Execute o comando `composer install` no terminal.

2. instalar dependencias do Node:
- Certifique-se de ter o [Node.js](https://nodejs.org/en) e [NPM](https://www.npmjs.com/) instalados.
- Execute o comando `npm install` no terminal.

3. configurar arquivo de ambiente (.env):
- Copie o arquivo `.env.example` para `.env` e ajuste as variáveis de ambient

4. Configurar o banco de dados (SQLite padrão):
- Crie o arquivo do banco na pasta database/ 'database.sqlite'
- Execute as migrações com o comando `php artisan migrate`
---

## Rodando o Projeto

Você precisa rodar **dois** servidores simultaneamentes em diferentes janelas do terminal:
1. **Servidor do React:** `npm run dev`
2. **Servidor do Laravel:** `php artisan serve`

Após iniciar ambos os servidores, acesse a URL fornecida pelo servidor do Laravel para acessar a aplicação.

---

## Diagrama de Banco de Dados (Modelo Conceitual)

---

## APIs Externas para Integração

- [Google Calendar API](https://developers.google.com/calendar/api/v3/reference)
- [PHPMailer](https://github.com/PHPMailer/PHPMailer)

---

