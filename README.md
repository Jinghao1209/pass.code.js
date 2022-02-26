# pass.code.js
This is a **WORD** to **PASSCODE** library

# Installation
`npm install pass.code.js`

## Changelog
[CHANGELOG](CHANGELOG.md)

## Usage
Start with `JavaScript`
```js
const { wordToASCII } = require("pass.code.js");
const ascii = wordToASCII("Hello World!");
console.log(ascii) // output: 'Hello World!' in ascii
/* output:
[
   72, 101, 108, 108, 111,
   32,  87, 111, 114, 108,
  100,  33
]
*/
```
To `typescript`, Example:
```ts
import { wordToASCII, ASCII } from "pass.code.js";
const ascii: ASCII = wordToASCII("Hello World!");
console.log(ascii) // output: 'Hello World!' in ascii
/* output:
[
   72, 101, 108, 108, 111,
   32,  87, 111, 114, 108,
  100,  33
]
*/
```

## License
Pass.code.js is available under the [MIT license](https://opensource.org/licenses/MIT). Pass.code.js also includes external libraries that are available under a variety of licenses. See [LICENSE](LICENSE) for the full license text.