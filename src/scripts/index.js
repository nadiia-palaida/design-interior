const headerEl = document.getElementById('header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerEl.classList.add('active')
    } else {
        headerEl.classList.remove('active')
    }
})

const fileDesignInput = document.getElementById('design-file');
const fileDesignText = document.getElementById('design-file-text');

if (fileDesignInput) {
    fileDesignInput.addEventListener('change', () => {
        if (fileDesignInput.files.length) {
            fileDesignText.innerText = fileDesignInput.files[0].name
        } else {
            fileDesignText.innerHTML = ' <span class="modal__subtitle input-file__btn-text-title">Attach your file</span>\n' +
                '\n' +
                '                                        <span class="modal__text">File size not more than 10 MB</span>'
        }
    })
}

const optionBtns = document.querySelectorAll('.select-type-line__option-btn')
let activeOption = null

if(optionBtns.length) {
    activeOption = optionBtns[0].dataset.value

    for(let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].addEventListener('click', () => {
            unActiveOptions()
            activeOption = optionBtns[i].dataset.value
            optionBtns[i].classList.add('active')
        })
    }
}

function unActiveOptions() {
    for(let i = 0; i < optionBtns.length; i++) {
        optionBtns[i].classList.remove('active')
    }
}

import WOW from 'wow.js'
ScrollOut();

window.addEventListener('load', () => {
    new WOW().init();
})