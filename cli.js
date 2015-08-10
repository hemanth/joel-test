#!/usr/bin/env node
'use strict';
var meow = require('meow');
var chalk = require('chalk');
var shout = chalk.bold.red;
var say = chalk.bold.blue;
var joelTest = require('./');
var cli = meow({
	help: [
		'Usage',
		'  $ joel-test',
		''
	]
});
var msgs = {
	12: '\nPerfect 12! You are doing great.\n',
	11: '\nYou score is in a tolerable range.\n'
};

joelTest(function( score ){
		if ( msgs.hasOwnProperty(score) ) {
			console.log( say("\nYour score is:",score,msgs[score]) );
		} else {
			console.log(shout("\nYour score is:",score,"\nYou've got serious problems!"));
		}
});
