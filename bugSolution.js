function foo(a, b) {
  a = a === null ? 0 : a; // Assign default value of 0 if a is null
  b = b === null ? 0 : b; // Assign default value of 0 if b is null
  return a + b; 
}
console.log(foo(1, null)); // Output: 1
console.log(foo(null, 2)); // Output: 2
console.log(foo(null, null)); //Output: 0