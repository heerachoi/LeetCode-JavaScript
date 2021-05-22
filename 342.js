// #342 Power of Four
// 문제
// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Ex 1
// Input: n = 16
// Output: true

// Ex 2
// Input: n = 1
// Output: true

var isPowerOfFour = function(n) {
    if(n == 0) {
        return false;
    }
    while(n != 1) {   
        if(n % 4 != 0) {
            return false;
        }
        n = n / 4;   
    }
    return true;
};

let n = 20;
console.log(isPowerOfFour(n));

// note - n value can be negative
//1, 4: true
//-2147483648, 0, 8, 20: false