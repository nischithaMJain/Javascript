let a = 10;
let b = 20;

//ES6
[a, b] = [b, a]
console.log([a, b], "ES6")

//Using Arithmetic Operators 
a = a + b;//30
b = a - b;//30-20=10
a = a - b;//30-10=20
console.log([a, b], "Arithmetic Operator")

// Bitwise XOR
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log([a, b], "Bitwise XOR")
