document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o elemento que contém os links de navegação
    const navLinks = document.querySelector('.nav-links');
    // Seleciona o ícone do menu hambúrguer
    const hamburger = document.querySelector('.hamburger');
    // Seleciona todos os itens de navegação
    const navItems = document.querySelectorAll('.nav-links li a');

    // Adiciona um evento de clique ao menu hambúrguer para alternar a visibilidade dos links de navegação
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Adiciona um evento de clique a cada item de navegação para fechar o menu hambúrguer
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Seleciona o contêiner de slides e os elementos de controle
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    // Inicializa o índice do slide atual
    let currentIndex = 0;
    let isTransitioning = false;

    // Função para mostrar um slide específico
    function showSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;

        slides.style.transition = 'transform 0.5s ease-in-out';
        slides.style.transform = `translateX(${-index * 100}%)`;

        currentIndex = index;

        setTimeout(() => {
            if (currentIndex >= slide.length) {
                slides.style.transition = 'none';
                slides.style.transform = `translateX(0)`;
                currentIndex = 0;
            } else if (currentIndex < 0) {
                slides.style.transition = 'none';
                slides.style.transform = `translateX(${-((slide.length - 1) * 100)}%)`;
                currentIndex = slide.length - 1;
            }
            isTransitioning = false;
        }, 500);
    }

    // Adiciona um evento de clique ao controle anterior para mostrar o slide anterior
    prev.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Adiciona um evento de clique ao controle próximo para mostrar o próximo slide
    next.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Define um intervalo para mudar automaticamente para o próximo slide a cada 3 segundos
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
});
