def twoSum(nums,n,target):
    dic = {}
    for i in range(n):
        diff = target - nums[i]
        if diff in dic:
            return [dic[diff],i]
        dic[nums[i]] = i
    return []

nums = []
n = int(input("Enter Number of Values : "))
print("Enter Values : ")
for i in range(n):
    inputs = int(input())
    nums.append(inputs)
target = int(input("Enter Target Value : "))
res = twoSum(nums,n,target)
print(res)