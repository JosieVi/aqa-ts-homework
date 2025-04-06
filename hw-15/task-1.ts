// Task 1
/*
1. Создайте интерфейс IVehicle:
  Методы:
    - getDetails(): string — возвращает информацию о транспортном средстве.
    - start(): string — возвращает строку "The vehicle is starting".

2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
  Реализуйте конструктор с полями:
    - make (строка)
    - model (строка)
  Добавьте методы:
    - start, возвращающего строку: "The vehicle {make} {model} is starting.".
    - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

3. Создайте класс Car, который наследует Vehicle:
    - Добавляет поле year (число).
    - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".
4. Создайте объект класса Car и проверьте работоспособность
*/

// 1
interface IVehicle {
    getDetails(): string;
    start(): string;
}

// 2
abstract class Vehicle implements IVehicle {
    constructor(public make: string, public model: string) { }
    abstract getDetails(): string;
    start(): string {
        return `The vehicle ${this.make} ${this.model} is starting.`
    }
}

// 3
class Car extends Vehicle {
    constructor(make: string, model: string, public year: number) {
        super(make, model);
    }
    getDetails(): string {
        return `${this.make} ${this.model}, ${this.year}`
    }
}

// 4
const car = new Car('Honda', 'Civic', 2022);
console.log(car.start());
console.log(car.getDetails());