let menuIcon = document.getElementById('menu-icon');
let menu = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('visible');
});