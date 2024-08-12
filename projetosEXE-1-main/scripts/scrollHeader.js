let lastScrollTop = 0;
const header = document.querySelector('header');
const headerInfo = document.querySelector('#headerInfo');

window.addEventListener('scroll', function () {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Rolando para baixo
        header.style.transform = 'translateY(-70%)'; // Oculta o headerInfo
    } else {
        // Rolando para cima
        header.style.transform = 'translateY(0)'; // Mostra o headerInfo
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Para lidar com casos de rolar para cima além do topo
});

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const scrollThreshold = 100; // A posição de rolagem em pixels para adicionar a classe

    window.addEventListener('scroll', function () {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('background');
        } else {
            header.classList.remove('background');
        }
    });
});