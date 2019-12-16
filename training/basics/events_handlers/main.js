'use strict'; //TODO Строгий режим стандарта ES6

//TODO Евенты и обработчики.
let btn = document.querySelector('#btn');
let wrapper = document.querySelector('.wrapper');
let link = document.querySelector('a');
let buttons = document.querySelectorAll('button');

// btn.onclick = function () {
//     alert("Вы нажали на кнопку номер 1");
// };

// //TODO EventListener.
// btn.addEventListener('click', function () {
//     console.log("Первое действие.");
//     console.log("Второе действие.");
// });
//
// btn.addEventListener('click', function (event) {
//     console.log("Третье действие!");
//     console.log("Произошло событие: " + event.type);
//     console.log("Элемент: " + event.target);
// });

// btn.addEventListener('mouseenter', function (event) {
//     // console.log(event);
//     let target = event.target;
//     console.log("Произошло событие: " + event.type);
//     console.log("Элемент: " + target);
//     // target.style.display = 'none';
// });

// //TODO Всплытие событий. (обработчик событий срабатывает на самом вложенном элементе, а потом вверх по иерархии.)
// wrapper.addEventListener('click', function (event) {
//     console.log("Произошло событие: " + event.type);
//     console.log("Элемент: " + event.target);
// });

// //TODO Отмена стандартные события браузера.
// link.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log("Произошло событие: " + event.type);
//     console.log("Элемент: " + event.target);
// });

// //TODO назначениея обработки событий на несколько жлементов. Например массив кнопок.
// buttons.forEach(function (item) {
//     console.log(item);
//     item.addEventListener('mouseleave', function (event) {
//         console.log("Произошло событие: " + event.type);
//         console.log("Элемент: " + event.target);
//     })
// });
