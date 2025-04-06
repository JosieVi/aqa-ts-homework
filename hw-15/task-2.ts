// Task 2
/*
Создайте интерфейс IPerson, абстрактный класс Employee, который реализует интерфейс IPerson, и конкретные классы Manager и Developer.
  - Интерфейс IPerson должен содержать:
      Стринговые поля: name, surname
      Намберовые поля: experienceYears
      Метод, возвращающий строку: getDetails().

  - Абстрактный класс Employee должен:
      Имплементировать интерфейс IPerson.
      Содержать защищенное (protected) поле: salary, не передающееся в конструктор (по дефолту 0)
      Содержать защищенный (protected) абстрактный метод: calculateSalary().,
        который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
      Метод calculateSalary() должен быть использован в конструкторе
  
  - Конкретные классы Manager и Developer должны:
      Наследоваться от Employee.
      Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
      Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
      Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
      Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
      Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
        'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)
*/

interface IPerson {
    name: string;
    surname: string;
    experienceYears: number;
    getDetails(): string;
}

abstract class Employee implements IPerson {
    constructor(public name: string, public surname: string, public experienceYears: number) {
        this.calculateSalary();
    }
    protected salary: number = 0;
    protected abstract calculateSalary(): void;
    abstract getDetails(): string;
}

class Manager extends Employee {
    constructor(public name: string, public surname: string, public experienceYears: number, public prefered: 'scrum' | 'kanban') {
        super(name, surname, experienceYears);
    }
    protected calculateSalary(): void {
        this.salary = this.experienceYears * 500;
    }
    public getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am manager with ${this.experienceYears} years of experience in ${this.prefered} and ${this.salary}$ salary`;
    }
}

class Developer extends Employee {
    constructor(public name: string, public surname: string, public experienceYears: number, public programmingLanguage: 'js' | 'ts' | 'java' | 'python') {
        super(name, surname, experienceYears);
    }
    protected calculateSalary(): void {
        this.salary = this.experienceYears * 1000;
    }
    public getDetails(): string {
        return `My name is ${this.name} ${this.surname}, I am software developer with ${this.experienceYears} years of experience in ${this.programmingLanguage} and ${this.salary}$ salary`;
    }
}

const manager = new Manager('Evilla', 'Kokkonen', 11, 'scrum');
console.log(manager.getDetails());
const developer = new Developer('Hanna', 'Soloma', 6, 'ts');
console.log(developer.getDetails());