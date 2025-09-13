// Singleton - single entity - one instance - real world object
// Single entity stands for single object
// Object - key value pairs - properties and methods
// Object is a collection of properties
// Property - key value pair
// Method - function inside an object

// Object literals



/**
    Symbols in JavaScript :-
    A Symbol is a primitive data type introduced in ES6.
    Symbols are unique and immutable values, often used as unique property keys for objects.

 */
const id = Symbol("userId"); // creates a symbol
const jsUser = {
    name: "hitesh choudhary",
    'age': 30,
    isAdmin: true,
    courses: ['html','css','js'],
    wife: null,
    id: 123, // number as key

    // adding a function as a property
    greet: function() {
        console.log("Hello, " + this.name);
    },
}
// accessing the properties of an object
console.log(jsUser);
console.log(jsUser.name);
console.log(jsUser['age']); // useful when the key is dynamic
