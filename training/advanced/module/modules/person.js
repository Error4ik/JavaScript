// //TODO можно экспортировать по дефолту.
//export default class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

//TODO or that.
//export {Person, sayHello};
export class Person {
    constructor(name) {
        this.name = name;
        this.age = 50;
    }
}

export function sayHello(person) {
    console.log("Hello", person);
}
