class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if not matrix or not matrix[0]:
            return False
        rows,cols = len(matrix),len(matrix[0])
        low,high = 0,rows * cols - 1
        while low <= high:
            mid = (low + high)//2
            mid_element = matrix[mid // cols][mid % cols]
            if mid_element == target:
                return True
            elif mid_element < target:
                low = mid + 1
            else:
                high = mid - 1
        return False