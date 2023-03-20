const modalRequest = document.querySelector('.modal-request')
const modal = document.querySelectorAll('.modal')
const body = document.getElementsByTagName('body')[0]
const openBtns = document.querySelectorAll('.make-request-btn')
const closeBtns = document.querySelectorAll('.modal__btn-close')

const modalThanks = document.querySelector('.modal-thanks')
const openThanksBtn = document.querySelector('.open-thanks-modal-btn')

if(openBtns.length) {
    for(let i = 0; i < openBtns.length; i++) {
        openBtns[i].addEventListener('click', () => {
            closeModal()
            openModal()
        })
    }
}

if(closeBtns.length) {
    for(let i = 0; i < closeBtns.length; i++) {
        closeBtns[i].addEventListener('click', () => {
            closeModal()
        })
    }
}

if (openThanksBtn) {
    openThanksBtn.addEventListener('click', () => {
        closeModal()
        openThanksModal()
    })
}

function openModal() {
    body.style.overflow = 'hidden'

    modalRequest.classList.add('active')
}

function openThanksModal() {
    body.style.overflow = 'hidden'

    modalThanks.classList.add('active')
}

function closeModal() {
    for(let i = 0; i < modal.length; i++) {
        modal[i].classList.remove('active')
    }
    body.style.overflow = 'auto'
}

