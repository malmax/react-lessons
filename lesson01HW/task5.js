/* jshint browser: true */
/* jshint node: true */
/* jshint esversion: 6 */
"use strict";

// Малахов Максим
// Напишите цикл, который создает массив промисов, внутри каждого промиса происходит обращение
//  к ресурсу (https://jsonplaceholder.typicode.com/users/number), где вместо number
//  подставляется число от 1 до 10, в итоге должно получиться 10 промисов. Следует дождаться
//   выполнения загрузки всеми промисами и далее вывести массив загруженных данных

var q = [];
for (let i = 1; i <= 10; i++) {
    var promise = new Promise(function(resolve, reject) {
      // Эта функция будет вызвана автоматически
      // В ней можно делать любые асинхронные операции,
      // А когда они завершатся — нужно вызвать одно из:
      // resolve(результат) при успешном выполнении
      // reject(ошибка) при ошибке
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', `https://jsonplaceholder.typicode.com/users/${i}`, true);
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4) {
                console.log(`Done ${i}`);
                resolve(xmlhttp.responseText);
            }};
        xmlhttp.send(null);
    });


    q.push(promise);
}

Promise.all(q).then((response) => {console.log(response);}).catch((error) => {console.log(error);});
