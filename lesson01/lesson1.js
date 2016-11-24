/* jshint browser: true */
/* jshint node: true */
/* jshint esversion: 6 */
"use strict";
//let const

{
    let x = 1;
}

for (var x = 1; x < 10; x++) {

}

console.log(x);

//деструктуризация
let [y, z] = [1, 2, 3];

let {
    name2,
    age
} = {
    'name': 'Max',
    'age': 19
};

function calc([a, b]) {
    console.log(a + b);
}
calc([1, 3]);

function printPersonInfo({
    name,
    age,
    salary
}) {
    return "${name}:${age}; ${salary}";
}
console.log(printPersonInfo({
    'name': 'Max',
    'age': 32,
    'salary': 560
}));

function createPerson(name, age, salary) {
    return {
        name,
        age,
        salary,
    };
}
let person = createPerson('Max', 32, 450);
console.log(person);

let [x2, y2, z2 = 10] = [1, 2];


//  spread и rest
let arr1 = [1, 2, 4, 5, 6];
let arr2 = [1, 2, ...arr1]; //rest


Math.max(...arr2); //spread => apply/call
//Math.max.apply(null,arr)
//Array.prototype.filter.call()

// :: => bind
// value.increaseSomething.bind(value) => ::value.increaseSomething

// строки
function str(inputs, ...arrayOfValues) {
    console.log(inputs);
    console.log(arrayOfValues);
}
var [s1, s2] = [2, 3];
str `some long long long ${s1} ${s2}`;


//функции

function configure({
    maxAge = 10,
    port = 10,
    server = 'localhost',
    name = 'Supername',
    user = null
}, ...restProps) {
    let {
        userName,
        userLogin,
        userSecret
    } = user;
    let isSuccess = true;
    return {
        userName,
        userLogin,
        isSuccess
    };
}

//arrow functions
let func = (x, y) => {
    return x + y;
};
let func2 = function(x, y) {
    return x + y;
};
let func3 = x => {
    return x + 1;
};
let func4 = x => x + 1;
let func5 = () => 1 + 1;

//this у arrow functions = текущему контексту

function ArrayBuilder() {
    this.somefunc = function () {
        [].filter((item) => {
            console.log(this);
        });
    };

}

//object
var  nameO = 'someName';
var calcName = function () {};
var o = {
    'a':1343434,
    [nameO]: 111,
    [calcName()]: 2222
};
console.log(o);

//symbol

var nameS = Symbol.for('name'); // уникальное значение

var o2 = {
    [nameS]: 'adsdsf',
};
console.log(o2[nameS]);

// class
class Human {

    //this.humanCounts = 0;

    constructor(name) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(this.name);
    }

    sayAge() {
        console.log(this.age);
    }
    get sayFullInfo() {
        console.log(`${this.name} ${this.age}`);
    }
    static HumansCounts() {
        return this.humanCounts;
    }
}

// function Math() {}
// Math.min = function() {}

var human = new Human('Vasya',11);
human.sayAge();
human.sayFullInfo;

console.log(Human.HumansCounts);

class Person extends Human {
    constructor(name,age,salary) {
        super(name,age);
        this.salary = salary;
    }

    saySalary() {
        return this.salary;
    }
}

var person2 = new Person('Vasya',20,400);
console.log(person2);


// generators
function* gen() {
    yield 1;
    yield 2;
    return 3;
}

var generator = gen();
generator.next(); //{value: 1, done: false}
generator.next(); //{value: 2, done: false}
generator.next(); //{value: 3, done: true}

function* gen2() {
    yield 1;
    var input = yield 2;
    return input;
}

var generator2 = gen2();
generator2.next(); //{value: 1, done: false}
generator2.next(); //{value: 2, done: false}
generator2.next(20); //{value: 20, done: true}

function* loop() {
    let i = 10;
    //выполняем асинхронные действия
    while(--i > 0) {
        yield i;
    }
}

var loopGenerator = loop();
for(let v of loopGenerator) {
    console.log(v);
}

//promise
var p = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(1);
    },3000);
});
p = p.then((response) => {console.log(response);})
        .catch((error) => {console.log(error);});


var q = [p,p,p];

Promise.all(q)
    .then((response) => {}); //выполнится для каждого промиса
Promise.rase(q)
    .then(()=>{}); //выполнится только для первого промиса

Promise.resolve(); //вызывает искуственно resolve
Promise.reject(); //вызывает искусственно reject
