## Chapter 01 - Problem 10. Generate permutations

## Description:

Write a program that generates all permutations of a given string.

<table>
  <tr>
    <th> Input </th> <th> Result </th>
  </tr>
  <tr>
    <td>

```javascript
const str = "abc";
```

  </td>
<td>

```javascript
['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
```

  </td>
  </tr>

<tr>
<td>

```javascript
const str = 'Rudy';
```

</td>
<td>

```javascript
    [
      'Rudy', 'Ruyd', 'Rduy',
      'Rdyu', 'Ryud', 'Rydu',
      'uRdy', 'uRyd', 'udRy',
      'udyR', 'uyRd', 'uydR',
      'dRuy', 'dRyu', 'duRy',
      'duyR', 'dyRu', 'dyuR',
      'yRud', 'yRdu', 'yuRd',
      'yudR', 'ydRu', 'yduR'
    ]
```

</td>
</tr>

</table>

_<strong>Credits:</strong> Exercise taken from the book <strong>'Java Coding Problems'</strong> by author <strong>'Anghel Leonard' (Packt)</strong>, Chapter 01, Problem 10_
