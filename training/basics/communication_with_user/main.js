/**
 * Created by Error4ik on 02.12.2019.
 */

//TODO Простой алерт.
let message = "Hello";
alert(message);

//TODO Алерт с выбором который возвращаает TRUE or False.
let result = confirm("Are you sure?");
let notice = result ? "Good" : "Bad";
console.log(notice);

//TODO Алерт с полем для ввода который возвращает результат ввода в виде строки.
let question = "What are you doing?";
let answer = prompt(question, "");
console.log(answer);
//TODO можно проверить тип данных с помощью typeOf
console.log(typeof(answer));

