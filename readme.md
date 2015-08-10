# joel-test

> [joel-test](http://www.joelonsoftware.com/articles/fog0000000043.html) rate the quality of a software team!

![joel-test](./joel-test.gif)

__Ask you the below questions and says how well you scored on the test with a message.__

* Do you use source control?

* Can you make a build in one step?

* Do you make daily builds?

* Do you have a bug database?

* Do you fix bugs before writing new code?

* Do you have an up-to-date schedule?

* Do you have a spec?

* Do programmers have quiet working conditions?

* Do you use the best tools money can buy?

* Do you have testers?

* Do new candidates write code during their interview?

* Do you do hallway usability testing?

P.S: The above are 12 Steps to Better Code as per Joel Spolsky.

A score of 12 is perfect, 11 is tolerable, but 10 or lower and you've got serious problems.

## Install

```
$ npm install --save joel-test
```


## Usage

```js
var joelTest = require('joel-test');

joelTest( function(score) {
	console.log(score); // 0-12
});
```


## CLI

```
$ npm install --global joel-test
```

```
$ joel-test
```

## License

MIT © [Hemanth.HM](http://h3manth.com)
