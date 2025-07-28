let computer = {cpu : 12};
let lenovo = {
    screen : "HD",
    __proto__ : computer, // to inherit properties of computer object
};
let tomHardware = {};

console.log('computer',computer);
console.log('computer cpu: ', computer.cpu);

console.log(`Computer: `, computer.__proto__); // specifies the properties of object
console.log('Lenovo',lenovo.__proto__);



/***************** EXAMPLES OF DUNDER USE ************/

let genericCar = {tyres: 4};
let tesla = { driver : "AI"};

Object.setPrototypeOf(tesla,genericCar);
console.log('tesla',genericCar);
console.log('tesla all props: ',Object.getPrototypeOf(tesla));