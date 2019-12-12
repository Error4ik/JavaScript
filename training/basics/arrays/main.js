'use strict'; //TODO Строгий режим стандарта ES6

// //TODO Удалить последний жлемент массива.
// let arr = [1, 9, 3, 11, 5];
// console.log(arr);
// arr.pop();
// console.log(arr);
//
// //TODO Добавить в конец массива.
// let arr = [1, 9, 3, 11, 5];
// console.log(arr);
// arr.push("Hello");
// arr.push(19);
// console.log(arr);
//
// //TODO Удаляет первый элемент.
// let arr = [1, 9, 3, 11, 5];
// console.log(arr);
// arr.shift();
// console.log(arr);
//
// //TODO Добавить элемент в начало.
// let arr = [1, 9, 3, 11, 5];
// console.log(arr);
// arr.unshift("Yes");
// console.log(arr);

// //TODO Перебор массива.
// let arr = [1, 9, 3, 11, 5];
// console.log(arr);
// let str = "";
// for (let i = 0; i < arr.length; i++) {
//     str += arr[i];
// }
// console.log(str);

// //TODO Перебор с помощью цикла ForEach.
// //1 параметр это каждый элемент массива, 2 параметр это индекс элемента, 3 параметр сам массив.
// //Не все параметры обязательны, но порядок важен.
// let arr = [1, 9, 3, 11, 5];
// console.log(arr);
// arr.forEach(function (item, i) {
//     console.log(i + ": " + item);
// });

// //TODO Перебор с помощью forOf, или forIn.
// //ForIn перебирает по индексам - ключам.
// //ForOf перебирает по значениям.
// let arr = [1, 9, 3, 11, 5];
// console.log(arr);
// for(let key in arr) {
//     console.log(key);
// }
//
// for(let item of arr) {
//     console.log(item);
// }

// //TODO метод split() разбивает строку на массив, нужно указать разделитель, например запятая.
// //trim() убирает пробелы в начале и в конце.
// let answer = prompt("Введите элементы через запятую.", "");
// let arr = answer.split(',');
// arr.forEach(function (item, i, arr) {
//     arr[i] = item.trim();
// });
// console.log(arr);

// //TODO метод join() склеивает массив в строку, нужно указать разделитель, например запятая или пробел.
// let arr = ["hello", "world", "i'm", "going", "to", "USA"];
// let str = arr.join(" ");
// console.log(str);
// //Вывод строки или массива на HTML.
// let outString = document.getElementById("string");
// let outArray = document.getElementById("array");
// outString.innerHTML = str;
// outArray.innerHTML = arr;

// //TODO сортировка методом sort().
// //Обычная сортировка сравнивает цифры по первому значению например 12 будет меньше 2, так как первое значение в
// //цифре 12 это 1.
// let arr = [9, 11, 3, 19, 6, 2, 4];
// console.log(arr);
// arr.sort();
// console.log(arr);
// //Нужно сортировать с помощью функции компаратор.
// arr.sort(function (a, b) {
//     return a - b;
// });
// console.log(arr);

// //TODO метод slice() создает новый массив и копирует туда элементы из источника с нужной позиции и нужной длинны.
// //Не меняет начальный массив.
// let arr = [5, 9, 11, 22, 45];
// let newArr = arr.slice(0, 2);
// console.log(arr);
// console.log(newArr);

// //TODO деструктуризация массива.
// //Задает значение переменным беря их из массива по порядку.
// let arr = [1, 5, 6, 2, 9];
// let [a, b, c, d, e] = arr;
// console.log(arr);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// //TODO метод map для массивов, возвращает новый массив не меняея исходный.
// let array1 = [3, 4, 7];
// let array2;
// //item - каждый элемент массива, index - индекс, array1 - сам массив.
// array2 = array1.map(function (item, index, array1) {
//     return item * 2;
// });
// console.log(array2);

// //TODO метод filter возвращает новый массив, фильрует массив по определенным условиям.
// let arr = [6, 9, -1, -11, 28, -3, -19, 6, 7];
// let arr2;
// console.log(arr);
// //item - каждый элемент массива, index - индекс, arr1 - сам массив.
// arr2 = arr.filter(function (item, index, arr1) {
//     return item % 2 === 0;
// });
//
// console.log(arr2);

// //TODO метод every and метод some, Оба метода эквиваленты понятию (И - ИЛИ)
// let arr = [3, 11, 24, 2, 9, 5];
// let result;
// console.log(arr);
//
// //item элемент массива. Возвращает либо true либо false.
// //Выполняется ли условие для каждого элемента массива, если все возвращают true
// //значит вернется true, если хотя бы для одного будет false вернется false.
// result = arr.every(function (item) {
//     return item > 5;
// });
//
// console.log(result);
//
// //Проверят условие для каждого эжлемента массива и если хотя бы 1 подходит то вернет тру.
// result = arr.some(function (item) {
//     return item > 5;
// });
//
// console.log(result);

//TODO метод reduce и reduceRight, перебирает массив и сохраняет промежуточный результат.
let arr = [3, 4, 5, 11, 12, 65];
let result;
console.log(arr);

//первый параметр это первый элемент, второй параметр это текущий элемент кроме первого
//третий параметр это индекс.
//accum сохраняет промежуточное значение.
result = arr.reduce(function (accum, currentValue, index) {
    console.log("Prev value " + accum);
    console.log("Current value " + currentValue);
    return accum + currentValue;
});

console.log(result);

//делает тоже самое но наоборот.
result = arr.reduceRight(function (accum, currentValue, index) {
    console.log("Prev value " + accum);
    console.log("Current value " + currentValue);
    return accum + currentValue;
});

console.log(result);
