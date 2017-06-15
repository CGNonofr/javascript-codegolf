function compute(number) {
	var result = number;
	while(result > 9) {
		var splitted = result.toString().split('');
		var sum = 0;
		for (var i = 0 ; i < splitted.length ; ++i) {
			sum += parseInt(splitted[i]);
		}
		result = sum;
	}
	return result;
}

module.exports = compute