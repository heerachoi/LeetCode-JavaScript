// 67. Add Binary

// 문제
// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    
    return sum.toString(2)
  };
var a = "1010";
var b = "1011";
console.log(addBinary(a,b)); //10101