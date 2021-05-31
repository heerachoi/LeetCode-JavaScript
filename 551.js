// 551. Student Attendance Record I

// 문제
// You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:
// 'A': Absent.
// 'L': Late.
// 'P': Present.
// The student is eligible for an attendance award if they meet both of the following criteria:
// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.

// Example 1:
// Input: s = "PPALLP"
// Output: true
// Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.

// Example 2:
// Input: s = "PPALLL"
// Output: false
// Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.

/**
 * @param {string} s
 * @return {boolean}
 */
 var checkRecord = function(s) {
    var Acount = 0;
    var Lcount = 0;
    var LLL = 'LLL';
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'A') {
            Acount++;
        }
        if (s[i] == 'L') {
            var tempL = s.substring(i, i+3);
            console.log("tempL = " + tempL);
            if (tempL == LLL) {
                Lcount++;
            }
            if (Lcount ==1 ) {
                return false;
            }
        }
    }

    if (Acount >= 2) {
        return false;
    }
    else if (Lcount == 1) {
        return false;
    }
    return true;
 };


let s = "PPALLL";
console.log(checkRecord(s));