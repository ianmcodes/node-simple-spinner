const spinner = require('./spinner');

function test1() {
	spinner.start();
	setTimeout(function () {
		spinner.stop();
		test2();
	}, 1000);
}

function test2() {
	spinner.changeSequence(['0o0', 'o0o']);
	spinner.start();
	setTimeout(function () {
		spinner.stop();
		test3();
	}, 1000);
}

function test3() {
	spinner.start(50, { hideCursor: true });
	setTimeout(function () {
		spinner.stop();
		test4();
	}, 1000);
}

function test4() {
	spinner.changeSequence(['|', '/', '-', '\\']);
	spinner.start(100, { text: 'Loading...' });
	setTimeout(function () {
		spinner.stop();
		spinner.start(100, { doNotBlock: true });
	}, 1000);
}

process.on('exit', function () {
	spinner.stop();
	console.log('Have a nice day');
});

test1();
