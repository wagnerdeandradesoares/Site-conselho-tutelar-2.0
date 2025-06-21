export function MenuHamburguer (){

    // Selecionando o menu e o ícone de hambúrguer
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Adicionando evento de clique no hambúrguer
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Mostra ou esconde o menu
});

}