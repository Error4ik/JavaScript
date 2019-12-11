'use strict'; //TODO Строгий режим стандарта ES6

// //TODO Объекты.
// let user = {
//     contacts:{}
// };
//
// for (let i = 0; i < 5; i++) {
//     let key = prompt("Enter key", '');
//     let value = prompt("Enter value", '');
//
//     if (key === null || key === '') {
//         key = "empty" + i;
//     }
//
//     if (value === null || value === '') {
//         value = "empty" + i;
//     }
//
//     user[key] = value;
// }
//
// for (let i = 0; i < 2; i++) {
//     let key = prompt("Enter contact name", '');
//     let value = prompt("Enter contact status", '');
//
//     user.contacts[key] = value;
// }
//
// console.log(user);

let user = {
    name: "Alex",
    surname: "Ivanov",
    age: 50,
    sex: "male",
    married: false
};

user.weight = 70;

user.pets = [
    {
        name: "bob",
        age: 5,
        weight: 15,
        type: "dog"
    },
    {
        name: "sonya",
        age: 12,
        weight: 3,
        type: "cat"
    },
    {
        name: "rex",
        age: 3,
        weight: 5,
        type: "cat"
    }
];

delete user.married;

console.log(user);

for (let key in user) {
    console.log(key + " - " + user[key]);
}

console.log(Object.keys(user.length));
console.log(Object.keys(user));

