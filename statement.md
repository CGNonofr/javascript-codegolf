This hands-on is a step by step example to improve your skills at Code Golfing in Javascript.
Few common tricks are shared here but it does not introduce all the tips you can find on the web.
BTW, the source code is on GitHub, please feel free to come up with proposals to improve it!

## Using Array.prototype.reduce()
The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

This loop:
```javascript
var sum = 0;
for (var i = 0 ; i < splitted.length ; ++i) {
	sum += parseInt(splitted[i]);
}
```
 
can be shortened using :
```javascript
var sum = splitted.reduce(function(a, b) {
	return a + b;
});
```

@[Try to apply the reduce in the code beside]({command: 'node main.js -c 230 -u reduce', stubs: ['exercise.js'], layout: 'aside'})
@[Use map to parse]({command: 'node main.js -c 260 -u map,reduce', stubs: ['exercise.js'], layout: 'aside'})
@[Use lambda]({command: 'node main.js -c 210 -u lambda', stubs: ['exercise.js'], layout: 'aside'})
@[Short parsing]({command: 'node main.js -c 196', stubs: ['exercise.js'], layout: 'aside'})
@[Templates]({command: 'node main.js -c 194', stubs: ['exercise.js'], layout: 'aside'})
@[Remove '{}', use comma]({command: 'node main.js -c 190', stubs: ['exercise.js'], layout: 'aside'})
@[For instead of while]({command: 'node main.js -c 190 -u for', stubs: ['exercise.js'], layout: 'aside'})
@[Remove intermediate var]({command: 'node main.js -c 160', stubs: ['exercise.js'], layout: 'aside'})
@[Re-use parameter]({command: 'node main.js -c 135', stubs: ['exercise.js'], layout: 'aside'})
@[Remove map using short parsing]({command: 'node main.js -c 120', stubs: ['exercise.js'], layout: 'aside'})
@[Use eval]({command: 'node main.js -c 110', stubs: ['exercise.js'], layout: 'aside'})
@[Remove useless chars]({command: 'node main.js -c 75', stubs: ['exercise.js'], layout: 'aside'})
