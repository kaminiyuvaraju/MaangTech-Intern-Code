from typing import List

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # Create a dictionary to represent the graph
        graph = {i: [] for i in range(numCourses)}
        for prerequisite in prerequisites:
            course, prereq = prerequisite
            graph[course].append(prereq)

        # Create a set to keep track of visited nodes during DFS
        visited = set()

        # Create a set to keep track of nodes in the current DFS path
        path = set()

        # Helper function for DFS
        def dfs(course):
            # If we encounter a node that is already in the current DFS path, it means there is a cycle
            if course in path:
                return False

            # If the node is already visited, no need to traverse again
            if course in visited:
                return True
            
            # Mark the current node as visited and add to the current DFS path
            visited.add(course)
            path.add(course)

            # Recursively visit all neighbors
            for neighbor in graph[course]:
                if not dfs(neighbor):
                    return False

            # Remove the course from the current DFS path when backtracking
            path.remove(course)

            return True

        # Perform DFS for each course
        for course in range(numCourses):
            if not dfs(course):
                return False

        # If DFS for all courses completes without detecting a cycle, return True
        return True
