'use strict'; //TODO Строгий режим стандарта ES6

let aboutForm = document.getElementById("about-form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let about = document.getElementById("about");

aboutForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let array = aboutForm.querySelectorAll('input');

    let test = {

    };

    for (let i = 0; i < array.length; i++) {
        test[array[i].name] = array[i].value;
    }
    console.log(test);

    let formData = new FormData(aboutForm);
    console.log(formData);
});
