window.addEventListener('DOMContentLoaded', function () {

    'use strict'; //TODO Строгий режим стандарта ES6

    let moreBtn = document.getElementById('btn-modal');
    let modal = document.getElementById('my-modal');
    let close = document.getElementById('popup-close');

    moreBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    close.addEventListener('click', function () {
        modal.style.display = 'none';
    })
});
