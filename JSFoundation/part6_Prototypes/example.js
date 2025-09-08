function example1() {
    console.log(this);
}

example1();


const example2 = () => {
    console.log("arrow func: ", this);
}
example2();