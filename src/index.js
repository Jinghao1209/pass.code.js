'use strict';

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};exports.ASCIItoWord = exports.wordToASCII = exports.WordToHex = exports.HexToWord = exports.DeRailFenceCipher = exports.EnRailFenceCipher = exports.DePhone9Key = exports.EnPhone9Key = exports.Encryption = exports.Decryption = void 0;
var decryption_1 = require("./encryption/decryption");
Object.defineProperty(exports, "Decryption", { enumerable: true, get: function () { return __importDefault(decryption_1).default; } });
var encryption_1 = require("./encryption/encryption");
Object.defineProperty(exports, "Encryption", { enumerable: true, get: function () { return __importDefault(encryption_1).default; } });
var enPhone9Key_1 = require("./encryption/enPhone9Key");
Object.defineProperty(exports, "EnPhone9Key", { enumerable: true, get: function () { return __importDefault(enPhone9Key_1).default; } });
var dePhone9Key_1 = require("./encryption/dePhone9Key");
Object.defineProperty(exports, "DePhone9Key", { enumerable: true, get: function () { return __importDefault(dePhone9Key_1).default; } });
var enRailFenceCipher_1 = require("./encryption/enRailFenceCipher");
Object.defineProperty(exports, "EnRailFenceCipher", { enumerable: true, get: function () { return __importDefault(enRailFenceCipher_1).default; } });
var deRailFenceCipher_1 = require("./encryption/deRailFenceCipher");
Object.defineProperty(exports, "DeRailFenceCipher", { enumerable: true, get: function () { return __importDefault(deRailFenceCipher_1).default; } });
var hexToWord_1 = require("./encryption/hexToWord");
Object.defineProperty(exports, "HexToWord", { enumerable: true, get: function () { return __importDefault(hexToWord_1).default; } });
var wordToHex_1 = require("./encryption/wordToHex");
Object.defineProperty(exports, "WordToHex", { enumerable: true, get: function () { return __importDefault(wordToHex_1).default; } });
// the basic as basic, if here error, all error
function wordToASCII(word) {
    let x = [];
    for (let i = 0; i < word.length; i++)
        x.push(word[i].charCodeAt(0));
    return x;
}
exports.wordToASCII = wordToASCII;
function ASCIItoWord(word) {
    let x = [];
    for (let i = 0; i < word.length; i++)
        x.push(String.fromCharCode(word[i]));
    return x.join("");
}
exports.ASCIItoWord = ASCIItoWord;
