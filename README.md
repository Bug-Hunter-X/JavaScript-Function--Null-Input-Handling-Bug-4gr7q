# JavaScript Function: Null Input Handling Bug

This repository demonstrates a common bug in JavaScript functions related to handling null or undefined input values.

The `foo` function attempts to add two numbers. However, it returns `null` if either input is `null`, which might be unexpected or lead to errors in other parts of the program.

The `bug.js` file shows the buggy code, while `bugSolution.js` presents an improved version that handles `null` inputs more gracefully.

## Bug Description:
The `foo` function doesn't handle null values as inputs.  This can result in unexpected null returns when the function is called with null parameters.

## Solution:
The solution is to check for null or undefined inputs and handle them appropriately, such as by assigning default values (e.g., 0) or throwing a more informative error message.
