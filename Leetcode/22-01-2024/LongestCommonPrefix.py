def longestCommonPrefix(strs):
    ans = ""
    s = sorted(strs)
    first = s[0]
    last = s[-1]
    for i in range(min(len(first),len(last))):
        if first[i] != last[i]:
            return ans
        ans += first[i]
    return ans
n = int(input("Enter number of Strings : "))
print("Enter Strings : ")
strs = []
for i in range(n):
    inputs = input()
    strs.append(inputs)
res = longestCommonPrefix(strs)
print("Longest Common Prefix : ",res)