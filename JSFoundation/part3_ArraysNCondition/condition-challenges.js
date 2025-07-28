// Check if a number is greater than another

let num1 = 5;
let num2 = 9;

if(num1 > num2) {
    console.log(num1,">",num2);
}
else if(num2>num1) {
    console.log(num2,">",num1);
}
else
{
    console.log(num1,"=",num2);
}


// CHECK if array is empty

let items = [];

if(items.length === 0)
{
    console.log("Empty array");
}
else{
    console.log("Not an empty array");
}

// Check datatype of array item

girls = ['meow','bhow','irk',0,12,true,null];
if(girls.length > 0)
{
    for(let i=0; i<girls.length; ++i)
    {
        console.log("Type of ",girls[i]," is : ",typeof(girls[i]));
    }
}