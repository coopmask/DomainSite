// Variables
const nav = document.getElementById('nav'),
      menuToggle = document.getElementById('menu-toggle'),
      header = document.getElementById('header');

// Toggle the menu
const toggleMenu = () => {
    nav.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleMenu);

// Add a border to the header when scrolling
const headerBorderScroll = () => {
    if (this.scrollY >= 30) header.classList.add('active-scroll'); else header.classList.remove('active-scroll');
}

window.addEventListener('scroll', headerBorderScroll);