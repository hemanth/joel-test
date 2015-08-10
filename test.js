'use strict';
var assert = require('assert');
var joelTest = require('./');

// Need to mock inquirer here.
it('should give a score.', function (done) {
	joelTest( function (score) {
		assert.equal(score, 1);
		done();
	});
});
