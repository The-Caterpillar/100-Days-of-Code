// DATES

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString()); // MAny other methods like toString() available
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

// Interview Question
console.log(Math.floor(Date.now()/1000/60/60/24/365)); // To get the years passed since 1970
