from typing import List

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        result = []

        def backtrack(path, remaining):
            if not remaining:
                result.append(path[:])
                return

            for i in range(len(remaining)):
                num = remaining[i]
                new_path = path + [num]
                new_remaining = remaining[:i] + remaining[i+1:]
                backtrack(new_path, new_remaining)

        backtrack([], nums)
        return result
