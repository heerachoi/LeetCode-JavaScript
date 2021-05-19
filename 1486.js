// #1486. XOR Operation in an Array
// Given an integer n and an integer start.
// Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
// Return the bitwise XOR of all elements of nums.

// Ex.
// Input: n = 5, start = 0
// Output: 8
// Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.

// 1. save the numbers in an array
// 2. operate xor

var xorOperation = function(n, start) {
    let arr = [];
    let xor;
    for (let i = 0; i < n; i++) {
        arr.push(start + (2*i));
    }
    xor = arr[0];
    for (let i = 1; i < n; i ++){
        xor = xor^arr[i];
    }

    console.log(xor);
    return xor;
};

let n = 5;
let start = 0;
let k = 0;
xorOperation(n, start);
