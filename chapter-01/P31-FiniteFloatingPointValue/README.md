
## Chapter 01 -  Problem 31. Float is a finite floating-pint value

## Description:

Write a program that determines if the given **double**/**float** value is a finite floating-point value.

<table>
  <tr>
    <th> Input </th> <th> Result </th>
  </tr>
  <tr>
    <td>

```javascript
const num = 2.3
```
  </td>
<td>

```javascript
true; // output: 2.3 true
```
  </td>
  </tr>



<!-- -->
<tr>
<td>


```javascript
const num = 2/0
```
</td>
<td>

```javascript
false; // output:Infinity false
```
</td>
</tr>
<!-- -->
<tr>
<td>


```javascript
const num = 0/0
```
</td>
<td>

```javascript
false; // output: NaN false
```
</td>
</tr>

</table>

_<strong>Credits:</strong> Exercise taken from the book <strong>'Java Coding Problems'</strong> by author <strong>'Anghel Leonard' (Packt)</strong>, Chapter 01, Problem 31_
