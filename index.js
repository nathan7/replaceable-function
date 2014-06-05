'use strict';
module.exports = replaceable

function replaceable(initial) {
  var implementation
    , fn = function() { return implementation.apply(this, arguments) }

  fn.replace = function(fresh) {
    implementation = typeof fresh == 'function'
      ? fresh
      : function() { throw new TypeError('not a function') }
  }

  fn.replace(initial)
  return fn
}

replaceable.quiet = quietReplacable
function quietReplacable(initial) {
  var implementation
    , fn = function() { return implementation.apply(this, arguments) }

  fn.replace = function(fresh) {
    implementation = typeof fresh == 'function'
      ? fresh
      : noop
  }

  fn.replace(initial)
  return fn
}

function noop() {}
