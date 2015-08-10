'use strict';
var inquirer = require('inquirer');

module.exports = function (cb) {

	var questions = function(){/*
Do you use source control?
Can you make a build in one step?
Do you make daily builds?
Do you have a bug database?
Do you fix bugs before writing new code?
Do you have an up-to-date schedule?
Do you have a spec?
Do programmers have quiet working conditions?
Do you use the best tools money can buy?
Do you have testers?
Do new candidates write code during their interview?
Do you do hallway usability testing?
	*/}.toString().slice(14,-3).split('?\n').map( function ( v, i, a ) {
	    if (i < 12) { // Fix this later.
				  return {
						name: 'jt' + i,
						message: (v + " ?").replace('\n',''),
						type: 'confirm'
					}
			}
   }).filter( function (v, i, a) { return !!v; })

	inquirer.prompt(questions, function( answers ) {
		var score = Object.keys( answers ).map( function( key ) {
			return answers[key]
		}).reduce( function (n1, n2) {
			return n1 + n2;
		},0);
		return cb(score);
	});
};
