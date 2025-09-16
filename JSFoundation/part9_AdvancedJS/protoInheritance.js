// prototypal inheritance example

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, ${this.name}`);
}

let alice = new Person("Alice");
// alice.greet(); // "Hello, Alice"


// Using Object.create for inheritance
// let animal = { eats: true };
// let rabbit = Object.create(animal);
// console.log(rabbit.eats); // true

function Animal() {}
Animal.prototype.eats = true;

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype);

let bunny = new Rabbit();
console.log(bunny.eats); // true