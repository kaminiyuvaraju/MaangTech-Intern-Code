class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        ans = ""
        s = sorted(strs)
        first = s[0]
        last = s[-1]
        for i in range(min(len(first),len(last))):
            if first[i] != last[i]:
                return ans
            ans += first[i]
        return ans