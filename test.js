// Two Pointer Method 

function twoSumPtr(nums, target){
    nums = nums.map((num,index) => ({num,index}))
    
    nums.sort((a,b) => a.num - b.num)
    

    let left = 0;
    let right = nums.length - 1;
    
    while(left < right){
        const sum = nums[left].num + nums[right].num
        if(sum == target){
            return [nums[left].index, nums[right].index]
            
        }
        else if(sum < target){
            left++;
        }
        else{
            right++;
        }
        
    }
    return sum
    
}
let nums = [9,1,2,7,3,9,4]
let target = 12;
let result = twoSumPtr(nums,target)
console.log(result);

