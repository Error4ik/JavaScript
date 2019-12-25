window.addEventListener('DOMContentLoaded', function () {

    'use strict'; //TODO Строгий режим стандарта ES6

    // //TODO Контекст вызова функции. Результаты this - (window/undefined);
    // //TODO Window.
    // function showThis() {
    //     console.log(this);
    // }
    // showThis();
    //
    // function showThis2(a, b) {
    //     console.log(this);
    //     function sum() {
    //         console.log(this);
    //         return this.a + this.b;
    //     }
    //     console.log(sum());
    // }
    // showThis2(5, 11);

    // //TODO Замыкание Если не находит внутри себя аргументы то поднимается выше.
    // function showThis3(a, b) {
    //     function sum() {
    //         return a + b;
    //     }
    //     console.log(sum());
    // }
    // showThis3(11, 28);


    // //TODO метод обхекта. Результат this - (Сам объект);
    // let object = {
    //     a: 6,
    //     b: 13,
    //     sum: function () {
    //         console.log(this);
    //         console.log(this.a * this.b);
    //         // //TODO Здесь контекст будет undefined.
    //         // function show() {
    //         //     console.log(this);
    //         // }
    //         // show();
    //     }
    // };
    //
    // object.sum();

    // //TODO насильно устаровить функции контекст вызова.
    // let user = {
    //     name: "John"
    // };
    //
    // function sayName(surname) {
    //     console.log("1 ", this);
    //     console.log("2 ", this.name);
    //     console.log("3 ", surname);
    // }
    //
    // //1 способ. можно передавать параметры в виде строки.
    // console.log("4 ", sayName.call(user, 'Smith'));
    // //2 способ. можно передать массив параметров.
    // console.log("4 ", sayName.apply(user, ['Snow']));
    //
    // //3 способ. Контекст устанавливается через метод bind(args).
    // function count(number) {
    //     return this * number;
    // }
    //
    // //Контекст вызова будет число 9, а результат будет переданное число умноженное на 9.
    // let double = count.bind(9);
    // console.log(double(3));
    // console.log(double(5));
    // console.log(double(14));

    //TODO контест вызова на элементе, будет сам элемент.
    let btn = document.getElementById('btn');

    btn.addEventListener('click', function () {
        console.log(this);
        this.style.backgroundColor = 'red';
    })
});
