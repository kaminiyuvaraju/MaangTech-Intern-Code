class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum = nums[0]
        res = nums[0]
        for i in nums[1:]:
            maxSum = max(maxSum + i,i)
            res =  max(res,maxSum)
        return res
