## Chapter 01 - Problem 33. BigINteger to a primitive type

## Description:

Write a program that extracts the primitive type value from the given
**BigInteger\***

# Note:

JavaScript has primitive data types, but it doesn't have data types with specific names like `long`, `int`, `double`, `char`, or `float` as in other programming languages. The primitive data types in JavaScript are:

- `number`: to represent numbers, either integers or floating-point numbers.
- `string`: to represent text strings.
- `boolean`: to represent boolean values, that is, true or false.
- `null`: to represent the intentional absence of any object.
- `undefined`: to represent the absence of a defined value.
- `symbol`: to represent unique and immutable values that can be used as object keys.

So...

The expresion

```javascript
const longVeryLongNumber = Number.MAX_VALUE;
console.log(longVeryLongNumber); //output: 1.7976931348623157e+308
```

By the way, this number `1.7976931348623157e+308` without scientific notation is:

```
179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368
```

It's interesting, right?

_<strong>Credits:</strong> Exercise taken from the book <strong>`Java Coding Problems`</strong> by author <strong>`Anghel Leonard` (Packt)</strong>, Chapter 01, Problem 33_
