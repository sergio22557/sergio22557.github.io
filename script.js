// Menú desplegable
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Animación de la sección "hero"
window.addEventListener('scroll', () => {
    const heroText = document.querySelector('.hero h1');
    const heroP = document.querySelector('.hero p');
    const heroBtn = document.querySelector('.hero .btn');

    const windowHeight = window.innerHeight;
    const heroTop = heroText.getBoundingClientRect().top;

    if (heroTop < windowHeight - 50) {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
        heroP.style.opacity = '1';
        heroP.style.transform = 'translateY(0)';
        heroBtn.style.opacity = '1';
        heroBtn.style.transform = 'translateY(0)';
    }
});
