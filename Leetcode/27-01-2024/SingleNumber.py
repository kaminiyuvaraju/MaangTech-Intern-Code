class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        unique_sum = sum(set(nums))
        return 2 * unique_sum - sum(nums)