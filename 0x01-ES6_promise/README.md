# 0x01. ES6 Promises
## Resources
* [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [JavaScript Promise: An introduction](https://web.dev/promises/)
* [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
* [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
* [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
## Learning Objectives
* Promises (how, why, and what)
* How to use the `then`, `resolve`, `catch` methods
* How to use every method of the Promise object
* Throw / Try
* The await operator
* How to use an `async` function
## Setup
### Installing NodeJS 12.11.x
(in home directory):
```
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
```
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```
### Installing Jest, Babel, and ESLint
in project directory:
* Installing Jest: `npm install --save-dev jest`
* Installing Babel: `npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli`
* Installing ESLint: `npm install --save-dev eslint`
## Files
`package.json`

Click to show/hide contents

`babel.config.js`

Click to show/hide contents

`utils.js`

Used with tasks requiring `uploadPhoto` and `createUser`.

Click to show/hide file contents

`.eslintrc.js`

Click to show/hide contents
### and...
Don't forget to run `$ npm install` when you have the `package.json`
## Response Data Format
`uploadPhoto` returns a response with the format
```
{
  status: 200,
  body: 'photo-profile-1',
}
```
`createUser` returns a response with the format
```
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```

## Tasks
### 0. Keep every promise you make and only make promises you can keep
Returns a Promise using this prototype function `getResponseFromAPI()`
```
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ 
```
### 1. Don't make a promise...if you know you can't keep it
Returns a `promise` using the prototype below. The parameter is a `boolean`.
```
getFullResponseFromAPI(success)
```
When the argument is:
* `true`
	- the promise is resolved by passing an object with 2 attributes:
		* `status`: `200`
            	* `body`: `'Success'`
* `false`
	- the promise is rejected with an error object with the message `The fake API is not working currently`
```
bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));

bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ 
```
