/*** Arrow Functions or Fat Arrow Functions ***/

// Function with single Parameter and a single return statement 

const square = (x) => x * x
let result = square(4)
console.log(result);

// Function with two parameters and a single return statement 

const add = (x,y) => x + y
let result1 = add(3,5)
console.log(result1);

// Function with Mutliple Parameters and Multiple statement 

const test = (x,y) => {
    console.log('Adding %d and %d',x,y);
    return x + y
    
}

let result2 = test(2,4)
console.log(result2);


// Function that returns an object
const object = (x,y) => ({Sum: x + y, Difference: x - y})

let result3 = object(6,10)
console.log(result3);



/*** Points to be noted ***/

// 1. Parantheses are optional in case of single parameters 
// 2. The return keyword is required in case of multiple statements(if you want to return anything)
// 3. To return an object, wrap it around with Parantheses 