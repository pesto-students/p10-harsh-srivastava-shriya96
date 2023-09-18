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
    let current = head 
    let previous = null
    while(current!=null){
        let newNode = current.next
        current.next = previous
        previous=current
        current = newNode
    }
    
    return previous
};