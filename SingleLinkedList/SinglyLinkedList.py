class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
    def insertBegin(head,data):
        temp = Node(data)
        temp.next = head
        return temp
    

    def insertEnd(head,data):
        temp = Node(data)
        if not head:
            return temp
        curr = head
        while curr.next:
            curr = curr.next
        curr.next = temp
        temp.next = None
        return head
    

    def insertPos(head,data,pos):
        temp = Node(data)

        if pos == 0:
            temp.next = head
            return temp
        curr = head
        for i in range(pos-1):
            curr = curr.next
            if curr == None:
                return head
        temp.next = curr.next
        curr.next = temp
        return head
    
    def deleteBegin(head):
        if not head:
            return None
        head = head.next
        return head
    
    def deleteEnd(head):
        if not head:
            return None
        if not head.next:
            return None
        curr = head
        while curr.next.next != None:
            curr = curr.next
        curr.next = None
        return head
    
    def deletePos(head,pos):
        if not head:
            return None
        if pos == 0:
            return head.next
        curr = head
        for i in range(pos - 1):
            curr = curr.next
            if curr is None or curr.next is None:
                return head
        curr.next = curr.next.next
        return head
    def printList(head):
        curr = head
        while curr:
            print(curr.data,end = " ")
            curr = curr.next

head = None

head = Node.insertBegin(head, 3)
head = Node.insertBegin(head, 2)
head = Node.insertBegin(head, 1)

print("Linked List after inserting at the beginning:")
Node.printList(head)

head = Node.insertEnd(head, 4)
head = Node.insertEnd(head, 5)

print("\nLinked List after inserting at the end:")
Node.printList(head)

head = Node.insertPos(head, 10, 2)

print("\nLinked List after inserting at position 2:")
Node.printList(head)

head = Node.deleteBegin(head)

print("\nLinked List after deleting from the beginning:")
Node.printList(head)

head = Node.deletePos(head, 2)

print("\nLinked List after deleting from position 2:")
Node.printList(head)
