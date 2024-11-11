// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

var productExceptSelf = function(nums) {
    //P: int[] 'nums'
    //R: int[], needs to be O(n)
    //E: nums = [8,2,3], answer[0] === 6, answer[1] === 24, answer[2] === 16 
    //P: immediately I think loop through nums and reduce, somehow slicing out i?
    //   DS -> ?

    let answer = new Array(nums.length).fill(1)
    let pre = 1
    let suf = 1
    for(let i = 0; i < nums.length; i++){
        answer[i] = pre // sets current prefix val to answer arr
        pre = pre *= nums[i] // updates prefix value for next loop
    }

    for(let i = nums.length - 1; i >= 0; i--){ 
        answer[i] *= suf // makes product of current suffix and current pre value
        suf = suf *= nums[i] //updates suffix value for next loop

    }
    console.log(answer)
};

productExceptSelf([1,2,3,4]);
