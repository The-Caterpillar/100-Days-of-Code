let numbers = [2,4,6];
let multipliedNumbers = [];

for(i=0; i<numbers.length; ++i)
{
    let num = numbers[i]*2;
    multipliedNumbers.push(num);
}

console.log("Numbers: ",numbers)
console.log("multiplied numbers; ",multipliedNumbers);