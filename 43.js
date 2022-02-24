// 43. Multiply Strings

// 문제
// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

// Example 1:
// Input: num1 = "2", num2 = "3"
// Output: "6"

// 이문제가 심플하지 않은이유
// Input:
// "123456789"
// "987654321"
// Output:
// "121932631112635260"
// Expected:
// "121932631112635269"
// Javascript는 숫자를 64빝츠 부동 소수점을 사용하기 때문에 16자리를 넘어가는 숫자에 대해서는 정확한 표현을 하지 못합니다. 
// 따라서 한자리씩 곱해 배열에 담은 후 마지막에 .join()과 toString()을 이용해 답을 리턴했습니다.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 function multiply(num1, num2) {
    let result = new Array(num1.length + num2.length).fill(0);
  
    for (let i = num1.length - 1; i >= 0; i--) {
      let index = num2.length + i;
      let carry = 0;
      for (let j = num2.length - 1; j >= 0; j--) {
        let value = num1[i] * num2[j] + carry + result[index];
        result[index] = value % 10;
        carry = (value - result[index]) / 10;
        index--;
      }
      result[index] += carry;
    }
    if (result[0] === 0) {
      while (result[0] === 0 && result.length !== 1) {
        result.shift();
      }
    }
    return result.join("").toString();
  }


var num1 = "123456789";
var num2 = "987654321";
console.log(multiply(num1, num2));
