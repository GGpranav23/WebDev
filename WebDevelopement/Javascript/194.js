let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9,10]

// Concatenating two arrays

let array3 = array1.concat(array2)
console.log(array3)

// The Above Method returns an array, what if we need a string?

// Joining the array 

let arrayString = array3.join("")           // Argument is the element which comes inbetween every two character (12345678910)
console.log(arrayString);

// Reversing the array

array3.reverse()
console.log(array3)

// Finding the index of an element in an array

let ElementIndex = array3.indexOf(3)            // Returns -1 if the element is not present 
console.log(ElementIndex);

// Fetching a particular continous section of an array

let array4 = [1,2,3,4,5,6,7,8,9]
console.log(array4.slice(0,3))             // slice(startIndex, EndIndex) , returns element from starting_Index to Ending_Index - 1

// Adding element by removing some

let array5 = [1,2,3,4,5,6]
console.log(array5.splice(2, 1, 500))       // .splice(IndextoInsertElement, NumberOfElementsToRemove, ElementToAdd(s))
console.log(array5)
