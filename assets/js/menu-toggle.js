// Seletores principais
const toggleMenu = document.getElementById('toggle-menu');
const navMenu = document.getElementById('header__nav');
const navLinks = document.querySelectorAll('.header__nav-link');

// ====== Navegação Mobile ======

// Alternar menu de navegação
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('is-open');

    // Trocar ícone do botão
    const icon = toggleMenu.querySelector('i');
    if (navMenu.classList.contains('is-open')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x'); // ícone X
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu'); // ícone menu
    }
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');

        // Volta o ícone para hambúrguer
        const icon = toggleMenu.querySelector('i');
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    });
});
