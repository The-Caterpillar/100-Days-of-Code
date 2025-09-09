// Primitive - 7 categories : String, Number, Boolean, null, undefined, Symbol, BigInt
/*
    Primitive data types are *****Call by value***** which means that when you assign or pass a primitive value,
    a copy of that value is created in memory. Changes made to the copied value do not affect the original value.
 */


    const id = Symbol('123');
    const anotherId = Symbol('123');
    console.log(id === anotherId); // false

// Reference data types - 3 categories : Object, Array, Function [Non - primitive]
/*
    Reference data types are *****Call by reference*****
*/

const arrayExample = [1,2,3];
const ObjectExample = {
    name: "Sara",
    age: 25
};
const functionExample = function() {
    console.log("Hello World");
};


console.log(typeof arrayExample); // object
console.log(typeof ObjectExample); // object
console.log(typeof functionExample); // function
console.log(Array.isArray(arrayExample)); // true
console.log(typeof(id));
console.log(typeof("meow"));