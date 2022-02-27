"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
/**
 * 加密字符 Encrypted characters or word
 * more safe than version v1.0.0
 * @link https://zh.wikipedia.org/wiki/ASCII#可显示字符
 * @link https://en.wikipedia.org/wiki/ASCII#Printable_characters
 */
function Encryption(word, style = "13") {
    let tmp = (0, __1.wordToASCII)(style), l = tmp.length - 1, enc = "";
    // for each, word[i] * style[n] + ":"
    for (let i = 0; i < word.length; i++, l--) {
        if (l <= -1)
            l = tmp.length - 1;
        enc += (word[i] * tmp[l]) + (i + 1 === word.length ? "" : ":");
    }
    return enc;
}
exports.default = Encryption;
