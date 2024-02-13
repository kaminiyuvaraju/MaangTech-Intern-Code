from typing import List

class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:

        zero_cols = set()
        zero_rows = set()
        
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == 0:
                    zero_rows.add(i)
                    zero_cols.add(j)
        for row in zero_rows:
            for i in range(len(matrix[0])):
                matrix[row][i] = 0
        for col in zero_cols:
            for i in range(len(matrix)):
                matrix[i][col] = 0