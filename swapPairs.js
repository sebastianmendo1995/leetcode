// Problem 24


// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself may be changed.


var swapPairs = function (head) {
    let newHead = new ListNode(0);
    newHead.next = head;

    let slow = newHead;
    let fast, prev;

    while (slow.next && slow.next.next) {
        prev = slow;
        slow = slow.next;
        fast = slow.next;

        slow.next = fast.next;
        fast.next = slow;
        prev.next = fast;
    }
    return newHead.next;
};

console.log(swapPairs([1, 2, 3, 4])) // 2 -> 1 -> 4 -> 3