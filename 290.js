// 290. Word Pattern

// 문제
// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, str) {
    let p2s = {};
    let s2p = {};
    const words = str.split(' ');
    if(pattern.length != words.length) return false;
    
    for(let i = 0; i < pattern.length; i++) {
      console.log("!p2s[pattern[i]] = " + !p2s[pattern[i]]);
      if(!p2s[pattern[i]] && !s2p[words[i]]) {
        p2s[pattern[i]] = words[i];
        s2p[words[i]] = pattern[i];
        continue;
      }
      
      if(p2s[pattern[i]] != words[i] || s2p[words[i]] != pattern[i]) {
          return false;
      }
    }
    return true;
  };

  
  var pattern = "abaa";
  var s = "dog cat cat dog";

  console.log(wordPattern(pattern,s));