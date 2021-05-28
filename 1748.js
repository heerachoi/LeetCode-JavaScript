
// 1748. Sum of Unique Elements

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
// Return the sum of all the unique elements of nums.

// Example 1:
// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    let map = new Object();
    nums.forEach(num => {
        if(map[num] != null) {
            map[num] += 1;
            console.log("map = " + map);
        }
        else {
            map[num] = 1;
        }
 })
 let sum = 0;
 Object.keys(map).forEach(k => {
     console.log("k = " + k );
     if(map[k] === 1) {
         sum += +k;
     }
 })
 return sum;

};


nums = [1,2,3,2,5];
console.log(sumOfUnique(nums));