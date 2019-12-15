'use strict'; //TODO Строгий режим стандарта ES6

let body = document.body;
let box = document.getElementById('box');
let button = document.getElementsByClassName('btn');
let wrapperBtn = document.querySelectorAll('.wrapper button');
let circle = document.getElementsByClassName('circle');
let heart = document.querySelectorAll('.heart');
let wrapper = document.querySelector('.wrapper');

box.style.background = 'blue';
button[1].style.borderRadius = '100%';
circle[0].style.background = 'red';
circle[1].style.background = 'yellow';
circle[2].style.background = 'green';

for (let i = 0; i < heart.length; i++) {
    heart[i].style.background = 'yellow';
}

heart.forEach(function (item) {
    item.style.background = 'green';
});

let div = document.createElement('div');
// let textNode = document.createTextNode('Hello all!');

div.classList.add('newDiv');
div.classList.add('textNode');
// div.appendChild(textNode);

// //TODO Добавить элемент в дом.
// body.appendChild(div);
wrapper.appendChild(div);
div.textContent = 'Garry!';

//TODO добавить элемент в дом, перед другим элементом.
// body.insertBefore(div, circle[1]);

//TODO Удалить элемент.
body.removeChild(heart[2]);
wrapper.removeChild(wrapperBtn[2]);

body.replaceChild(box, circle[2]);
