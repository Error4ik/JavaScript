window.addEventListener('DOMContentLoaded', function () {

    'use strict'; //TODO Строгий режим стандарта ES6

    // //TODO Функция конструктор.
    // function User(id, name, age) {
    //     this.id = id;
    //     this.name = name;
    //     this.age = age;
    //     this.sex = 'male';
    //     this.hello = function () {
    //         console.log("Hello " + this.name);
    //     }
    // }
    //
    // let ivan = new User(5, "Ivan", 35);
    // let alex = new User(21, 'Alex', 26);
    //
    // console.log(ivan);
    // console.log(alex);
    //
    // ivan.hello();
    // alex.hello();
    //
    // User.prototype.doubleAge = function () {
    //     console.log(this.age * 2);
    // };
    //
    // ivan.doubleAge();
    // alex.doubleAge();

    //TODO стандарт ES6
    class User {
        constructor(id, name, age) {
            this.id = id;
            this.name = name;
            this.age = age;
            this.sex = 'female';
        };

        hello() {
            console.log(`Hello ${this.name}`);
        };

        realAge() {
            console.log(this.age - 5);
        };
    }

    let irina = new User(1, 'Irina', 53);
    let katya = new User(2, 'Katya', 41);

    console.log(irina);
    console.log(katya);

    irina.hello();
    irina.realAge();
    katya.hello();
    katya.realAge();
});
