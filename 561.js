// 561. Array Partition I
// 문제
// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) 
// such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

// Ex.
// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.

// Problem link
// https://leetcode.com/problems/array-partition-i/

// 풀이: sort 해주고 각 두개중에 작은것들을 더하면 답이 나온다. 
var arrayPairSum = function(nums) {
    nums.sort((a, b) => (a - b));
    let result = 0;
    for(let i = 0; i < nums.length; i = i + 2){
        result += nums[i];
    }
    return result;
};

// (a, b) => a - b is a shortcut notation for:중요
// (a, b) => a - b is a shortcut notation for:
// function (a, b){
//  return a - b;
// }
