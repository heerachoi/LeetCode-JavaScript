// 28. Implement strStr()

// 문제
// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Example 3:
// Input: haystack = "", needle = ""
// Output: 0

// Example 4:
// Input: haystack = "a", needle = ""
// Output: 0

0
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(!needle) {
      return 0;
    }
    let haystackArr = haystack.split("");
    const first = needle[0];
    let buffer = 0;

    while(haystackArr.indexOf(first) !== -1) {
      if (haystackArr.length < needle.length) {
        break;
      }
      const index = haystackArr.indexOf(first);
      const str = haystack.substring(index, index + needle.length);
      if (str === needle) {
        return index + buffer;
      } else {
        haystackArr = haystackArr.splice(index + 1);
        haystack = haystack.substring(index + 1);
        buffer += index + 1;
      }
    }
    return -1;
};

haystack = "abc";
needle = "c";
console.log(strStr(haystack, needle));
