const obj = {
    firstName : "Saras",
    isLoggedIn : true,
    'class name' : '2025',
};
console.log(obj.firstName);
console.log(obj['class name']);
obj.firstName = "Meow";  // Values of properties inside the const obj can be changed.
obj.lastName = "Tiwari";

console.log(obj);
console.log(typeof(obj));



///////////////// ARRAYS ////////////////////

let anotherUser = ["hitesh",true];
console.log(anotherUser[0]);

/********* Implicit type conversions ***********/
console.log(1+'1');
console.log(1+true);
            /*************************/
console.log("\nSome weird things about typeOf and types in js?? Here:")
let newVal = "2abc";
console.log(Number(newVal));
console.log(typeof Number(newVal));
