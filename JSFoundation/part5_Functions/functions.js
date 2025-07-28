console.log("\nFunction 1:");
function greet(Name)
{
    console.log('Hello',`${Name}`);
}
greet("Saras");

console.log("\nFunction 2:");
function makeTea(teaName)
{
    console.log("Making ",teaName);
    return 0;
}
makeTea("Green Tea");

// Arrow function:
console.log("\nFunction 3:");
const calculateTotal = (price,quantity) => price*quantity ;
let totalCost = calculateTotal(100,500);
console.log(totalCost);

/********** Higher order functions = First Class functions ************/
// When a function is used as a parameter

// Ex: Write a function names 'processTeaOrder' that takes another function, 'makeTea',
// as a parameter and calls it with the argument "earl grey".
// return the result of calling 'makeTea'

console.log("\nFunction 4:");
function makeTea(typeOfTea){
    return `makeTea ${typeOfTea}`;
}

function processTeaOrder(makeTea){
    return makeTea('Earl Grey');
}
let order = processTeaOrder(makeTea)
console.log(order);

// Q- Create a fn called createTeaMaker(), that returns another function.
// The returned fn should take one parameter, 'teaType', and return a message
// like "MakingGreenTea".
// Store the returned fn in a variable names 'teaMaker' and call it with 'greenTea'.

console.log("\nFunction 5:");
function createTeaMaker() {
    return function(teaType)
    {
        return `Making ${teaType}`;
    }
}
let teaMaker = createTeaMaker();//Now teaMaker holds thr function that createTeaMaker returns
let result = teaMaker('green tea');
console.log(result);
/***** CLOSURE ***********/
/*  The above example is an example of closure
    A closure is when a function remembers and accesses variables from
   its outer scope, even after the outer function has finished execution. */

