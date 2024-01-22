def isValidParanthesis(s):
    def isMatching(a,b):
        if (a == '(' and b == ')') or (a == '[' and b == ']') or (a == '{' and b == '}'):
            return True
        else:
            return False
    stack = []
    for i in s:
        if i in ['(','[','{']:
            stack.append(i)
        elif isMatching(stack[-1],i) == False:
            return False
        else:
            stack.pop()
    if stack:
        return False
    else:
        return True
s = input("Enter String : ")
res = isValidParanthesis(s)
print(res)