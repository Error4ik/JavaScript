window.addEventListener('DOMContentLoaded', function () {
    "use strict";

    // //TODO add data to localStorage.
    // localStorage.setItem("name", "Alex");
    // localStorage.setItem("age", 35);
    // localStorage.setItem("Age", 95);
    //
    // //TODO get data from localStorage.
    // console.log("name -",localStorage.getItem("name"), " age -", localStorage.getItem("age"));
    //
    // //TODO remove data from localStorage.
    // localStorage.removeItem("Age");
    //
    // //TODO clear all localStorage.
    // // localStorage.clear();

    let form = document.getElementById('form');
    let rememberMe = document.getElementById('remember_me');
    let changeForm = document.getElementById('changer');
    let person = {
        name: "Alex",
        age: 35,
        device: ['phone', 'laptop']
    };

    let serializedPerson = JSON.stringify(person);

    localStorage.setItem("person", serializedPerson);
    console.log(JSON.parse(localStorage.getItem("person")));

    rememberMe.checked = localStorage.getItem("isChecked") === 'true';

    if (localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = "#ff89ac";
        form.style.boxShadow = "0 0 3px rgba(0, 0, 0, 0.5)";
    }

    rememberMe.addEventListener('click', function (event) {
        localStorage.setItem('isChecked', rememberMe.checked);
    });

    changeForm.addEventListener('click', function () {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "#ff89ac";
        form.style.boxShadow = "0 0 3px rgba(0, 0, 0, 0.5)";
    });
});
