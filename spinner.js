/***********
 * Spinner *
 ***********/
var cursor = require('ansi')(process.stdout);
var spinner = (function() {
	var sequence = ["|","/","-","\\"]; //[".", "o", "0", "@", "*"];
	var index = 0;
	var timer;
	var opts = {};

	function start(inv, options) {
		options = options || {};
		opts = options;
		if(options.hideCursor) {
			cursor.hide();
		}
		
		inv = inv || 250;
		index = 0;
		process.stdout.write(sequence[index]);
		timer = setInterval(function() {
			process.stdout.write(sequence[index].replace(/./g,"\b"));
			index = (index < sequence.length - 1) ? index + 1 : 0;
			process.stdout.write(sequence[index]);
		},inv);
		
		if(options.doNotBlock) {
			timer.unref();
		}
	}

	function stop() {
		clearInterval(timer);
		if(opts.hideCursor) {
			cursor.show();
		}

		process.stdout.write(sequence[index].replace(/./g,"\b"));
	}

	function change_sequence(seq) {
		if(Array.isArray(seq)) {
			sequence = seq;
		}
	}

	return {
		start: start,
		stop: stop,
		change_sequence: change_sequence
	};
})();

module.exports = spinner;
