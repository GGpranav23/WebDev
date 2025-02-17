// Intersection of two arrays

// Problem Statement(leetcode - 350): Given two integers arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order 

// Constraints: 1. Both arrays are not neccessarily sorted
//              2. The elements in the result should appear as many times as they do in both arrays


// Brute Force Approach

// Time Complexity: O(n^2)

function intersect(nums1, nums2){
    let result = [];
    let visited = new Array(nums2.length).fill(false)       // 1. creates a new array with length of nums2, 2. It fills each index with "false"
    
    for(let i = 0; i < nums1.length; i++){
        for(let j=0; j < nums2.length; j++){
            if(nums1[i] == nums2[j] && !visited[j]){
                result.push(nums1[i]);
                visited[j] = true;
                break; 
            }
        }
    }
    return result
}

let nums1 = [1,2,2,1];
let nums2 = [2,2]
console.log(intersect(nums1,nums2));



// Sorting and Two Pointers Method

// Time Complexity: O(n)

// Sort both arrays and use two pointers to find the intersection 
// Steps: 1. Sort Both arrays
//        2. Use two pointers to iterate through both the arrays and find the common elements
//        3. if the element at both pointers match, add it to the result and move both pointers
//        4. if the element in nums1 is smaller, move the pointer in nums1 
//        5. if the element in nums2 is smaller, move the pointer in nums2 
            

function intersectionPtrMethod(Number1, Number2){
    Number1.sort((a,b) => a - b)
    Number2.sort((a,b) => a - b)
    
    let result = []
    let i = 0;
    let j = 0;

    while(i < Number1.length && j < Number2.length){
        if(Number1[i] == Number2[j]){
            result.push(Number1[i]);
            i++;
            j++;
        }
        else if(Number1[i] < Number2[j]){
            i++;
        }
        else{
            j++
        }
    }
    return result


}

let Number1=[1,2,2,1];
let Number2=[2,2]
console.log(intersectionPtrMethod(Number1,Number2))