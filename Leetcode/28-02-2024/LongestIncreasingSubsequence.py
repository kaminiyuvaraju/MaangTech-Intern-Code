class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        n = len(nums)
        tail = [nums[0]]
        for i in range(1,n):
            if nums[i] > tail[-1]:
                tail.append(nums[i])
            else:
                c = self.ceilIdx(tail,nums[i])
                tail[c] = nums[i]
        return len(tail)
    def ceilIdx(self,tail,x):
        l = 0
        h = len(tail)-1
        while h > l:
            m = (l+h)//2
            if tail[m] >= x:
                h = m
            else:
                l = m+1
        return h