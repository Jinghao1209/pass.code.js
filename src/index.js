'use strict';

var __createBinding = (undefined && undefined.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (undefined && undefined.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (undefined && undefined.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (undefined && undefined.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};exports.bufferToHex = exports.ASCIItoWord = exports.wordToASCII = exports.crypto = exports.WordToHex = exports.HexToWord = exports.DeRailFenceCipher = exports.EnRailFenceCipher = exports.DePhone9Key = exports.EnPhone9Key = exports.Encryption = exports.Decryption = void 0;
var decryption_1 = require("./decryption/decryption");
Object.defineProperty(exports, "Decryption", { enumerable: true, get: function () { return __importDefault(decryption_1).default; } });
var encryption_1 = require("./encryption/encryption");
Object.defineProperty(exports, "Encryption", { enumerable: true, get: function () { return __importDefault(encryption_1).default; } });
var enPhone9Key_1 = require("./encryption/enPhone9Key");
Object.defineProperty(exports, "EnPhone9Key", { enumerable: true, get: function () { return __importDefault(enPhone9Key_1).default; } });
var dePhone9Key_1 = require("./decryption/dePhone9Key");
Object.defineProperty(exports, "DePhone9Key", { enumerable: true, get: function () { return __importDefault(dePhone9Key_1).default; } });
var enRailFenceCipher_1 = require("./encryption/enRailFenceCipher");
Object.defineProperty(exports, "EnRailFenceCipher", { enumerable: true, get: function () { return __importDefault(enRailFenceCipher_1).default; } });
var deRailFenceCipher_1 = require("./decryption/deRailFenceCipher");
Object.defineProperty(exports, "DeRailFenceCipher", { enumerable: true, get: function () { return __importDefault(deRailFenceCipher_1).default; } });
var hexToWord_1 = require("./crypto/hexToWord");
Object.defineProperty(exports, "HexToWord", { enumerable: true, get: function () { return __importDefault(hexToWord_1).default; } });
var wordToHex_1 = require("./crypto/wordToHex");
Object.defineProperty(exports, "WordToHex", { enumerable: true, get: function () { return __importDefault(wordToHex_1).default; } });
__exportStar(require("./crypto/crypto"), exports);
__exportStar(require("./crypto/keyCrypt"), exports);
exports.crypto = __importStar(require("crypto"));
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
function bufferToHex(buffer) {
    return buffer.toString("hex");
}
exports.bufferToHex = bufferToHex;
