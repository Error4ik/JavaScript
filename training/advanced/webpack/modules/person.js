export class Person {
    constructor(name) {
        this.name = name;
        this.age = 50;
    }
}

export function sayHello(person) {
    console.log("Hello", person);
}
