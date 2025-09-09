let num1 = 1;

// In javaScript, everything can be converted into objects :-)
let num2 = new Number(1);
console.log(" num1 type: ", typeof(num1),"\n num2 type: ", typeof(num2));


/////////////////// StrinGS ///////////////////////////////////
let s1 = "Hello";
let s2 = "Saras";

let oldGreet = s1 + " " + s2 + "!!"; // tedious right??
let newGreet = `Hello ${s2}!!`; // Say hello to String interpolation
console.log(oldGreet);
console.log(newGreet);

// We can do any operations inside the strings using ${}
let calC = `New calculation = ${1 + 1 + 90 * 710 / 71}`;
console.log(calC);

/////////////// SYMBOL ///////////////
let rem = Symbol("Saras");
console.log(rem);