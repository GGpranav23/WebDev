// Problem Statement: Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target 

// Brute Force Method

// Space Complexity: O(1)
// Time Complexity: O(n^2)

// function twoSum(numarray, target){
//     for(i = 0; i < numarray.length; i++ ){
//         for(j=i+1; j < numarray.length; j++){
//             if(numarray[i] + numarray[j] == target){
//                 return [i,j]
//             }
//         }
//     }
// }

// console.log(twoSum([9,1,3,4,7], 10))




// Two Pointer Method 

// Space Complexity: O(1)
// Time Complexity: O(n)

// Steps:  1. Keep Track of original indices 
//         2. Sort the array 
//         3. Initialize two pointers
//         4. Set one pointer at the beginning (left) and another at the end (right) of the array
//             
//             Move Pointers: 1. Calculate the sum of element to the left and the right pointers
//                            2. if the sum is equal to the target sum, return the original indices of the elements 
//                            3. if the sum is less than the target sum, move the left pointer to the right to increase the sum
//                            4. if the sum is more than the target sum, move the right pointer to the left to decrease the sum 


function twoSumPTR(nums, target1){
    // Store the original Indices 
    nums = nums.map((num,index) => ({num, index}));
    console.log(nums);
    
    // Sort the array
    nums.sort((a,b) => a.num - b.num);
    console.log(nums)

    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        const sum = nums[left].num + nums[right].num
        if(sum == target1){
            return [nums[left].index, nums[right].index]
        }
        else if(sum < target1){
            left++;
        }
        else{
            right--;
        }
    }

    
}

num = [9,4,7,2,1,5]
target1 = 10
console.log(twoSumPTR(num,target1))