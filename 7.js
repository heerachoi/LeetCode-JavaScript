// #

/**
 * @param {number} x
 * @return {number}
 */

 var reverse = function(x) {
    const isNegative = x < 0;
    const xStrArr = Math.abs(x).toString().split(""); //Math.abs으로 x의 -를 없앤다. //결과: 1,2,3
    const reversStr = xStrArr.reverse().join(""); //reverse() 결과: 3,2,1 //join() 결과: 321
    const num = Number(reversStr); //string을 숫자로 만들어준다. 
    if (isNegative && num > Math.pow(2, 31)) {
        return 0;
    }
    console.log("?? = " + !isNegative && num);

    if (!isNegative && num > Math.pow(2, 31) - 1) { //!isNegative는 false이다. //Math.pow(2,31) - 1 = 2147483647 <- Maximum 32-bit signed integer value. 
        return 0;
    }
    console.log(isNegative ? -num : num); //-num은 "-"를 앞에 붙여준다.
    return isNegative ? -num : num;
};


let n = -123;
reverse(n);

// MAX_INT:Number
// Maximum 32-bit signed integer value. Math.pow(2, 31) - 1
// console.log( MAX_INT ); // 2147483647

// MAX_UINT:Number
// Maximum 32-bit unsigned integer value. Math.pow(2, 32) - 1
// console.log( MAX_UINT ); // 4294967295

// MIN_INT:Number
// Minimum 32-bit signed integer value. Math.pow(2, 31) * -1.
// console.log( MIN_INT ); // -2147483648

