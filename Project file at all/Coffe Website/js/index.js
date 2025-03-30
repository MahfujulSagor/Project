// show menu
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// menu hide
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// remove MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener("click", linkAction));

// ADD SHADOW HEADER
const shadowHeader = () =>{
    const header= document.getElementById('header')
    this.scrollY>=50? header.classList.add('shadow-header'):header.classList.remove('shadow-header')
}
//SWIPER POPULAR
const swiperPopular = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor:true,
    spaceBetween:32,
    slidesPerView:'auto',
    centeredSlides:'auto',

    breakpoints:{
        1150:{
            spaceBetween:80,
        }
    }
  });
  