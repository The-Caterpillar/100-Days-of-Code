function* generator1() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = generator1();
console.log(gen);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
 
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined
console.log(gen.next().value); // undefined