'use strict'; //TODO Строгий режим стандарта ES6

// //TODO Функции.
// let getMessage = function (message) {
//     return "My message is: (" + message + ")";
// };
//
// let message = prompt("Write message", '');
//
// console.log(getMessage(message));
//
// function sayHello(message) {
//     alert(message);
// }
//
// sayHello(message);

// //TODO Калькулятор.
// function addition(a, b) {
//     return a + b;
// }
//
// console.log(addition(5, 11));
// console.log(addition(3, 9));
// console.log(addition(-4, 7));

// //TODO стрелочная функция.
// let addition = (a, b) => a + b;
//
// console.log(addition(56, 35));

// //TODO примеры базовых методов.
// let str = "String";
//
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
//
// let num = "56.4";
// //Округление к ближайшему целому.
// console.log(Math.round(num));
// //Округляет с количеством цифр после знака или до ближайшего.
// console.log((num / 3).toFixed());
// console.log((num / 7).toFixed(2));
//
// let num2 = "36.6px";
// console.log(parseInt(num2));
//
// console.log(parseFloat(num2));

//TODO колбэк функции.
//Функция переданная в качестве параметра другой функции.
//
// function first(message, callback) {
//     console.log("Start");
//     calback(message);
// }
//
// function second(text) {
//     console.log(text);
// }
//
// first("Hello World!", second);

// function first(callback) {
//     console.log("Test");
//     callback();
// }
//
// function second(a, b) {
//     console.log(a * b);
// }
//
// first(function () {
//     second(3, 9);
// });

//TODO input.
let input = document.querySelector("#inputText");
let btnGo = document.querySelector("#btnGo");
let out = document.querySelector("#out");

btnGo.onclick = function () {
  console.log(input.value);
  // + переводит ввод в число.
  console.log(+input.value * 2);
  out.innerHTML = input.value;
};
