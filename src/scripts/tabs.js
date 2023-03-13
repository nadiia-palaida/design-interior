window.addEventListener('DOMContentLoaded', function () {
    let tabs = document.querySelectorAll('.news__tab'),
        tabContent = document.querySelectorAll('.tabs-content')

    if(tabs.length) {
        tabs.forEach(item => {
            item.addEventListener('click', (e) => {
                hideTabContent(0)
                unactiveTabBtn(0)
                showTabContent(item.dataset.index)
                item.classList.add('active')
            })
        })

        hideTabContent(0);
        showTabContent(0);
        tabs[0].classList.add('active')

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        function unactiveTabBtn(a) {
            for (let i = a; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
            }
        }

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }
    }
});