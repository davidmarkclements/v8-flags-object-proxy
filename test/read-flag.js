var flagMap = require('../')();
var assert = require('assert');

console.log('read flag test')

//by default use strict is false
assert.equal(flagMap.use_strict, false);

//should not throw, because use strict is false
assert.doesNotThrow(require('./fixtures/not-strict'));

console.log('passed');