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

const btnNext = document.getElementsByClassName('main-swiper__button-next2')

if (btnNext.length) {
    btnNext[0].addEventListener('click', () => {
        mainSwiper.slideNext()
    })
}

const newsSwiper = new Swiper('.news-swiper', {
    slidesPerView: "auto",
    spaceBetween: 48,
    loop: true,
    autoplay: true,
    // centeredSlides: true,
    loopedSlides: 3,
    modules: [Autoplay],
    breakpoints: {
        320: {
            slidesPerView: 1.5,
            spaceBetween: 40
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});

const aboutSwiper = new Swiper('.about-philosophy__description-swiper', {
    slidesPerView: "auto",
    spaceBetween: 12,
    loop: true,
    centeredSlides: true,
    loopedSlides: 1,
    pagination: {
        el: ".about-philosophy__description-swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".about-philosophy__description-swiper-button-next",
        prevEl: ".about-philosophy__description-swiper-button-prev",
    },
    modules: [Pagination, Navigation, Controller],
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 12
        },
        768: {
            slidesPerView: "auto",
            spaceBetween: 12
        }
    }
});

const aboutSwiper2 = new Swiper(".about-philosophy__description-swiper", {
    slidesPerView: "auto",
    spaceBetween: 12,
    loop: true,
    centeredSlides: true,
    loopedSlides: 1,
    pagination: {
        el: ".about-philosophy__description-swiper-pagination2",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return '<span class="main-swiper__fraction-current main-swiper__fraction about-philosophy__description-swiper__fraction">0<span class="' + currentClass + '"></span></span>' + '<span class="main-swiper__fraction-total main-swiper__fraction about-philosophy__description-swiper__fraction">0<span class="' + totalClass + '"></span></span>';
        },
    },
    on: {
        slideChange: function (swiper) {
            swiper.pagination.update()
        },
    },
    modules: [Pagination],
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 12
        },
        768: {
            slidesPerView: "auto",
            spaceBetween: 12
        }
    }
});

aboutSwiper.controller.control = aboutSwiper2;
