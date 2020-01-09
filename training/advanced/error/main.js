window.addEventListener('DOMContentLoaded', function () {
    "use strict";

    let person = {name: "Alex", age: 16};

    try {
        console.log("Hello");
        if (person.age < 18) {
            throw new Error("Too young my friend too young! :)");
        }
    } catch (error) {
        console.log(error.message);
        // console.log(error.name);
        // console.log(error.stack);
        let body = document.querySelector('body');
        let h1 = document.createElement('h1');
        h1.textContent = error.message;
        h1.style.color = 'orange';
        h1.style.fontWeight = 'bold';
        h1.style.fontFamily = "Comic Sans MS, sans-serif";
        h1.style.fontSize = 50 + 'px';
        body.appendChild(h1);
    } finally {
        console.log("I will always do that!!!");
    }

    console.log("World");
});
