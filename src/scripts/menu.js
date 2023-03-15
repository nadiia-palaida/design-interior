const menuBtn = document.getElementById('menu-btn')
const header = document.getElementById('header')
const menu = document.getElementById('menu')
const body = document.getElementsByTagName('body')[0]

let activeMobileMenu = false

if(menuBtn) {
    menuBtn.addEventListener('click', () => {
        if(activeMobileMenu) {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.style.overflow = 'auto'
        } else {
            body.style.overflow = 'hidden'
            menu.classList.add('active')
            menuBtn.classList.add('active')
        }
        activeMobileMenu = !activeMobileMenu
    })
}