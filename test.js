var spinner = require('./spinner');

function test1() {
  spinner.start();
  setTimeout(function() {
    spinner.stop();
    test2();
  }, 1000);
}

function test2() {
  spinner.change_sequence(["0o0", "o0o"]);
  spinner.start();
  setTimeout(function() {
    spinner.stop();
    test3();
  }, 1000);
}

function test3() {
  spinner.start(50,{ hideCursor : true });
  setTimeout(function() {
    spinner.stop();
    spinner.start(100, { doNotBlock : true });
  }, 1000);
}

process.on("exit", function() {
  spinner.stop();
  console.log("Have a nice day");
});

test1();
