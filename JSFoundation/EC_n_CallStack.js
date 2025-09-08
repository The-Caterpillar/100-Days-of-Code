// Execution Context & Call Stack
// Step 1: Global Execution Context/Global Environment is created
//        - 'this' is allocated to this, Global EC is named anonymous in the browsers
// Step 2: Memory phase / creation phase
//     - All variables and functions are stored in memory
//     - Variables are initialized to 'undefined'
//     - Functions are stored with their definitions
// ***Steps 1 & 2 are called the 'Creation Phase' and First cycle/pass
// Step 3: Execution phase / second cycle/pass
let val1 = 10;
let val2 = 5;

function addNum(num1,num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1,val2); // 15
let result2 = addNum(20,30); // 50

console.log(result1);
console.log(result2);