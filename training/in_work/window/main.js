window.addEventListener('DOMContentLoaded', function () {
    'use strict'; //TODO Строгий режим стандарта ES6

    let box = document.getElementById('box');
    let collapseButton = document.getElementById('collapse-button');
    let scrollInfo = document.getElementById('scroll-info');
    let scrollReset = document.getElementById('scroll-reset');

    //
    // //TODO Без рамок и полос прокрутки.
    // let clientWidth = box.clientWidth;
    // let clientHeight = box.clientHeight;
    // console.log("ClientWidth - " + clientWidth + " " + "ClientHeight " + clientHeight);
    //
    // //TODO С рамкой и полосами прокрутки, но только видимую часть.
    // let offsetWidth = box.offsetWidth;
    // let offsetHeight = box.offsetHeight;
    // console.log("Width - " + offsetWidth + " " + "Height " + offsetHeight);
    //
    // //TODO Без рамок и полос прокрутки, но с невидимой частью прокрутки.
    // let scrollWidth = box.scrollWidth;
    // let scrollHeight = box.scrollHeight;
    // console.log("ScrollWidth - " + scrollWidth + " " + "ScrollHeight " + scrollHeight);
    //
    // let clicked = true;
    // collapseButton.addEventListener('click', function () {
    //     if (clicked) {
    //         box.style.height = scrollHeight + "px";
    //     } else {
    //         box.style.height = offsetHeight + "px";
    //     }
    //     clicked = !clicked;
    // });
    //
    // //TODO показыват сколько уже проскролено вверх.
    // scrollInfo.addEventListener('click', function () {
    //     let scrollTop = box.scrollTop;
    //     console.log("Проскролено уже: " + scrollTop);
    // });
    //
    // //TODO пролистать скрол к началу.
    // scrollReset.addEventListener('click', function () {
    //     box.scrollTop = 0;
    // });

    // //TODO Координаты элемента на странице.
    // let clientRect = box.getBoundingClientRect();
    // console.log(clientRect);
    // console.log(clientRect.left);
    //
    // //Получить размеры документа.
    // let documentWidth = document.documentElement.clientWidth;
    // let documentHeight = document.documentElement.clientHeight;
    //
    // console.log(documentWidth);
    // console.log(documentHeight);
    //
    // //TODO пролистать весь документ на начало.
    // document.documentElement.scrollTop = 0;
    //
    // //TODO пролистать весь документ на определенное количество пикселей.
    // //координаты X и Y.
    // scrollBy(0, 500);
    // //TODO вернуться в начало и проскролить сверху 500 пикселей.
    // scrollTo(0, 500);
});
