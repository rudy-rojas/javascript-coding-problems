# Convert to a number by an unsigned conversion
Write a program that converts the given **int** to a **long** by an unsigned conversion.


NOTE: Certainly! In JavaScript, we don't have the concept of signed and unsigned integers like some other programming languages, but we can still simulate unsigned integer conversion using bitwise operators.

Here's an example program that converts a given integer to a long by simulating unsigned conversion:

```javascript
let num = -1;
let uint32 = num >>> 0; // use bitwise operator to simulate unsigned conversion
console.log(uint32); // Output: 4294967295
```

In this example, we have an integer num with a value of -10. We can simulate unsigned conversion to a long by using the bitwise operator >>> with a value of 0n, which represents a BigInt value of 0.

The resulting long variable contains the converted value, which is a BigInt value of 18446744073709551606n in this case.

Note that the resulting value is represented as a BigInt value, which is a special type of numeric value in JavaScript that can represent arbitrarily large integers.
