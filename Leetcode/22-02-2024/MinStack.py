import math

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class MinStack:
    def __init__(self):
        self.head = None
        self.size = 0
        self.min_stack = []
    def push(self, val: int) -> None:
        temp = Node(val)
        temp.next = self.head
        self.head = temp
        self.size += 1

        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)

    def pop(self) -> None:
        if self.head is None:
            return math.inf

        res = self.head.data
        self.head = self.head.next
        self.size -= 1

        if res == self.min_stack[-1]:
            self.min_stack.pop()
        return res

    def top(self) -> int:
        if self.head is None:
            return math.inf
        return self.head.data

    def getMin(self) -> int:
        if not self.min_stack:
            return math.inf
        return self.min_stack[-1]
