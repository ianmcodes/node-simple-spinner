const spinner = require('./spinner');

function test1() {
	spinner.start();
	setTimeout(function () {
		spinner.stop();
		test2();
	}, 1000);
}

function test2() {
	spinner.start({ sequence: ['0o0', 'o0o'] });
	setTimeout(function () {
		spinner.stop();
		test3();
	}, 1000);
}

function test3() {
	spinner.start({ sequence: ['0o0', 'o0o'], interval: 50, hideCursor: true });
	setTimeout(function () {
		spinner.stop();
		test4();
	}, 1000);
}

function test4() {
	spinner.start({ sequence: 'dots', interval: 80, text: 'Loading...' });
	setTimeout(function () {
		spinner.stop();
		spinner.start({ interval: 100, doNotBlock: true });
	}, 1500);
}

process.on('exit', function () {
	spinner.stop();
	console.log('Have a nice day');
});

test1();
