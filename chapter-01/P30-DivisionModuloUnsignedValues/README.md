
## Chapter 01 -  Problem 30. Division and modulo of unsigned values

## Description:
Write a program that computes division and modulo of the given unsigned value.

<table>
  <tr>
    <th> Input </th> <th> Result </th>
  </tr>
  <tr>
    <td>

```javascript
const numA = 123; // (unsigned) numA = 123
const numB = -123; // (unsigned) numB= 4294967173
```
  </td>
<td>

```javascript
`
DIVISION:
--------------------------------------
Division signed numA/NumB: -1
Division signed numB/NumA: -1
Division unsigned numA/numB: 0
Division unsigned numB/numA: 34918432 

MODULO:
---------------------------------------
Modulo signed numA/NumB: 0 
Modulo signed numB/NumA: 0
Modulo unsigned numA/numB: 123 
Modulo unsigned numB/numA: 37
` 
```
  </td>
  </tr>



<!-- -->
<tr>
<td>


```javascript
const numA = 10; // (unsigned) numA = 10
const numB = -1; // (unsigned) numB= 4294967295
```
</td>
<td>

```javascript
`
DIVISION:
--------------------------------------
Division signed numA/NumB: -10
Division signed numB/NumA: 0 
Division unsigned numA/numB: 0
Division unsigned numB/numA: 429496729 

MODULO:
---------------------------------------
Modulo signed numA/NumB: 0 
Modulo signed numB/NumA: -1 
Modulo unsigned numA/numB: 10 
Modulo unsigned numB/numA: 5
`
```
</td>
</tr>
<!-- -->
<!-- -->
<tr>
<td>


```javascript
const numA = 10; // (unsigned) numA = 10
const numB = 1; // (unsigned) numB= 1
```
</td>
<td>

```javascript
`
DIVISION:
--------------------------------------
Division signed numA/NumB: 10
Division signed numB/NumA: 0 
Division unsigned numA/numB: 10
Division unsigned numB/numA: 0 

MODULO:
---------------------------------------
Modulo signed numA/NumB: 0 
Modulo signed numB/NumA: 1 
Modulo unsigned numA/numB: 0 
Modulo unsigned numB/numA: 1
`
```
</td>
</tr>
<!-- -->

</table>

_<strong>Credits:</strong> Exercise taken from the book <strong>'Java Coding Problems'</strong> by author <strong>'Anghel Leonard' (Packt)</strong>, Chapter 01, Problem 30
