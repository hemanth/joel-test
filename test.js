'use strict';
var assert = require('assert');
var inquirer = ((m) => (m && m.default) ? m.default : m)(require('inquirer'));
var joelTest = require('./');

it('should give a score.', function (done) {
  var orig = inquirer.prompt;
  inquirer.prompt = function (questions, cb) {
    var answers = { jt0: true, jt1: false };
    if (typeof cb === 'function') return cb(answers);
    return Promise.resolve(answers);
  };
  joelTest(function (score) {
    inquirer.prompt = orig;
    assert.equal(score, 1);
    done();
  });
});
