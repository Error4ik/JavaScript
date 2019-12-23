window.addEventListener('DOMContentLoaded', function () {

    'use strict'; //TODO Строгий режим стандарта ES6

    let infoHeader = document.querySelector('.info-header');
    let tabs = document.querySelectorAll('.info-header-tab');
    let tabContent = document.querySelectorAll('.info-tab-content');

    function hideTabContent(number) {
        for (let i = number; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    function showTabContent(number) {
        if (tabContent[number].classList.contains('hide')) {
            tabContent[number].classList.remove('hide');
            tabContent[number].classList.add('show');
        }
    }

    hideTabContent(0);
    showTabContent(0);

    infoHeader.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});