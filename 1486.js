// #1486. XOR Operation in an Array
// 1. save the numbers in an array
// 2. operate xor

var xorOperation = function(n, start) {
    let arr = [];
    let xor;
    for (let i = 0; i < n; i++) {
        arr.push(start + (2*i));
    }
    xor = arr[0];
    for (let i = 1; i < n; i ++){
        xor = xor^arr[i];
    }

    console.log(xor);
    return xor;
};

let n = 5;
let start = 0;
let k = 0;
xorOperation(n, start);