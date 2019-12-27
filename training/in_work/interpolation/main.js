window.addEventListener('DOMContentLoaded', function () {

    'use strict'; //TODO Строгий режим стандарта ES6

    let name = "Alex";
    let age = 20;
    let gender = "male";

    document.write("Name: " + name + " age: " + age + " gender: " + gender + "<br>");
    document.write(`Name: ${name} age: ${age} gender: ${gender}`);
});
