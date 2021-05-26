// 53. Maximum Subarray

// 문제
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */

// start i = 0; if sum < 0, start i = 1
// if 
 var maxSubArray = function(nums) {
    var prev = 0;
    var max = -Number.MAX_VALUE; // -1.7976931348623157e+308

    for (var i = 0; i < nums.length; i++) {
      prev = Math.max(prev + nums[i], nums[i]);
      max = Math.max(max, prev);
    }
    return max;
};

nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));


