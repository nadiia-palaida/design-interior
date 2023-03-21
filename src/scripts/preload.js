let animationEnd = false
let loading = true

const obj = document.getElementById("animation-value");
const preloader = document.getElementById("preloader");

animateValue(obj, 0, 100, 1000);

window.addEventListener("load", (event) => {
    loading = false
});

async function animateValue(obj, start, end, duration) {
    obj.classList.remove('hide')

    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + '%';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }

        if (progress === 1  && !loading) {
            animationEnd = true
            obj.innerHTML = 'LIGHT'
            setTimeout(() => {
                preloader.style.display = 'none'
            }, 500)
        }
    };
    window.requestAnimationFrame(step);
}









