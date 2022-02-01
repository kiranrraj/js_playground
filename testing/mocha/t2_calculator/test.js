const calculator = require('./calculator');
let assert = require('assert');

describe('Calculator Tests', function() {
	describe('Addition Tests', function() {
		it('4 + 5 = 9', function(done) {
			assert.equal(calculator.add(4, 5), 9);
			done();
		});

		it('10 + 11 = 21', function(done) {
			assert.equal(calculator.add(10, 11), 21);
			done();
		});
	});

    describe('Subtraction Tests', function() {
		it('14 - 5 = 9', function(done) {
			assert.equal(calculator.subtract(14, 5), 9);
			done();
		});

		it('100 + 10 = 90', function(done) {
			assert.equal(calculator.subtract(100, 10), 90);
			done();
		});
	});

	describe('Multiplication Tests', function() {
		it('2 * 2 = 4', function(done) {
			assert.equal(calculator.multiply(2, 2), 4);
			done();
		});

		it('0 * 10 = 0', function(done) {
			assert.equal(calculator.multiply(0, 10), 0);
			done();
		});
	});

    describe('Division Tests', function() {
		it('2 / 2 = 1', function(done) {
			assert.equal(calculator.divide(2, 2), 1);
			done();
		});

		it('100 / 10 = 10', function(done) {
			assert.equal(calculator.divide(100, 10), 10);
			done();
		});
	});
});