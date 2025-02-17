// Function with unlimited number of parameters

function NnumberofParameters(){
    for(let i = 0; i < arguments.length; i++){
    console.log(arguments[i])
}
}

NnumberofParameters(1,2,3,4,5,6)


function addition(){
    let sum = 0
    for(let i=0; i < arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}

let result = addition(1,2,3,4,5,6,7,8);
console.log(result);
