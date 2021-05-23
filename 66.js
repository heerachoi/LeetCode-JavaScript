// 66. Plus One
// 문제
// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 10.

// Example 3:
// Input: digits = [0]
// Output: [1]

// 마지막자리가 9가 아니면 더해주고 return
// 마지막자리가 9이면 다 0으로 바꿔주고 앞에 1투업.
var plusOne = function(digits) {
    for (let i = digits.length - 1; i != -1; i--) {
        console.log("digits = " + digits);
        if (digits[i] != 9) {
            digits[i] += 1
            console.log("if digits = " + digits);

            return digits
        }
        digits[i] = 0
    }
    digits.unshift(1) //Getting here means everything was a 9, so it's now all 0's, meaning we should add a 1 in front.
    console.log("return digits = " + digits);
    return digits
};

  let a = 9;
  plusOne(a);

// 노트
// unshift는 문자열에서 앞에 적는다.