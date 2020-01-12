//TODO импорт переменных.
// import {one, two ,three} from './modules/module-1';

//TODO или импортировать все экспорты из модуля и поместить в переменную.
import * as numbers from './modules/numbers.js';

// //TODO импортировать все экспорты из модуля и поместить в переменную.
// import * as person from './modules/person.js'

// //TODO экспорт дефолтного импорта.
// import Person from './modules/person.js'

import {Person} from "./modules/person.js";
import {sayHello} from "./modules/person.js";

window.addEventListener('DOMContentLoaded', function () {
    console.log(numbers.one);
    console.log(numbers.two);
    console.log(numbers.three);

    //TODO default.
    // const user = new person.Person("Alex");

    const user = new Person("Alex");
    sayHello(user);
});