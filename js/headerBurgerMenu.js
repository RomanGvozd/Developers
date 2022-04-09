const burgerButton = document.querySelector('.header__button-mobile');

burgerButton.addEventListener('click', ()=>{
    const navList = document.querySelector('.nav__list');
    navList.classList.toggle('nav__list-active');

    burgerButton.classList.toggle('active');
});