const menuBtns = document.querySelectorAll('.menu__mobile-btn')
const header = document.getElementById('header')
const menu = document.getElementById('menu')
const body = document.getElementsByTagName('body')[0]

let activeMobileMenu = false

if(menuBtns.length) {
    for(let i = 0; i < menuBtns.length; i++) {
        menuBtns[i].addEventListener('click', () => {
            if(activeMobileMenu) {
                menu.classList.remove('active')
                header.classList.remove('header-mobile-menu')
                menuBtns[i].classList.remove('active')
                body.style.overflow = 'auto'
            } else {
                body.style.overflow = 'hidden'
                menu.classList.add('active')
                header.classList.add('header-mobile-menu')
                menuBtns[i].classList.add('active')
            }
            activeMobileMenu = !activeMobileMenu
        })
    }
}