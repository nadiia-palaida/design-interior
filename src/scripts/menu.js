const menuBtns = document.querySelectorAll('.menu__mobile-btn')
const menuItems = document.querySelectorAll('.menu__item')
const header = document.getElementById('header')
const menu = document.getElementById('menu')
const body = document.getElementsByTagName('body')[0]

let activeMobileMenu = false

if (menuBtns.length) {
    for (let i = 0; i < menuBtns.length; i++) {
        menuBtns[i].addEventListener('click', () => {
            if (activeMobileMenu) {
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

if (menuItems.length) {
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', () => {
            console.log('click link')
            unActiveAll()
            menuItems[i].classList.add('active')
        })
    }

    function unActiveAll() {
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove('active')
        }
    }
}