window.addEventListener('DOMContentLoaded', function () {

    'use strict'; //TODO Строгий режим стандарта ES6

    // function makeArray() {
    //     var items = [];
    //
    //     //TODO var i создалась одна на весь цикл.
    //     for (var i = 0; i < 10; i++) {
    //         var item = function () {
    //             console.log(i);
    //         };
    //         items.push(item);
    //     }
    //     return items;
    // }
    //
    // function makeArray2() {
    //     var items = [];
    //
    //     //TODO с let.
    //     for (let i = 0; i < 10; i++) {
    //         var item = function () {
    //             console.log(i);
    //         };
    //         items.push(item);
    //     }
    //     return items;
    // }
    //
    // var arr = makeArray();
    // var arr2 = makeArray2();
    //
    // arr[1]();
    // arr[3]();
    // arr[7]();
    // arr2[1]();
    // arr2[3]();
    // arr2[7]();

    // //TODO Параметры по умолчанию.
    // //По умолчанию basis равен 2, если он не передан.
    // function calcOrDouble(number, basis = 2) {
    //     console.log(number * basis);
    // }
    //
    // calcOrDouble(9, 4);
    // calcOrDouble(9);

    // //TODO Классы.
    // class Rectangle {
    //     constructor(width = 5, height = 4) {
    //         this.width = width;
    //         this.height = height;
    //     };
    //
    //     calcArea() {
    //         return this.width * this.height;
    //     }
    // }
    //
    // const rectangle = new Rectangle(9, 6);
    // const rectangle2 = new Rectangle();
    // console.log(rectangle.calcArea());
    // console.log(rectangle2.calcArea());

    // //TODO spread. Оператор разворота. Ставится как (...). Разварачивает массив.
    // let video = ['youtube', 'rutube', 'invin'];
    // let blog = ['wordpress', 'lifejournale', 'blogger'];
    // //Результат [Array(3), Array(3), "vk", "facebook"]
    // let internet = [video, blog, 'vk', 'facebook'];
    //
    // //результат будет ["youtube", "rutube", "invin", "wordpress", "lifejournale", "blogger", "vk", "facebook"]
    // let internet2 = [...video, ...blog, 'vk', 'facebook'];
    //
    // console.log(internet);
    // console.log(internet2);
    //
    // function log(a, b, c) {
    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
    //     console.log(a * b * c);
    // }
    //
    // let numbers = [2, 5, 11];
    //
    // //Развернулся массив и подставился под переменные.
    // log(...numbers);
});
