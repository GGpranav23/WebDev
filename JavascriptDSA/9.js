/*** Removing Duplicates from an array ***/

// 1. Filter Method 

const inputArray = [1,2,2,3,4,5,5,6,7,8,8];
const UniqueArray = inputArray.filter((item, index) => inputArray.indexOf(item) == index);
console.log(UniqueArray);


// // 2. Set Method 
const UniqueArray1 = [...new Set(inputArray)];
console.log(UniqueArray1);


// 3. forEach Method 

let UniqueArray3 = []
inputArray.forEach((element) => {
    if(!UniqueArray3.includes(element)){
        UniqueArray3.push(element)
    }
})

console.log(UniqueArray3);

// 4. Reduce Method 

const UniqueArray4 = inputArray.reduce((accumulator, currentValue) => {
    if(!accumulator.includes(currentValue)){
        accumulator.push(currentValue)
    }
    return accumulator;
},[]);

console.log(UniqueArray4);

