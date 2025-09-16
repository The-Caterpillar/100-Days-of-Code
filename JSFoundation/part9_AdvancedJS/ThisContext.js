const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
}

person.greet();

let Call = person.greet;
Call(); // 'this' is undefined in strict mode or the global object in non-strict mode

let boundCall1 = person.greet.bind(person);
boundCall1(); // "Hello, Alice"

let boundCall2 = person.greet.bind({ name: "Bob" });
boundCall2(); // "Hello, Bob"