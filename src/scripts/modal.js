const modalRequest = document.querySelector('.modal-request')
const modal = document.querySelectorAll('.modal')
const modalWrap = document.querySelectorAll('.modal__wrap')
// console.log('modalWrap', modalWrap)
const body = document.getElementsByTagName('body')[0]
const openBtns = document.querySelectorAll('.make-request-btn')
const closeBtns = document.querySelectorAll('.modal__btn-close')
const modalContents = document.querySelectorAll('.modal__content')

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

if(modalContents.length) {
    for(let i = 0; i < modalContents.length; i++) {
        modalContents[i].addEventListener('click', (e) => {
            e.stopPropagation()
        })
    }
}

function openModal() {
    body.style.overflow = 'hidden'

    modalRequest.classList.add('active')
    modalRequest.classList.remove('out')
}

function openThanksModal() {
    body.style.overflow = 'hidden'

    modalThanks.classList.add('active')
    modalThanks.classList.remove('out')
}

function closeModal() {
    for(let i = 0; i < modal.length; i++) {
        modal[i].classList.add('out')
        modal[i].classList.remove('active')
    }
    body.style.overflow = 'auto'
}

if(modalWrap.length) {
    for(let i = 0; i < modalWrap.length; i++) {
        modalWrap[i].addEventListener('click', () => {
            console.log('close modal')
            closeModal()
        })
    }
}
/*

if(modalWrap) {
    console.log('close modal')


    modalWrap.addEventListener('click', () => {
        console.log('close modal')
        closeModal()
    })
}
*/


export {closeModal, openThanksModal}