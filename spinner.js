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
		opts = {
			sequence: 'line',
			interval: 250,
			hideCursor: false,
			doNotBlock: false,
			text: '',
			...options,
		};

		if (opts.hideCursor) cursor.hide();

		sequence = addTextSequence();

		index = 0;
		process.stdout.write(sequence[index]);

		timer = setInterval(function () {
			clearLine();
			index = index < sequence.length - 1 ? index + 1 : 0;
			process.stdout.write(sequence[index]);
		}, opts.interval);

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

	function addTextSequence() {
		let sequence = [];
		if (Array.isArray(opts.sequence)) {
			sequence = opts.sequence;
		} else {
			if (cliSpinners[opts.sequence] == undefined) throw new Error('Spinner not found');
			sequence = cliSpinners[opts.sequence].frames;
		}
		if (sequence.length == 0) throw new Error('Spinner is empty');
		return opts.text ? sequence.map((character) => character + ' ' + opts.text) : sequence;
	}

	return {
		start,
		stop,
	};
})();

module.exports = spinner;
