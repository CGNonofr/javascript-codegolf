var fs = require('fs');
var colors = require('colors');
var params = require('minimist')(process.argv.slice(2));
var maxCharCount = +params.c || null;

var testcases = {
	5874610: 4,
	456456748962777: 6,
	156748627498: 4,
	4518571864857486562: 9
};

fs.readFile('exercise.js', 'utf8', function(err, data) {
	console.log(data);
	fs.writeFile('exercise.js', data + "\nmodule.exports = compute", function(err) {
		var userFct;
		try {
			userFct = require('./exercise.js');
		} catch(error) {
			if (error instanceof SyntaxError) {
				console.log(error.stack.split('\n').slice(0, 3).join('\n'));
			} else if (error instanceof ReferenceError) {
				if(error.message === 'compute is not defined') {
					console.error('Do not rename or delete the `compute` function');
				} else {
					console.log(error);
				}
			} else {
				console.log(error);
			}
			console.log(`TECHIO> success false`);
			return;
		}
		try {
			var success = true;
			for(var testcase in testcases) {
				var result = userFct(testcase);
				var expected = testcases[testcase];
				var right = result === expected;
				success = success && (right);
				console.log(`${testcase} - Expected: ${expected}, Found: ${result} ${right ? 'SUCCESS'.green : 'FAIL'.red}`);
			}
		} catch(error) {
			console.log(error.stack.split('\n').slice(0, -2).join('\n'));			
		}
		console.log(`TECHIO> success ${success}`)
	});

});
