window.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.news__tab'),
        tabContent = document.querySelectorAll('.tabs-content'),
        activeTabEl = document.getElementById('active-tab'),
        tabsListEl = document.getElementById('tabs-list')

    if(tabs.length && tabContent.length) {
        showActiveEl(tabs[0].dataset.label)

        window.addEventListener('click', () => {
            tabsListEl.classList.remove("active");
        })

        tabsListEl.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
        })

        activeTabEl.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
        })

        activeTabEl.addEventListener('click', () => {
            tabsListEl.classList.toggle("active");
        })

        tabs.forEach(item => {
            item.addEventListener('click', (e) => {
                hideTabContent(0)
                unactiveTabBtn(0)
                tabsListEl.classList.remove("active");
                showTabContent(item.dataset.index)
                item.classList.add('active')
                showActiveEl(item.dataset.label)
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

        function showActiveEl(label) {
            activeTabEl.innerText = label
        }
    }
});