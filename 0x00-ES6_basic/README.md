# 0x00. ES6 Basics
## Concepts
This concept was looked at for this project:
* [Software Linter](https://intranet.alxswe.com/concepts/542)

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230214%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230214T054129Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c1c5406d6c0881453984c0320394bd7fda34b057975860b3ceded9c34aac689b)

## Resources
* [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
* [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
* [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
* [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4?gi=6ab07602cee1)

## Objectives
- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Tasks
### [`0-constants.js`]()
Modified
* `taskFirst` function to instantiate variables using `const`
* `taskNext` function to instantiate variables using `let`

### [`1-block-scoped.js`]()
Modified variables in `taskBlock` function so that variables aren't overwritten inside the conditional block.

### [`2-arrow.js`]()
Rewrote the standard function below to use ES6's arrow syntax on the function `add`
```
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```

### [`3-default-parameter.js`]()
Condensed internals of the function below to 1 line - without changing the name of each function/variable
```
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```

### []()
