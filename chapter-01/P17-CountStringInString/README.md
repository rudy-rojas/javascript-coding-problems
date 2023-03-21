## Chapter 01 - Problem 17. Count string in another string

## Description:

The task at hand is to write a program that can count how many times a specified string appears within another specified string.
Note: This requires the program to search through the second string, looking for occurrences of the first string, and keeping track of how many times it finds a match. By completing this task, the program can provide a useful tool for users who need to know how many times a particular word or phrase appears in a given text.

<table>
  <tr>
    <th> Input </th> <th> Result </th>
  </tr>
  <tr>
    <td>

```javascript
const str =
  'All we have to decide is what to do with the time that is given us.';
const search = 'is';
```

  </td>
<td>

```javascript
2
```

  </td>
  </tr>

<!-- -->
<tr>
<td>

```javascript
const str =
  'The syntax of the JavaScript language is structured around ' +
  ' the use of the curly brace { } notation, which defines the beginning and' +
  ' end of code blocks, as well as the use of the semicolon ; to separate ' +
  'statements within those blocks. The flexibility of the language allows' +
  ' developers to use the same code across different platforms and devices, ' +
  'making it an ideal tool for creating responsive and interactive ' +
  'web applications that can be accessed by the widest possible audience.';
const search = 'the';
```

</td>
<td>

```javascript
11
```

</td>
</tr>
<!-- -->
<tr>
<td>

```javascript
const str = 'Cillum do laboris labore ex.';
const search = 'cat';
```

</td>
<td>

```javascript
0
```

</table>

_<strong>Credits:</strong> Exercise taken from the book <strong>'Java Coding Problems'</strong> by author <strong>'Anghel Leonard' (Packt)</strong>, Chapter 01, Problem 17_
