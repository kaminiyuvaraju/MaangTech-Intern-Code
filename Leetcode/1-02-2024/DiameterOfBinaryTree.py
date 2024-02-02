# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        res = [0]
        def diameterOpt(root):
            if root is None:
                return -1
            lh = diameterOpt(root.left)
            rh = diameterOpt(root.right)
            res[0] = max(res[0],2+lh+rh)
            return 1+max(lh,rh)
        diameterOpt(root)
        return res[0]
