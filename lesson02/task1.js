/* jshint browser: true */
/* jshint node: true */
/* jshint esversion: 6 */
"use strict";

// Малахов Максим

function* anketaGenerator() {
    let name = yield 'Введите имя';
    let age = yield 'Введите возраст';
    let login = yield 'Введите логин';

    return {name,age,login};
}

let anketa = anketaGenerator();
let input;

while(()) {
    let phrase = anketa.next(input);
    input = window.prompt(phrase.value);

    if(phrase.done) {
        console.log(phrase.value);
        break;
    }
}
