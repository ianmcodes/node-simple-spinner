Supper Simple Spinner for Node.js
=================================

This is a supper simple spinner / activity indicator for Node.js.
I've used it in a few console tools that I've written in Node.js, where I've wanted to show that there is activity and that the program isn't hung.

[![NPM](https://nodei.co/npm/simple-spinner.png?downloads=true)](https://nodei.co/npm/simple-spinner/)

How Simple Is It?
-----------------

So simple it only has 3 functions.

 * `start([interval in ms], [options])`
   * Obviously this starts the spinner. You can give it how quickly you want it to go through the sequence of characters. Defaults to 250ms.
   * **Update (2015-07-24)**: start can now also take an options object with the following keys:
     * `hideCursor` (boolean, default: false): When true, hide the console cursor (uses TooTallNate/ansi.js)
     * `doNotBlock` (boolean, default: false): When true, unref the timer so it does not prevent the process from exiting. 
 * `stop()`
   * I really shouldn't have to explain this one...
 * `change_sequence(sequence)`
   * Use this if you don't like the default spinning stick. Give it an array of strings like this `[".", "o", "0", "@", "*"]`

