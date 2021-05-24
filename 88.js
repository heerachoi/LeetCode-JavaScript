// 88. Merge Sorted Array

// 문제
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

var merge = function(nums1, m, nums2, n) {
    m--;
    n--;
    let i = nums1.length - 1;
    while (i >= 0) { 
      if (n > -1 && m > -1 && nums1[m] >= nums2[n]) {
        nums1[i] = nums1[m]; 
        nums1[m] = nums2[n]; 
        m--;
      }
      else if (n > -1) {
        nums1[i] = nums2[n--]; 

      }
      i--;
    }
  };

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
n = 3;
merge(nums1, m, nums2, n);