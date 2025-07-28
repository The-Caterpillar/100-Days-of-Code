/**
 * Write a for loopcontaining some 5 elements.
 * Choose an element, say 3rd, when you find it, store all elements before that element
 * in a new array
 */

let chais = ['masala', 'oolong', 'green', 'matcha', 'spearmint', 'blue'];
let selectedTea = 'matcha';
let newList = [];

for(let i=0; i<chais.length; ++i)
{
    if(chais[i] === 'matcha')
    {
        for(let j=i; j>=0; --j)
        {
            newList.push(chais[j]);
        }
    break;
    }
}

console.log(newList);



//// For-of loop

let numbers = [1,2,3,4,5]
let smallNum = [];

for (const num of numbers) // num = element
{
    smallNum.push(num)
    if(num === 4)
    {
        break;
    }
}
console.log(smallNum);


// for-in  loop
let cityPopulation = {
    "London" : 890000,
    "New York" : 840000,
    "Paris" : 2200000,
    "Berlin" : 3500000
}

let cityPopulations = {}
console.log(Object.keys(cityPopulation));
console.log(Object.values(cityPopulation));

for (const city in cityPopulation) // city = key
{
    // console.log(cityPopulation[city]);
    if(city === "Berlin") continue;
    cityPopulations[city] = cityPopulation[city];
}

/////// for-each loop
console.log("\n\n","\nTea collections are:");
let teaCollection = ["earl grey", "green tea",'chai'];
teaCollection.forEach(function(fruit,index)
{
    console.log(index + ': '+fruit);
});
