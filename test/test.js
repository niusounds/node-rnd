var rnd = require('../lib/rnd'), assert = require('assert');

describe('rnd', function() {
	it('should generate random alphabets', function() {
		var generated = rnd.alphas(10, 1);
		assert.equal(generated.length, 1);
		generated.forEach(function(str) {
			assert.equal(str.length, 10);
			assert.ok(/[a-zA-Z]/.test(str));
		});
	});

	it('should generate random alphabets only lower cases', function() {
		var generated = rnd.alphasS(10, 3);
		assert.equal(generated.length, 3);
		generated.forEach(function(str) {
			assert.equal(str.length, 10);
			assert.ok(/[a-z]/.test(str));
		});
	});

	it('should generate random alphabets only upper cases', function() {
		var generated = rnd.alphasL(10, 10);
		assert.equal(generated.length, 10);
		generated.forEach(function(str) {
			assert.equal(str.length, 10);
			assert.ok(/[A-Z]/.test(str));
		});
	});

	it('should generate random alphabets and numbers', function() {
		var generated = rnd.numAlphas(5, 5);
		assert.equal(generated.length, 5);
		generated.forEach(function(str) {
			assert.equal(str.length, 5);
			assert.ok(/[a-zA-Z0-9]/.test(str));
		});
	});

	it('should generate random numbers', function() {
		var generated = rnd.nums(5, 5);
		assert.equal(generated.length, 5);
		generated.forEach(function(str) {
			assert.equal(str.length, 5);
			assert.ok(/[0-9]/.test(str));
		});
	});

	it('should throw error when cannot generate too much keys', function() {
		assert.throws(function() {
			// cannot generate 101 unique strings from 2 digit numbers.
			rnd.nums(2, 101);
		});
	});
});
