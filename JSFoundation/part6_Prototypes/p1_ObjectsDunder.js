let computer = {
    cpu : 12
};
let lenovo = {
    screen : "HD",
    __proto__ : computer, // to inherit properties of computer object
};
let tomHardware = {};

console.log('computer',computer);
console.log('computer cpu: ', computer.cpu);

console.log(`Computer: `, computer.__proto__); // specifies the properties of object
console.log('Lenovo',lenovo.__proto__);



/***************** EXAMPLES OF DUNDER USE ************/

let genericCar = {tyres: 4};
let tesla = { driver : "AI"};

Object.setPrototypeOf(tesla,genericCar);
console.log('tesla',genericCar);
console.log('tesla all props: ',Object.getPrototypeOf(tesla));

// adding function to prototype
let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
}

console.log('animal',animal);
console.log(animal.walk());
let rabbit = {
    jumps: true,
    __proto__: animal
}

// classes in JS use prototype internally
class User {
    constructor(name) {
        this.name = name;
    }
}
let user1 = new User("Sara");
console.log('user1',user1);

// inheriting from classes
class Admin extends User {
    constructor(name,role) {
        super(name);
        this.role = role;
    }
}

// Encapsulation in JS:
// Encapsulation is the bundling of data (properties) and methods
// (functions) that operate on that data into a single unit or class. 
// It restricts direct access to some of an object's components, 
// which can prevent the accidental modification of data.
// In JavaScript, encapsulation can be achieved using closures, 
// symbols, and private class fields.
class BankAccount {
    #acc_num = 987; // private field
    #amount = 0; // private field with default value
    constructor(name, acc_num) {
        this.name = name;
        this.#acc_num = acc_num; // private field
    }
    deposit(amount) {
        this.#amount += amount;
        console.log(`Depositing ${amount} to account ${this.#acc_num}`);
        console.log(`New balance: ${this.#amount}`);
    }
}
// Abstraction in JS:
// Abstraction is the concept of hiding the complex
// implementation details and showing only the essential features
// of an object.
// It helps in reducing complexity and increases efficiency.
// In JavaScript, abstraction can be achieved using classes
// and interfaces.

let acc1 = new BankAccount("Sara",123);
console.log('acc1',acc1);
acc1.deposit(1000); // Depositing 1000 to account 123
// console.log(acc1.#amount); // Error: Private field '#amount' must be declared in an enclosing class
// console.log(acc1.#acc_num); // Error: Private field '#acc_num' must be declared in an enclosing class


/**************************************************************************/
// Singleton Pattern in JS:
// The singleton pattern is a design pattern that restricts the
// instantiation of a class to a single instance.
// This is useful when exactly one object is needed to coordinate
// actions across the system.
// In JavaScript, the singleton pattern can be implemented using
// closures and immediately invoked function expressions (IIFE).

const config = {
    appName: "MyApp",
    version: "1.0"
};
// Everywhere in your code, you use 'config'.
// There is only one 'config' object (singleton).
// IIFE :
const settings = (function() {
    let instance; // private variable to hold the single instance
    function createInstance() {
        const object = new Object("I am the instance");
        return object;
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Polymorphism in JS: One method, many forms
// Polymorphism is the ability of a function or method to
// operate in different ways based on the object it is acting upon.
// In JavaScript, polymorphism can be achieved through method
// overriding and method overloading.
// Example of method overriding:
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}
class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}
let dog = new Dog();
let cat = new Cat();
dog.speak(); // Dog barks
cat.speak(); // Cat meows

// Example of method overloading
// (simulated using default parameters)
function add(a, b, c = 0) {
    return a + b + c;
}
console.log(add(2, 3)); // 5
console.log(add(2, 3, 4)); // 9
console.log(add("my", "app")); // myapp
console.log(add("my", "app", "!")); // myapp!

