function outer() {
    let counter = 4;
    return function() {
        counter++;
        return counter;
    }
}

let increment = outer(); // counter is 4

console.log(increment()); // 5
console.log(increment()); // 6