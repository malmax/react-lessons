/* jshint browser: true */
/* jshint node: true */
/* jshint esversion: 6 */
"use strict";

// Малахов Максим
// Напишите функцию calculateArea, которая будет принимать параметры, для вычисления площади
//  (можете выбрать какую то конкретную фигуру, а можете, основываясь на переданных параметрах,
//  выполнять требумый алгоритм вычисления площади для переданной в параметрах фигуры) и
//  возвращать объект вида: { area, figure, input }, где area - вычисленная площадь, figure -
//  название фигуры, для которой вычислялась площадь, input - входные параметры, по которым было произведено вычисление

function calculateArea(type = 'rectangle',options = { 'width': 1, 'height':1 }) {
    let returnObj = {
        'area': 0,
        'figure': type,
        'input': options,
    };
    switch (type) {
        case 'rectangle':
            returnObj.area = options.width * options.height;
        break;
        
        case 'circle':
            returnObj.area = Math.PI * Math.pow(options.radius,2);
        break;

        case 'triangle':
            returnObj.area = options.width * options.height / 2;
        break;

        default:
            console.error("Не правильно задана фигура для вычисления площади");
    }

    return returnObj;
}

console.log(calculateArea());
console.log(calculateArea('triangle'));
console.log(calculateArea('circle',{'radius':5}));
