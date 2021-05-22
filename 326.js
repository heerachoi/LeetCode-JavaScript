// #326. Power of Three
// 문제
// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:
// Input: n = 27
// Output: true

var isPowerOfThree = function(n) {
    if (n == 0) {
        return false;
    }
    while (n != 1) {
        if (n % 3 != 0) {
            return false;
        }
        n = n/3;
    }
    return true;
};