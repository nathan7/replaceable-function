# replaceable-function

  a function you can replace.

## Installation

    npm install replaceable-function

## Example

```js
var handler = Replaceable(start)
stream.on('data', handler)

function start(data) {
  // handle connection initialisation
  …
  handler.replace(handle)
}

function handle(data) {
  // handle the data
  if (data.last)
    handler.replace(end)
  else
    …
}

function end(data) {
  // handle the goodbye
  …
  handler.replace(null)
}
```

## API
## Replaceable(fn)

  Returns a function that delegates to its internal function.
  If the passed value isn't a function, it'll be replaced by `function() { throw new TypeError('not a function') }`.

## Replaceable.quiet(fn)

  Returns a function that delegates to its internal function.
  If the passed value isn't a function, it'll be replaced by `function() {}`.

### replaceable.replace(fn)

  replaces the internal function.

