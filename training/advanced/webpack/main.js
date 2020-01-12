import * as numbers from './modules/numbers.js';

import {Person} from "./modules/person.js";
import {sayHello} from "./modules/person.js";

window.addEventListener('DOMContentLoaded', function () {
    console.log(numbers.one);
    console.log(numbers.two);
    console.log(numbers.three);

    const user = new Person("Alex");
    sayHello(user);
});