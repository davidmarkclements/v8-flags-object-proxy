var v8f = require('v8-flags');
var util = require('util');

module.exports = function () {
  var list = v8f.listFlags();
  var flags = v8f.flags;
  var object = Object.create({
    __proto__: v8f,
    inspect: function (unused, opts) {
      return util.inspect(this.listFlags(), opts);
    }
  });

  function proxy (o, k) {
    Object.defineProperty(o, k, {
      get: flags[k],
      set: flags[k],
      enumerable: true
    });
    return o;
  }

  return Object
    .keys(list)
    .reduce(proxy, object);
}