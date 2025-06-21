const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://wagnergw770:wagner0310@cluster0.yb9lh7u.mongodb.net/banco-site?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch((err) => {
        console.log('Erro ao conectar ao MongoDB', err);
    });

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial (GET) que serve o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Criando o esquema para o MongoDB, incluindo o campo "telefone"
const contatoSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,  // Novo campo telefone
    mensagem: String
});

// Criando o modelo
const Contato = mongoose.model('Contato', contatoSchema, 'cadastro');

// Rota para receber o formulário e salvar no MongoDB
app.post('/contato', async (req, res) => {
    const { nome, email, telefone, mensagem } = req.body;

    // Criando um novo contato
    const novoContato = new Contato({
        nome,
        email,
        telefone, // Incluindo telefone
        mensagem
    });

    try {
        await novoContato.save();
        res.status(201).send({ message: 'Mensagem recebida!' });
    } catch (err) {
        res.status(500).send({ message: 'Erro ao enviar a mensagem.', error: err });
    }
});

// Iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
