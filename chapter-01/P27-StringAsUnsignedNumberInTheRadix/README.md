
## Chapter 01 -  Problem 27. String as an unsigned number in the radix

## Description:

(in JavaScript)

```javascript
const str = "FFA1B";
const radix = 16;
const num = parseInt(str, radix);
console.log(num); // Output: 1042667
```
In this example, we have a string `str` that represents an unsigned number in hexadecimal (base-16) format. We want to parse this string into a number using the `parseInt()` function in JavaScript, passing the `radix` (in this case, 16) as the second parameter to specify the base of the number system.

The `parseInt()` function returns the parsed number in base-10 (decimal) format. In this example, the output is `1042667`.

