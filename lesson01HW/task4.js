/* jshint browser: true */
/* jshint node: true */
/* jshint esversion: 6 */
"use strict";

// Малахов Максим
// При помощи генератора напишите функцию - анкету, которая запрашивает у пользователя
// на ввод параметры и передает их в генератор. В конце, когда генератор завершается,
// он должен вернуть все введенные входные параметры в виде объекта. Этот объект нужно
// вывести в консоли

function* generator() {
    let returnObj = {};
    returnObj.name = window.prompt('Введите имя');
    yield;
    returnObj.age = window.prompt('Введите возраст');
    yield;
    returnObj.movie = window.prompt('Введите любимы фильм');
    yield;
    returnObj.music = window.prompt('Введите любимую песню');
    yield;

    return returnObj;
}

let gen = generator();
do {
    var result = gen.next();
} while(!result.done);

console.log(result.value);
