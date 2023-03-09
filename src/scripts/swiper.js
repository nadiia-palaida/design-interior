import Swiper, {Autoplay, Navigation} from 'swiper';


const swiper = new Swiper('.main-swiper', {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 0,
});

console.log('swiper init')

