export function EnviarFormulario() {

const form = document.getElementById('form-contato');
        const mensagemDiv = document.getElementById('form-mensagem');

        form.addEventListener('submit', async function (e) {
            e.preventDefault(); // Evita o envio padrão do formulário

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const mensagem = document.getElementById('mensagem').value;

            const response = await fetch('http://localhost:3000/contato', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, email, telefone, mensagem })
            });

            if (response.ok) {
                mensagemDiv.textContent = 'Mensagem enviada com sucesso!';
                mensagemDiv.className = 'mensagem sucesso'; // Exibe a mensagem de sucesso
                form.reset(); // Limpa os campos do formulário
            } else {
                mensagemDiv.textContent = 'Erro ao enviar a mensagem.';
                mensagemDiv.className = 'mensagem erro'; // Exibe a mensagem de erro
            }
        });

    }