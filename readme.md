> Strip `console`, `alert`, and `debugger` statements from JavaScript code

Useful for making sure you didn't leave any logging in production code.

## Usage

```
$ npm install strip-debug-option
```


## Usage

```js
const stripDebug = require('strip-debug-option');

const option={
	skipDebugger:false,
	skipConsole:false,
	skipAlert:false
}

stripDebug('function foo(){console.log("foo");alert("foo");debugger;}',option).toString();
//=> 'function foo(){void 0;void 0;}'
```


### API

## stripDebug(input)

Returns the modified [Esprima AST](http://esprima.org) which can be used to make additional modifications.

Call `.toString()` to get the stringified output.

To prevent any side-effects, `console.*`/`alert*` is replaced with `void 0` instead of being stripped.

If you shadow the `console` global with your own local variable, it will still be removed.

### input

Type: `string` `Object`

Pass in a string of JavaScript code or a [Esprima compatible AST](http://esprima.org).



## License

MIT
