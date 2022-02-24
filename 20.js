// 20. Valid Parentheses
// 문제 
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([)]"
// Output: false

// Example 5:
// Input: s = "{[]}"
// Output: true

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

let isValid = function(s) {
    let map=new Map();
    map.set('{','}');
    map.set('(',')');
    map.set('[',']');
    let b=[];
    for(let i=0;i<s.length;i++){
        console.log("s.charAt(i) = " + s.charAt(i));
        if(map.has(s.charAt(i))){ //if map has either {},[],()
            console.log("in if ");
            b.push(s.charAt(i)); //add that to new b array
            console.log(" b = " + b);
        }
        else{ //if map array does not have one of {}.[],()
            console.log("in else");
            let pop=b.pop(); //remove the last one
            console.log(" pop = " + pop);
            if(map.get(pop)!==s.charAt(i)){
                return false;
            }
        }
    }
    //console.log("b.length===0 ?? " + b.length===0 )
    return b.length===0;
   };

   let s = "()[]{}";
   console.log(isValid(s));

   