This hands-on is a step by step example to improve your skills at Code Golfing in Javascript.
Few common tricks are shared here but it does not introduce all the tips you can find on the web.
BTW, the source code is on GitHub, please feel free to come up with proposals to improve it!

## Using Array.prototype.map() and Array.prototype.reduce()
The [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=example) method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
The [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map?v=example) method creates a new array with the results of calling a provided function on every element in the calling array.

This loop:
```javascript
var sum = 0;
for (var i = 0 ; i < splitted.length ; ++i) {
	sum += parseInt(splitted[i]);
}
result = sum;
```
 
can be shortened using :
```javascript
result = splitted.map(function(str) {
	return parseInt(str);
}).reduce(function(a, b) {
	return parseInt(a) + parseInt(b);
});
```

@[Try to use the map/reduce in the code beside]({command: 'node main.js -c 260 -u map,reduce', stubs: ['exercise.js'], layout: 'aside'})

## Using Arrow functions

the syntax
```javascript
function([params]) {
	return [...]
}
```
is very verbose.
Instead, is [ES6](http://es6-features.org), we can use [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Arrow_functions) to declare them:

This loop:
```javascript
result = splitted.map(function(str) {
	return parseInt(str);
}).reduce(function(a, b) {
	return a + b;
});
```
 
can be shortened using :
```javascript
result = splitted.map(str => parseInt(str)).reduce((a, b) => a + b);
});
```

@[Try to use the arrow function in the code beside]({command: 'node main.js -c 210 -u lambda', stubs: ['exercise.js'], layout: 'aside'})
@[Short parsing]({command: 'node main.js -c 196', stubs: ['exercise.js'], layout: 'aside'})
@[Templates]({command: 'node main.js -c 194', stubs: ['exercise.js'], layout: 'aside'})
@[Remove '{}', use comma]({command: 'node main.js -c 190', stubs: ['exercise.js'], layout: 'aside'})
@[For instead of while]({command: 'node main.js -c 190 -u for', stubs: ['exercise.js'], layout: 'aside'})
@[Remove intermediate var]({command: 'node main.js -c 160', stubs: ['exercise.js'], layout: 'aside'})
@[Re-use parameter]({command: 'node main.js -c 135', stubs: ['exercise.js'], layout: 'aside'})
@[Remove map using short parsing]({command: 'node main.js -c 120', stubs: ['exercise.js'], layout: 'aside'})
@[Use eval]({command: 'node main.js -c 110', stubs: ['exercise.js'], layout: 'aside'})
@[Remove useless chars]({command: 'node main.js -c 75', stubs: ['exercise.js'], layout: 'aside'})
