// 989. Add to Array-Form of Integer

// 문제
// The array-form of an integer num is an array representing its digits in left to right order.
// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

// Example 1:
// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
 var addToArrayForm = function(A, K) {
    // i = current index of array A
    // c = carry
    // k = current least significant digit of K
    // a = current least significant digit of A
    // d = current digit to push
    
    const n = A.length;
    const temp = [];
    let i = n - 1; //input = 1,2,3,4 //i = 3
    let c = 0;
    
    while (i >= 0 || K > 0) {
        let k = K % 10; //k = 34, k %10 = 4
        console.log("k = " + k);
        let a = i < 0 ? 0 : A[i]; //start with 3 // i = 0
        console.log("a = " + a);
        let s = k + a + c; // k = 4, a = 0, c = 0
        console.log("s = " + s);
        let d = s % 10; // 4 % 10 = 4
        console.log("d = " + d);
        temp.push(d); // temp = [4]
        c = s > 9 ? 1 : 0; // s = 4 // c : false , c = 0
        console.log("c = " + c);
        K = Math.floor(K / 10); //k = 4
        console.log("k = " + k);
        i--;
        console.log("i ------------  = " + i );
    }

    if (c == 1) {
        temp.push(c)
    }
    
    return temp.reverse()
};


//var num = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3];
var num = [1,2,0,0];
var k = 34;
console.log(addToArrayForm(num,k));