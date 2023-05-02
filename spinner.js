/***********
 * Spinner *
 ***********/
const cursor = require('ansi')(process.stdout);
const cliSpinners = require('cli-spinners');

const spinner = (function () {
	let sequence;
	let index = 0;
	let timer;
	let opts = {};

	function start(options = {}) {
		let interval;

		opts = {
			sequence: 'line',
			interval: 0,
			hideCursor: false,
			doNotBlock: false,
			text: '',
			...options,
		};

		if (opts.hideCursor) cursor.hide();
		interval = buildSequence(opts.interval);
		index = 0;
		process.stdout.write(sequence[index]);

		timer = setInterval(function () {
			clearLine();
			index = index < sequence.length - 1 ? index + 1 : 0;
			process.stdout.write(sequence[index]);
		}, interval);

		if (opts.doNotBlock) timer.unref();
	}

	function stop() {
		clearInterval(timer);

		if (opts.hideCursor) {
			cursor.show();
		}

		clearLine();
	}

	function clearLine() {
		process.stdout.write(sequence[index].replace(/./g, '\b'));
		process.stdout.clearLine();
	}

	function buildSequence(interval) {
		if (Array.isArray(opts.sequence)) {
			sequence = opts.sequence;
		} else {
			const cliSpinner = cliSpinners[opts.sequence];
			if (cliSpinner == undefined) throw new Error('Spinner not found');
			sequence = cliSpinner.frames;
			if (interval == 0) interval = cliSpinner.interval;
		}

		if (sequence.length == 0) throw new Error('Spinner is empty');
		sequence = opts.text ? sequence.map((character) => character + ' ' + opts.text) : sequence;

		if (interval == 0) interval = 250;
		return interval;
	}

	return {
		start,
		stop,
	};
})();

module.exports = spinner;
