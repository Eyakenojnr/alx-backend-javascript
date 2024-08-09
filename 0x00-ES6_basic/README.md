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

### [`4-rest-parameter.js`]()
Modified the function below to return the number of arguments passed to it using rest parameter syntax
```
export default function returnHowManyArguments() {

}
```
E.g:
```
> returnHowManyArguments("Hello", "Holberton", 2020);
3
>
```

### [`5-spread-operator.js`]()
Used spread syntax to concatenate 2 arrays and each character of a string by modifying the function below.
```
export default function concatArrays(array1, array2, string) {
}
```

### [`6-string-interpolation.js`]()
Rewrote the return statement to use a template literal.
```
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
```

### [`7-getBudgetObject.js`]()
Since the keys and variable names are the same, the function is modified to use the keyname instead.
```
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}
```

### [`8-getBudgetCurrentYear.js`]()
Modified the `getBudgetForCurrentYear` function to use ES6 computed property names on the `budget` object.
```
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
```

### [`9-getFullBudget.js`]()
Rewrote `getFullBudgetObject` to use ES6 method properties in the `fullBudget` object
```
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
```

### [`10-loops.ja`]()
Rewrote the function below to use ES6 `for...of` operator
```
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
```

### [`11-createEmployeesObject.js`]()
Function `createEmployeessObject` that receives two arguments:
- `departmentName` (String)
- `employees` (Array of Strings)
And returns an object with the format:
```
{
     $departmentName: [
          $employees,
     ],
}
```

### [`12-createReportObject.js`]()
Function `createReportObject` whose parameter `employeesList` is the return value of previous function `createEmployeesObject`.

`createReportObject` returns an object containing the key `allEmployees` and a method property `getNumberOfDepartments`.

`allEmployees` is a key that maps to an object containing the department name and a list of all employees in that department.

The method property receives `employeesList` and returns the number of departments.
```
{
  allEmployees: {
     engineering: [
          'John Doe',
          'Guillaume Salva',
     ],
  },
};
```

### [`100-createIteratorObject.js`]()
`createIteratorObject` function takes as argument a report Object created with previous function `createReportObject`.
This function returns an iterator that goes through every employee in every department.

### [`101-iterateThroughObject.js`]()
Function `iterateThroughObject` whose parameter `reportWithIterator` is the return value from `createIteratorObject`.
