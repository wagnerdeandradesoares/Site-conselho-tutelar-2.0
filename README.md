🧾 Documentação do Projeto: Site - Conselho Tutelar
1. Identificação
Projeto: Atividade de Extensão - Conselho Tutelar

Tema: Proteção e defesa dos direitos das crianças e adolescentes

Aluno: Wagner Andrade Soares

Instituição: Uniasselvi

Curso: Análise e Desenvolvimento de Sistemas

Turma: FLD207825CET

2. Objetivo do Site
O site tem como objetivo informar e conscientizar a população sobre o papel do Conselho Tutelar, seus serviços e formas de contato. Ele também oferece um formulário para facilitar a comunicação direta entre a comunidade e a entidade responsável pela proteção de crianças e adolescentes.

3. Funcionalidades
Página inicial com banner interativo

Seção “Sobre” explicando o papel do Conselho Tutelar

Serviços oferecidos:

Orientação e Aconselhamento

Recebimento de Denúncias

Aplicação de Medidas Protetivas

Formulário de contato integrado ao banco de dados (MongoDB)

Cards com formas de contato (Telefone, Email, WhatsApp, Redes Sociais)

Google Maps com localização

Design responsivo com menu hambúrguer

4. Tecnologias Utilizadas
Frontend:

HTML5

CSS3 (com responsividade)

JavaScript (modularizado)

Backend:

Node.js

Express

MongoDB Atlas

Body-parser

5. Arquivos e Estrutura
index.html: Estrutura da página, seções de conteúdo e formulário

style.css: Estilos do layout, responsividade e design

form.js: Lógica do envio do formulário e tratamento de resposta

hamburguer.js: Lógica do menu móvel

main.js: Importa e executa os módulos JS

server.js: Backend com Node.js que conecta ao MongoDB e recebe os dados do formulário

6. Banco de Dados
Utilizado o MongoDB Atlas, com a coleção cadastro.

Armazena os dados: nome, email, telefone, mensagem.

7. Como Executar
Instalar dependências com npm install

Executar o servidor com node server.js

Acessar http://localhost:3000 no navegador
8. Visualizar na Web

Acessar: https://site-conselho-tutelar-2-0.vercel.app/
