## Chapter 01 - Problem 26. Sum two large int/long and operation overflow

## Description:

Write a program that sums two large **int**/**long** and throws an **ArithmeticException** in case of operation overflow.

NOTE: In `Java`, the max value is `Long.MAX_VALUE`, long: The long data type is a 64-bit signed two's complement integer. It has a minimum value of `-9,223,372,036,854,775,808` and a maximum value of `9,223,372,036,854,775,807` (inclusive).

NOTE 2: In `JavaScript`, the max value is `Number.MAX_VALUE` = `1.7976931348623157e+308`;
The min value is `Number.MIN_VALUE` = `5e-324`

<table>
  <tr>
  <th> Min Value </th> <th> Max Value </th>
  </tr>
  <tr>
    <td>

```javascript
Number.MIN_VALUE; // 5e-324
```
  </td>
<td>

```javascript
Number.MAX_VALUE; // 1.7976931348623157e+308
```
  </td>
  </tr>



<!-- -->
<tr>
<td>


```javascript
Number.MIN_SAFE_INTEGER; // -9007199254740991
```
</td>
<td>

```javascript
Number.MAX_SAFE_INTEGER; // 9007199254740991
```
</td>
</tr>
<!-- -->

</table>



_<strong>Credits:</strong> Exercise taken from the book <strong>'Java Coding Problems'</strong> by author <strong>'Anghel Leonard' (Packt)</strong>, Chapter 01, Problem 26_