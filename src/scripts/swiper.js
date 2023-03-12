import Swiper, {Autoplay, Navigation, Pagination, Controller} from 'swiper';


const mainSwiper = new Swiper('.main-swiper', {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 0,
    pagination: {
        el: ".main-swiper__pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".main-swiper__button-next",
        prevEl: ".main-swiper__button-prev",
    },
    on: {
        slideChange: function () {

        },
    },
    modules: [Navigation, Pagination, Controller]
});

const pagingSwiper = new Swiper(".main-swiper", {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 0,
    pagination: {
        el: ".main-swiper__pagination2",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return '<span class="main-swiper__fraction-current main-swiper__fraction">0<span class="' + currentClass + '"></span></span>' + '<span class="main-swiper__fraction-total main-swiper__fraction">0<span class="' + totalClass + '"></span></span>';
        },
    },
    on: {
        slideChange: function (swiper) {
            swiper.pagination.update()
        },
    },
    modules: [Pagination]
});

mainSwiper.controller.control = pagingSwiper;

let btnNext = document.getElementsByClassName('main-swiper__button-next2')
btnNext[0].addEventListener('click', () => {
    console.log('click')

    mainSwiper.slideNext()
})
