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

    //TODO Параметры по умолчанию.
    //По умолчанию basis равен 2, если он не передан.
    function calcOrDouble(number, basis = 2) {
        console.log(number * basis);
    }

    calcOrDouble(9, 4);
    calcOrDouble(9);
});
