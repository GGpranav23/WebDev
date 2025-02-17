// 12_Move_Zeroes.js

// Moving Zeroes (leetcode 283)

// Problem Statement: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements

// For example: [3,0,5,0,0,1,0,4] => [3,5,1,4,0,0,0,0]



// Brute Force Method 
// 1. Create an array which holds the non-zero elements 
// 2. Count the number of zeros 
// 3. return a new array which contains the non-zero elements first and fill the rest indices with zeros 

function moveZeroes(nums){
    const nonZeroElements = nums.filter((num) => num != 0);
    const zeroCount = nums.length - nonZeroElements.length
    return[...nonZeroElements, ...Array(zeroCount).fill(0)]
}

const nums = [0,1,0,3,12];
console.log(nums);
console.log(moveZeroes(nums));



// Two Pointers Approach 

// Steps: 1. Initialize two pointers: 
//                 a. 'lastNonZeroFoundAt' to track when to place the next non-zero element 
//                 b. 'cur' to traverse the array
//        2. Traverse the array
//                 a. Swap non-zero elements with the element at lastNonZeroFoundAt
//                 b. lastNonZeroFoundAt
//        3. Update the pointers
//                 a. Move lastNonZeroFoundAt to the next position after placing a non-zero element   

function moveZeroes(Number){
    let lastNonZeroFoundAt = 0;
    for(cur = 0; cur <Number.length; cur++){
        
    }
}
