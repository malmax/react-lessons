/* jshint browser: true */
/* jshint node: true */
/* jshint esversion: 6 */
"use strict";

// Малахов Максим
//TODO: как делать приватные и публичные методы/свойства? Все методы по-умолчанию публичные?

// Необходимо написать иерархию классов вида:
// Human -> Employee -> Developer
// Human -> Employee -> Manager

class Human {
    // У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата)
    constructor(options) {
        this.name = options.name || console.error('Не задано имя сотрудника');
        this.age = parseInt(options.age) || console.error('Не задан возвраст сотрудника');
        this.dateOfBirth = options.dateOfBirth || console.error('Не задана дата рождения сотрудника');
    }

    // В классе Human должен присуствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}, DateOfBirth: ${this.dateOfBirth}`;
    }
}

class Employee extends Human{
    // У класса Employee должны присутствовать параметры: salary (число), department (строка)
    constructor(options) {
        super(options);

        this.salary = parseInt(options.salary) || console.error('Не задана зарплата сотрудника');
        this.department = options.department || console.error('Не задан департамент сотрудника');
    }
    // В классе Employee должен быть реализовать такой же метод (displayInfo), который вызывает базовый метод и дополняет его параметрами из экземпляра Employee
    displayInfo() {
        // Чтобы вызывать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать: super.displayInfo(), это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human'a.
        return super.displayInfo() + `, Salary: ${this.salary}, Department: ${this.department}`;
    }
}


// Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), а так же методы по удалению/добавлению разработчиков.
class Manager extends Employee {

    constructor(options) {
        super(options);
        this.developers = [];
    }

    get getDevelopers() {
        return this.developers;
    }

    addDeveloper(developer) {
        this.developers.push(developer);
    }

    delDeveloper(developer) {
        this.developers.splice(this.developers.indexOf(developer),1);
    }
}


// Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется ввиду возможность назначить другого менеджера).
class Developer extends Employee {
    constructor(options,manager) {
        super(options);
        this.assign(manager);
    }
    assign(manager) {
        //удаляем себя из старого менеджера
        if(this.manager) {
            this.manager.delDeveloper(this);
        }
        //присваиваем себя новому менеджеру и обновляем собственное свойство
        this.manager = manager;
        manager.addDeveloper(this);
    }
}


let manager1 = new Manager({'name':'Ivan Petrov','age':30,'dateOfBirth': '20.02.1987', 'salary':'2000','department':'management'});
let manager2 = new Manager({'name':'Stepan Veselov','age':50,'dateOfBirth': '10.02.1967', 'salary':'3000','department':'management'});

let developer1 = new Developer({'name':'Max Ivanov','age':20,'dateOfBirth': '20.05.1990', 'salary':'2500','department':'RC'},manager1);
let developer2 = new Developer({'name':'Fedor Kostrov','age':27,'dateOfBirth': '16.12.1995', 'salary':'3500','department':'RC'},manager1);
let developer3 = new Developer({'name':'Elena Petrova','age':26,'dateOfBirth': '20.10.1993', 'salary':'2000','department':'Research'},manager1);
let developer4 = new Developer({'name':'Vladimir Perekot','age':33,'dateOfBirth': '15.04.1983', 'salary':'3000','department':'RC'},manager2);

console.log(manager1.displayInfo());
console.log(manager2.displayInfo());
