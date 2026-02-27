const nav = document.querySelector('.header__nav')
const burger = document.querySelector('.burger-menu')
const burgerIcon = document.querySelector('.burger-menu__icon')

burger.addEventListener("click", function() {
    nav.classList.toggle('header__nav--open');

    if (nav.classList.contains('header__nav--open')) {
        burgerIcon.src = "./IMG/menu-burger-close.svg"
    } else {
        burgerIcon.src = "./IMG/menu-burger.svg"
    }
})