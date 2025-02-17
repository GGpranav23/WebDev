//  1. In Javascript, functions are first-class citizens : meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions 

function isPrimeNumber(Num1){           // Num1 is a parameter
    if(Num1%2==0){
        console.log("The Number is Even")
    }
    else{
        console.log("The Number is not even")
    }

}

isPrimeNumber(5)                        // 5 is a argument 




// Returning a value from a function

function calcSquare(Num){
    return Num*Num
}

// Storing the value returned from a function 

let result = calcSquare(3)
console.log(result);
