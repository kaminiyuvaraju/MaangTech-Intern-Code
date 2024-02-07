class Solution:
    @staticmethod
    def binSearch(nums,target,leftBias):
            l,r = 0,len(nums)-1
            i = -1
            while l <= r:
                mid = (l+r)//2
                if target > nums[mid]:
                    l = mid + 1
                elif target < nums[mid]:
                    r = mid - 1
                else:
                    i = mid
                    if leftBias:
                        r = mid - 1
                    else:
                        l = mid + 1
            return i
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        left = self.binSearch(nums,target,True)
        right = self.binSearch(nums,target,False)
        return [left,right]
        