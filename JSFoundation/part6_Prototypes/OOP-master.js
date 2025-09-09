let car = {
    make : "Toyota",
    model : "Camry",
    year : 2020,
    start: function() {
        return `Car: ${this.year} ${this.make} ${this.model}`;
    }
}

console.log(car.start());