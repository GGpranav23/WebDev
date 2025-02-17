// 1. In Javascript, an array is heterogeneous 
// 2. In Javascript, an array is mutable 
// 3. In Javascript, an array has as lowerbound "zero" 


let arr = [1,2,3,"Pranav", false, 12.0]

// Getting the length of an array

let arraylength = arr.length
console.log("The Length of the array is %d",arraylength);

// Accessing the element 

console.log(arr[3])

// Modifying the Element 

arr[4] = "Shinde"
console.log(arr[3], arr[4])

// Adding the element the end 

arr.push("Malhar")
console.log(arr)

// Adding the element to the beginning 

arr.unshift("Start")
console.log(arr)

// Removing the element from the end

arr.pop()                   // This .pop method returns the element removed 
console.log(arr)

// Removing the element from the beginning 

let rem = arr.shift()      // This .shift method returns the element removed 
console.log(arr);
console.log("The element you removed was %s", rem)
