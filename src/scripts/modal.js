const modal = document.querySelector('.modal')
const body = document.getElementsByTagName('body')[0]
const openBtns = document.querySelectorAll('.make-request-btn')
const closeBtn = document.getElementById('close-modal')

if(openBtns.length) {
    for(let i = 0; i < openBtns.length; i++) {
        openBtns[i].addEventListener('click', () => {
            openModal()
        })
    }
}

if(closeBtn) {
    closeBtn.addEventListener('click', () => {
        closeModal()
    })
}

function openModal() {
    body.style.overflow = 'hidden'

    modal.classList.add('active')
}

function closeModal() {
    modal.classList.remove('active')

    body.style.overflow = 'auto'
}

