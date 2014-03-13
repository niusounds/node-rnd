const LETTERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const IDX_0 = LETTERS.indexOf('0');
const IDX_9 = LETTERS.indexOf('9');
const IDX_a = LETTERS.indexOf('a');
const IDX_z = LETTERS.indexOf('z');
const IDX_A = LETTERS.indexOf('A');
const IDX_Z = LETTERS.indexOf('Z');

function keysGen(len, min, max, count) {
	if (Math.pow(max - min + 1, len) < count) {
		throw 'Illegal argument len : ' + len + ', count : ' + count + ' causes endless loop.';
	}

	var tmp = {
		/* generatedKey0 : 1,
		 * generatedKey1 : 1,
		 * generatedKey2 : 1,
		 * generatedKey3 : 1,
		 * ...
		 * generatedKey[count-1] : 1
		 */
	};
	for (var i = 0; i < count; i++) {
		tmp[keyGen(len, min, max)] = 1;
	}

	while (Object.keys(tmp).length < count) {
		tmp[keyGen(len, min, max)] = 1;
	}

	return Object.keys(tmp);
}

function keyGen(len, min, max) {
	var tmp = [];
	for (var i = 0; i < len; i++) {
		tmp.push(next(min, max));
	}
	return tmp.join('');
}

function next(min, max) {
	var diff = max - min + 1;
	var idx = Math.floor(Math.random() * diff) + min;
	return LETTERS[idx];
}

module.exports = {
	alphas : function(len, count) {
		return keysGen(len, IDX_a, IDX_Z, count);
	},
	alphasS : function(len, count) {
		return keysGen(len, IDX_a, IDX_z, count);
	},
	alphasL : function(len, count) {
		return keysGen(len, IDX_A, IDX_Z, count);
	},
	numAlphas : function(len, count) {
		return keysGen(len, IDX_0, IDX_Z, count);
	},
	nums : function(len, count) {
		return keysGen(len, IDX_0, IDX_9, count);
	},
	keysGen : keysGen,
	keyGen : keyGen
};
