# replaceable-function

  a function you can replace.

## Installation

    npm install replaceable-function

## API
## Replaceable(fn)

  Returns a function that delegates to its internal function.
  If the passed value isn't a function, it'll be replaced by `function() { throw new TypeError('not a function') }`.

## Replaceable.quiet(fn)

  Returns a function that delegates to its internal function.
  If the passed value isn't a function, it'll be replaced by `function() {}`.

### replaceable.replace(fn)

  replaces the internal function.

