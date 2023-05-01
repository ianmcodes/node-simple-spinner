# Supper Simple Spinner for Node.js

This is a supper simple spinner / activity indicator for Node.js.
I've used it in a few console tools that I've written in Node.js, where I've wanted to show that there is activity and that the program isn't hung.

[![NPM](https://nodei.co/npm/simple-spinner.png?downloads=true)](https://nodei.co/npm/simple-spinner/)

## Updates

Now you can use a spinner from [cli-spinners](https://www.npmjs.com/package/cli-spinners) and use a text with the spinner.

## How Simple Is It?

So simple it only has 2 functions.

-   `start([options])`
    -   Obviously this starts the spinner.
    -   **Options**: start can take an options object with the following keys:
        -   `sequence` (string | array, default: "line"): If it is a string, expect the name of a [cli-spinners](https://www.npmjs.com/package/cli-spinners) spinner. The list of spinners can be reviewed at [cli-spinners JSON](https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json). If it is a array, expect an array of strings like this [".", "o", "0", "@", "*"]
        -   `interval` (integer, default: 250): Specify how to fast the sequence should go in milliseconds. If a spinner from [cli-spinners](https://www.npmjs.com/package/cli-spinners) is given and an interval is not specified, it will be taken from the information of the spinner in the [cli-spinners JSON](https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json).
        -   `hideCursor` (boolean, default: false): When true, hide the console cursor (uses TooTallNate/ansi.js)
        -   `doNotBlock` (boolean, default: false): When true, unref the timer so it does not prevent the process from exiting.
        -   `text` (string, default: ""): Text that will go along with the spinner.
-   `stop()`
    -   I really shouldn't have to explain this one...
