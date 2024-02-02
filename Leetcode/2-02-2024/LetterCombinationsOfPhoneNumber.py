class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        digitToChar = {
            '2' : 'abc',
            '3' : 'def',
            '4' : 'ghi',
            '5' : 'jkl',
            '6' : 'mno',
            '7' : 'pqrs',
            '8' : 'tuv',
            '9' : 'wxyz'
        }
        res = []
        def backTrack(i,curStr):
            if len(digits) == len(curStr):
                res.append(curStr)
                return
            for c in digitToChar[digits[i]]:
                backTrack(i+1,curStr+c)
        if digits:
            backTrack(0,"")
        return res