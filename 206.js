// 206. Reverse Linked List

// 문제
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    var first = null;
    var sec = head;
    var next;
    while(head){   
        sec = head;
        next = head.next;
        sec.next = first;
        head = next;
        first = sec;
    }
    return first;
};

head = [1,2,3,4,5]
console.log(reverseList(head));
