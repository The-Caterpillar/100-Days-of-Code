// Constructor function

function Person(name,age){ // Constructors k liye first letter capital use karne ka
    this.Name = name;
    this.Age = age;
}
function Car(make,model)
{
    this.Make = make;
    this.Model = model;
}

let myCar = new Car("Toyota","Camry");
console.log(myCar);
let myNewCar = new Car("Tata","Safari"); // new keyword is kinda very important
console.log(myNewCar);

/////////////////////////////
function Tea(type)
{
    this.type = type
    this.describe = function() {
        return `this is a cup of ${this.type}`;
    }
}

let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe());

//////////////
function Animal(species)
{
    if(!new.target)
    {
        throw new Error("M ust be called with new keyword");
    }
    this.species = species;
}
Animal.prototype.sound = function(theSound) {
    return `${this.species} makes a sound: ${theSound}`;
}
let Dog = new Animal("Dog");
console.log(Dog.sound("Bark"));
let Cat = new Animal("Cat");
console.log(Cat.sound("Meow"));
/* Here, you're adding a method named sound to Animal's prototype.
   The prototype is like a template: any object created with new Animal(...)
   will automatically have access to this method!
   this.species will refer to the specific animal instance. */
