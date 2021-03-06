// 69. Sqrt(x)

// 문제
// Given a non-negative integer x, compute and return the square root of x.
// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

// Example 1:
// Input: x = 4
// Output: 2

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.


var mySqrt = function(x) {
    let lo = 0, hi = x;
    while (lo < hi) {
        const mid = parseInt((lo + hi)/2);
        if (mid * mid === x) {
            return mid;
        }
        if (x < mid * mid) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return x < hi * hi ? hi - 1 : hi; 
};

console.log(mySqrt("8"));  //result = 2

// built-in exponent function
var mySqrtBuiltIn = function(x) {
    return Math.floor(Math.sqrt(x))
};