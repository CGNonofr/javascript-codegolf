This hands-on is a step by step example to improve your skills at Code Golfing in Javascript.
Few common tricks are shared here but it does not introduce all the tips you can find on the web.
BTW, the source code is on GitHub, please feel free to come up with proposals to improve it!

# Using Array.prototype.map() and Array.prototype.reduce()
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
 
can be replaced by :
```javascript
result = splitted.map(function(str) {
	return parseInt(str);
}).reduce(function(a, b) {
	return a + b;
});
```

@[Try to use the map/reduce in the code beside]({command: 'node main.js -c 260 -u map,reduce', stubs: ['exercise.js'], layout: 'aside'})

This code is no shorter, but let's see if we can improve!

# Using Arrow functions

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
```

@[Try to use the arrow function in the code beside]({command: 'node main.js -c 210 -u lambda', stubs: ['exercise.js'], layout: 'aside'})

# Using Short parsing

Instead of using `parseInt`, we can simply use the `+` operator, which cast string to integer
```javascript
return parseInt(str);
```
can be shortened using
```javascript
return +str;
```

We can also use this trick to do the opposite
```javascript
result.toString()
```
can be shortened using
```javascript
(''+result)
```

@[Try to use the short parsing in the code beside]({command: 'node main.js -c 196', stubs: ['exercise.js'], layout: 'aside'})

# Template literals

[Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) aim to simplify string formating.

A more advanced form of it is **tagged** template literals. A parsing function can be provided for a template.

This mechanism can be used to shorten functions taking a string as only parameter by using them as a parsing function.

```javascript
array.split('')
```
can be shortened using
```javascript
array.split``
```

@[Try to use this trick in the code beside]({command: 'node main.js -c 194', stubs: ['exercise.js'], layout: 'aside'})

# Curly braces removal

When there is more than 1 instruction in a `while` block, `{}` are needed.

There is an alternative: we can remove them, and replace every semi-colon (except the last one) with a comma.

```javascript
while(cond) {
	a();
	b();
}
```
can be shortened using
```javascript
while(cond)
	a(),
	b();
```

@[Try to remove curly braces in the code beside]({command: 'node main.js -c 190', stubs: ['exercise.js'], layout: 'aside'})

# Always for instead of while

A `while` can always be replaced by an equivalent `for` loop.
To do so, we need to add 2 semi-colon, but the keyword is 2 chars smaller.

The fact is we can now use the initialization and the incrementation part without adding any whitespace of semi-colon:

```javascript
init()
while(cond) fct();
```
can be replaced using
```javascript
init()
for(;cond;) fct();
```
then:
```javascript
for(init();cond;) fct();
```

We don't have any instruction to put in the initialization part of the `for` in our code, but there is no reason to not use `for` instead of `while`.

@[Try to the while by a for loop in the code beside]({command: 'node main.js -c 190 -u for', stubs: ['exercise.js'], layout: 'aside'})

# Remove intermediate variable

Spoiler: the code is going to become ugly

Variable declaration are verboses, we need to remove them. The code will be less readable, but much more shorter

```javascript
var variable = a();
return variable.b();
```
can obviously be replaced by
```javascript
return a().b();
```

We can also re-use the function parameter instead of declaring a new variable

@[Remove the intermediate variables in the code beside]({command: 'node main.js -c 135', stubs: ['exercise.js'], layout: 'aside'})

# Short syntax means redondancy is not a big deal

Now we are able to parse with a short syntax, we do not need to use the map before the reduce
```javascript
array.map(a => +a).reduce((a, b) => return a + b)
```

```javascript
array.reduce((a, b) => return +a + +b)
```

@[Try to apply this trick in the code beside]({command: 'node main.js -c 120', stubs: ['exercise.js'], layout: 'aside'})

# Use the `eval` function

This trick is ...tricky. To sum all values of an array, we use a verbose syntax implying a `reduce`.
The alternative is to generate an expression, inserting a `+` between each digit, then evaluating it.

`54879` become `5+4+8+7+9` which evaluate to `33`

```javascript
str.split``.reduce((a,b)=> +a + +b)
```
can be shortened using
```javascript
eval(str.split``.join`+`)
```

@[Try to use eval in the code beside]({command: 'node main.js -c 110', stubs: ['exercise.js'], layout: 'aside'})

# Minification

At the end, we can remove all useless chars:
- whitespaces
- semi-colons

@[Remove useless chars]({command: 'node main.js -c 75', stubs: ['exercise.js'], layout: 'aside'})
