# v8-flags-object-proxy

v8-flags with an object interface

## Why
Because then I can do things like `_.extend` on runtime flags.Nice.

## Usage
Call it and use it just like an object

```js
var flags = require('v8-flags-object-proxy')();
console.log(flags.use_strict); //false
flags.use_strict = true;

//no in use strict mode no matter what.
```

## Methodology
We use the v8-flags module to fetch all the flags,
then create an object, using `Object.defineProperty`
to create getter/setter properties that delegate
to v8-flags getter/setter functions.

## Hopes & Dreams
I'd like [@thlorenz](https://github.com/thlorenz) to adopt this interface for v8-flags. 

## Kudos
Sponsored by [nearForm](http://nearform.com)