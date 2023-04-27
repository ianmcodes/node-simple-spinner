/***********
 * Spinner *
 ***********/
const cursor = require('ansi')(process.stdout);
const spinner = (function () {
	let sequence = ['||', '/', '-', '\\'];
	let sequenceText;
	let index = 0;
	let timer;
	let opts = {};

	function start(inv = 250, options = {}) {
		opts = { hideCursor: false, doNotBlock: false, text: '', ...options };

		if (opts.hideCursor) cursor.hide();

		sequenceText = addTextSequence();

		index = 0;
		process.stdout.write(sequenceText[index]);

		timer = setInterval(function () {
			clearLine();
			index = index < sequenceText.length - 1 ? index + 1 : 0;
			process.stdout.write(sequenceText[index]);
		}, inv);

		if (opts.doNotBlock) timer.unref();
	}

	function stop() {
		clearInterval(timer);

		if (opts.hideCursor) {
			cursor.show();
		}

		clearLine();
	}

	function changeSequence(seq) {
		if (Array.isArray(seq)) {
			sequence = seq;
			sequenceText = addTextSequence();
		} else {
			throw new Error('Sequence must be an array');
		}
	}

	function clearLine() {
		process.stdout.write(sequenceText[index].replace(/./g, '\b'));
		process.stdout.clearLine();
	}

	function addTextSequence() {
		return opts.text ? sequence.map((character) => character + ' ' + opts.text) : sequence;
	}

	return {
		start,
		stop,
		changeSequence,
	};
})();

module.exports = spinner;
