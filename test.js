var loadingSpinner = require('./lib/loading-spinner');

var dary = function() {
  loadingSpinner.stop();
  process.stdout.write('DA-RY !');
};

var legend = function() {
  process.stdout.write('It\'s gonna be LE-GEN... Wait for it... ');
  loadingSpinner.start(100, {
    clearAfter: true
  });
  setTimeout(dary, 1000);
};

legend();

/*function test1() {
  loadingSpinner.start();
  setTimeout(function() {
    loadingSpinner.stop();
    test2();
  }, 1000);
}

function test2() {
  loadingSpinner.changeSequence(['0o0', 'o0o']);
  loadingSpinner.start();
  setTimeout(function() {
    loadingSpinner.stop();
    test3();
  }, 1000);
}

function test3() {
  loadingSpinner.start(50,{ hideCursor : true });
  setTimeout(function() {
    loadingSpinner.stop();
    loadingSpinner.start(100, { doNotBlock : true });
  }, 1000);
}

process.on('exit', function() {
  loadingSpinner.stop();
  console.log('Have a nice day');
});

test1();*/
