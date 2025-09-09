/*
Declare an array named tea flavours that contains: green tea, black tea, oolong tea, spearmint tea
*/

// .Arrays when copied to another variables, shallow copy is created 
// i.e. both variables point to the same array in memory
// To create a hard copy, use spread operator or slice method

let arr1 = [1,2,3];
console.log("Original: ",arr1);

let arr2 = arr1; // neither a shallow copy nor a deep copy, just another reference to the same array
let shallowAr = [...arr1]; // shallow copy using spread operator
let shallowAr2 = arr1.slice(); // shallow copy using slice method

// push, pop, shift, unshift, splice, slice, indexOf, includes, concat
// push - adds element at the end of array
// pop - removes element from the end of array
// shift - removes element from the beginning of array
// unshift - adds element at the beginning of array
// splice - adds/removes elements in the middle of array
// slice - creates a shallow copy of array
// indexOf - returns the index of the element in the array
// includes - returns true if the element is present in the array, else false
// concat - merges two arrays
console.log("***************************************************************************")


console.log("Diff between splice and slice");

let A = [1,2,3,4,5,6,7,8];
let sliced = A.slice(2,4);
console.log("A: ",A)
console.log("Sliced: ",sliced);
// creates a shallow copy from index 2 to 4 (4 not included)

let B = A.splice(2,4); // removes 2 elements from index 2
console.log("B: ",B); // returns the removed elements
console.log("A after splice by B: ",A); // original array is modified


console.log("***************************************************************************")
let teaFlavours = ['black tea','green tea', 'black tea', 'oolong tea']; 
let teaFlavours2 = new Array('black tea','green tea', 'black tea', 'oolong tea');

/**
 * Declare an array of 4-5 elements containing cities and access the 3rd element and add it into a variable named favCity
*/

let cities = ['London', 'Bermingham', 'Paris', 'NY',]
let favCity = cities[2];
console.log(favCity);

/*Add two more cities in the above array */
let citiesVisited = ['Mumbai','Sydney'];
citiesVisited[2] = 'Berlin';
citiesVisited.push("Tokyo");
cities.push(...citiesVisited); // pushes cities individually
console.log("cities: ", cities);

popped = cities.pop();
console.log(popped);

console.log(cities);


/// Creating softcopy of array:
console.log("Original: ",cities);
let softCopyCities = cities;
cities.pop();
console.log("After pop operation: ")
console.log("Original: ",cities);
console.log("SoftCopy: ",softCopyCities);  // So softcopy is just another variable that references to the same array it is created from

// Creating HardCopy of arrays: 
let topCities = ["Tokyo", "Seoul", "Bangalore", "Mumbai", "London"];
console.log("Original Array: ", topCities);
let hardCopyCities = [...topCities];
let hardCopyCities2 = topCities.slice();
topCities.pop();
console.log("After pop operation");
console.log("Original: ",topCities);
console.log("Hard Copy: ",hardCopyCities);
console.log("Slice wala HardCopy: ",hardCopyCities2)

///// Merge two arrays

let europe = ["Paris","Rome"];
let asia = ["tokyo", "Bangkok"];

let worldCities = europe+asia; // won't work
console.log(worldCities);
let worldCities2 = [europe,asia]; // won't work
console.log(worldCities2);

let worldCities3 = europe.concat(asia);
console.log(worldCities3);
let worldCities4 = [...europe,...asia];
/// ... creates a shallow copy
// Shallow copy?? Only the primitive values are copied by value in the new array. If there
// are any objects/reference types, they will be copied by reference. Any changes made
// to them will affect the original array as well
console.log(worldCities4);


/**************************/
let citiesBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = citiesBucketList.includes("London");
console.log(isLondonInList);


/** Shift, Unshift, reverse */
// Shift : removes first element of array
// Unshift : adds elements in the beginning of the list
// reverse : reverses a list
