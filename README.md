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

## Example

    var loadingSpinner = require('loading-spinner');

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
