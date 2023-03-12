const headerEl= document.getElementById('header')

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        headerEl.classList.add('active')
    } else {
        headerEl.classList.remove('active')
    }
})

