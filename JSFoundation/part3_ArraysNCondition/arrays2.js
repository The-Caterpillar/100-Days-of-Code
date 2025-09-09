const heroes = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];

const dc = ['Batman', 'Superman', 'Wonder Woman'];

// heroes.push(dc); cls
//  // adds the entire array as the last element of the array

all_heroes = heroes.concat(dc);
console.log("All heroes: ",all_heroes); // merges two arrays

// spread operator
all_heroes2 = [...heroes, ...dc];
console.log("All heroes 2: ",all_heroes2);


const another_array = [1,2,3,4,[5,6,7,[10,11]],8,9];
const usable_another_array = another_array.flat(Infinity); // flattens the array up to the specified depth
// Infinity flattens the array completely
// in place of Infinity, we can also provide a number to specify the depth
console.log("Usable another array: ",usable_another_array);


// More methods
console.log(Array.isArray(heroes)); // true
console.log(Array.from('hello')); // ['h','e','l','l','o'] // creates an array from an iterable object
console.log(Array.of(1,2,3,4)); // [1,2,3,4] // creates an array from the provided arguments

// fill method
const arr = new Array(5).fill(0); // creates an array of length 5 and fills it with 0
console.log("Filled array: ",arr);