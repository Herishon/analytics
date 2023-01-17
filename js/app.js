// Sticky Navbar
window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');

    nav.classList.toggle('sticky-nav', window.scrollY > 0);
})

// Hamburger Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    mobileMenu.classList.toggle('opacity-0');
    mobileMenu.classList.toggle('-translate-x-full');
})

// const head = document.getElementsByClassName('header');

// function changeBg(media) {
//     if(media.matches) {
//         head.style.src = "./../img/bg-banner-mobile.png";
//     }
// }

// const media = window.matchMedia("(max-width: 575px");
// changeBg(media);
// media.addEventListener(changeBg);