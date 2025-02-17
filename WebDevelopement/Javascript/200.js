/*** Anonymous Functions: does not have a name or identity ***/

// 1. Anonymous functions need to be assigned to a variable 
// 2. Hard for Debugging 

let x = function (){
    console.log("Hey there, this is a statement from an anonymous function");
}

x();        // Calling the anonymous function 




/*** Immediately invoked function Expression (IIFE) (can be anonymous too)***/

(function exec(){
    console.log("Pranav");
})();

(function (x){                          // IIFE as an anonymous function
    console.log(x*x);
})(5);