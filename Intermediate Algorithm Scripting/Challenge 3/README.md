# Seek and Destroy

You will be provided with an initial array as the first argument to the `destroyer` function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the `arguments` object.

## Assertion Tests
- `destroyer([1, 2, 3, 1, 2, 3], 2, 3)` should return `[1, 1]`.
- `destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)` should return `[1, 5, 1]`.
- `destroyer([3, 5, 1, 2, 2], 2, 3, 5)` should return `[1]`.
- `destroyer([2, 3, 2, 3], 2, 3)` should return `[]`.
- `destroyer(["tree", "hamburger", 53], "tree", 53)` should return `["hamburger"]`.
- `destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")` should return `[12,92,65]`.
