'use strict'; //TODO Строгий режим стандарта ES6

// //TODO Вызовы setTimeout and setInterval.
// //Вызывает функцию спустя указанное время.
// let timeoutId = setTimeout(sayHello, 3000);
// // //Отменяет таймер.
// // clearTimeout(timeoutId);
//
// //Вызывает функцию через указанный интервал.
// let intervalId = setInterval(sayHello, 3000);
// // //Отменяет интервал.
// // clearInterval(intervalId);
//
// function sayHello() {
//     console.log("Hello");
// }

// //TODO Рекурсивный вызов setTimeout для длительных операций внутри функции.
// let timeoutId = setTimeout(function log() {
//     console.log("Omg!");
//     setTimeout(log, 3000);
// });

// //TODO Анимация с помощью setInterval.
// let startBtn = document.getElementById("animate");
// let square = document.getElementById("square");
// let innerSquare = document.getElementById("innerSquare");
//
// function animation() {
//     let innerSquarePosition = 0;
//     let squareWidth = square.offsetWidth;
//     let squareHeight = square.offsetHeight;
//
//     let intervalId = setInterval(frame, 10);
//
//     function frame() {
//         if (innerSquarePosition == 360 || squareWidth == 0 || squareHeight == 0) {
//             clearInterval(intervalId);
//         } else {
//             innerSquarePosition++;
//             innerSquare.style.top = innerSquarePosition + 'px';
//             innerSquare.style.left = innerSquarePosition + 'px';
//             square.style.width = squareWidth-- + 'px';
//             square.style.height = squareHeight-- + 'px';
//         }
//     }
// }
//
// startBtn.addEventListener('click', animation);

// //TODO делегирование событий для кнопок.
// let buttonBlock = document.querySelector('.btn-block');
// let buttons = document.getElementsByTagName('button');
//
// buttonBlock.addEventListener('click', function (event) {
//     if (event.target && event.target.tagName == 'BUTTON') {
//         if (event.target.classList.contains('first')) {
//             console.log("FIRST!!!");
//         } else {
//             console.log("HELLOOOOO");
//         }
//     }
//
//     if (event.target && event.target.matches('button.first')) {
//         console.log("Find!");
//     }
// });
