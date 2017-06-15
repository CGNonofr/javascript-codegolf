var fs = require('fs');
var colors = require('colors');
var params = require('minimist')(process.argv.slice(2));
var maxCharCount = +params.c || null;

var useFeature = (params.u && params.u.split(',')) || [];
var dontUseFeature = (params.d && params.d.split(',')) || [];

var testcases = {
	5874610: 4,
	456456748962777: 6,
	156748627498: 4,
	4518571864857486562: 9
};

var features = {
	map: {
		check: function(cb) {
			var _map = Array.prototype.map;
			Array.prototype.map = function() {
				cb();
				return _map.apply(this, arguments);
			};
		}		
	},
	reduce: {
		check: function(cb) {
			var _reduce = Array.prototype.reduce;
			Array.prototype.reduce = function() {
				cb();
				return _reduce.apply(this, arguments);
			};
		}		
	}
};

fs.readFile('exercise.js', 'utf8', function(err, data) {
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
		var unusedFeatures = useFeature.slice(0);
		var wrongFeatures = [];
		useFeature.forEach(function(feat) {
			if (features[feat]) {
				features[feat].check(() => {
					var index = useFeature.indexOf(feat);
					if (index >= 0) {
						useFeature.splice(index, 1);
					}
				});
			}
		});
		dontUseFeature.forEach(function(feat) {
			if (features[feat]) {
				features[feat].check(() => {
					var index = wrongFeatures.indexOf(feat);
					if (index < 0) {
						wrongFeatures.push(feat);
					}
				});
			}
		});
		console.log(feat, wrongFeatures);
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

		var charCount = data.length;

		if (charCount > maxCharCount) {
			console.log(`You must remove ${charCount - maxCharCount} more character`);
			success = false;
		}
		console.log(`TECHIO> success ${success}`)
	});

});
