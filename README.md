# loading-spinner
**Loading spinner for NodeJS.**

[![Build Status](https://travis-ci.org/ivangabriele/loading-spinner.svg?branch=master)](https://travis-ci.org/ivangabriele/loading-spinner)
[![NPM Version](https://img.shields.io/npm/v/loading-spinner.svg?style=flat)](https://www.npmjs.org/package/loading-spinner)
[![NPM Downloads](https://img.shields.io/npm/dm/loading-spinner.svg?style=flat)](https://www.npmjs.org/package/loading-spinner)
[![Dependency Status](https://david-dm.org/ivangabriele/loading-spinner.svg)](https://david-dm.org/ivangabriele/loading-spinner)

---

## Installation

    npm install loading-spinner --save

## Usage

    var loadingSpinner = require('loading-spinner');

    // Start the loading spinner
    loadingSpinner.start(
      [Integer, default: 100], // Interval (in ms) between each spinner sequence element
      {
        clearChar:  [Boolean, default: false], // Clear the spinner when stop() is called
        clearLine:  [Boolean, default: false], // Clear the entire line when stop() is called
        doNotBlock: [Boolean, default: false], // Does not prevent the process from exiting
        hideCursor: [Boolean, default: false]  // Hide the cursor until stop() is called
      }
    );

    // Stop the loading spinner
    loadingSpinner.stop();

    // Customize the spinner sequence
    loadingSpinner.setSequence(
      [Array, default: ['|','/','-','\\']], // Sequence of spinner elements
    );

## Example

    var loadingSpinner = require('loading-spinner');

    var dary = function() {
      loadingSpinner.stop();

      process.stdout.write('DA-RY !');
    };

    var legend = function() {
      process.stdout.write('It\'s gonna be LE-GEN... Wait for it... ');

      loadingSpinner.start(100, {
        clearChar: true
      });

      setTimeout(dary, 1000);
    };

    legend();
