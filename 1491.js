
// 1491. Average Salary Excluding the Minimum and Maximum Salary
// 문제 
// Given an array of unique integers salary where salary[i] is the salary of the employee i.
// Return the average salary of employees excluding the minimum and maximum salary.

// Example 1:
// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500

/**
 * @param {number[]} salary
 * @return {number}
 */

 var average = function(salary) {
    var max = 100;
    var min = 10000000;
    var maxInd = 0;
    var minInd = 0;
    var total = 0;
    var count = 0;
    
    for (let i = 0; i < salary.length; i++) {
        if (salary[i] < min) {
            min = salary[i];
            minInd = i;
        }
        if (salary[i] > max) {
            max = salary[i];
            maxInd = i;
        }
    }
    console.log("max = " + salary[maxInd]);
    console.log("min = " + salary[minInd]);
    for (let j = 0; j < salary.length; j++) {
        console.log("j = " + j);
        console.log("minind = " + minInd);

        if ((j != minInd) || (j !=maxInd)) {
            console.log("minind ?? = " + minInd);

            console.log("total = " + salary[j]);
            total += salary[j];
            count++;
            console.log("count = " + count);
        }
    }
    total /= count;
    console.log("total = " + total);
    return total;
};

var s = [8000,9000,2000,3000,6000,1000];
average(s);


//다른 풀이

//shift is an expensive operation, so here's the one without shift.
var average = function(salary) {
    salary.sort((a, b) => a - b);
    
    // Remove first and last salary
    salary.shift();
    salary.pop();
    
    // Get average by summing salaries and dividing by number
    return salary.reduce((a, b) => a + b) / salary.length;
};


//다른 버전
var average = function(salary) {
    salary.sort((a,b)=> a-b)
    let x = salary.reduce((acc,val)=> acc+val) - salary[0] - salary[salary.length-1];
    return x/(salary.length-2)
    };

// 노트
// shift() - 첫번째 수를 없앤다.

    