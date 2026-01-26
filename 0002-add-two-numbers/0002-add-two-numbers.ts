/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const head = new ListNode();
    let current = head;

    let carry = 0;

    while (l1 || l2) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;

        const sum = x + y + carry;
        const digit = sum % 10;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(digit);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry > 0) current.next = new ListNode(carry);


    return head.next;
};