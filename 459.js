// 459. Repeated Substring Pattern

// 문제
// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example 1:
// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.

// Example 2:
// Input: s = "aba"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
    for (let i = 1; i < s.length; i++) {
      if (s.length % i === 0 && s.slice(0, i).repeat(s.length / i) === s) return true;
    }
    return false;
  };

s = "abcabcabc";
console.log(repeatedSubstringPattern(s));