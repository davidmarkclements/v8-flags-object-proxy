var flagMap = require('../')();
var assert = require('assert');

console.log('write flag test');

flagMap.use_strict = true;

assert.equal(flagMap.use_strict, true);

assert.throws(require('./fixtures/not-strict'));

console.log('passed');