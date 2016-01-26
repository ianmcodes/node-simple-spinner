var cursor = require('ansi')(process.stdout);

var loadingSpinner = (function() {
	var sequence = ['|','/','-','\\']; //[".", "o", "0", "@", "*"];
	var index = 0;
	var timer;
	var settings = {};

	function start(inv, options) {
		options = options || {};

		settings = {
			doNotBlock: !!options.doNotBlock,
			hideCursor: !!options.hideCursor
		};

		if (settings.hideCursor) {
			cursor.hide();
		}

		inv = inv || 250;
		index = 0;
		process.stdout.write(sequence[index]);
		timer = setInterval(function() {
			process.stdout.write(sequence[index].replace(/./g, '\b'));
			index = (index < sequence.length - 1) ? index + 1 : 0;
			process.stdout.write(sequence[index]);
		}, inv);

		if(settings.doNotBlock) {
			timer.unref();
		}
	}

	function stop() {
		clearInterval(timer);

		if(settings.hideCursor) {
			cursor.show();
		}

		process.stdout.clearLine();
	}

	function changeSequence(customSequence) {
		if(customSequence.constructor === Array) {
			sequence = customSequence;
		}
	}

	return {
		start: start,
		stop: stop,
		changeSequence: changeSequence
	};
})();

module.exports = loadingSpinner;
