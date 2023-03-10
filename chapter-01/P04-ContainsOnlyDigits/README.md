
## Chapter 01 -  Problem 04. Contains Only Digits

## Description:
The goal is to create a program that checks whether a given string consists entirely of digits. This can be accomplished by using a regular expression pattern to match the string against a set of characters representing digits. In JavaScript, the regular expression pattern for matching digits is [0-9]. We can use the test() method of the RegExp object to check if the string matches the pattern, which will return a boolean value of true if it does and false if it doesn't. The resulting program should take a string as input and output a boolean value indicating whether it contains only digits or not.

<table>
  <tr>
    <th> Input </th> <th> Result </th>
  </tr>
  <tr>
    <td>

```javascript
  const input = '12365';
```
  </td>
<td>

```javascript
true
```
  </td>
  </tr>



<tr>
<td>


```javascript
const input = "1451a"
```
</td>
<td>

```javascript
false
```
</td>
</tr>


</table>

_<strong>Credits:</strong> Exercise taken from the book <strong>'Java Coding Problems'</strong> by author <strong>'Anghel Leonard' (Packt)</strong>, Chapter 01, Problem 04._
