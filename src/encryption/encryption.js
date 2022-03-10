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
    let tmp = (0, __1.wordToASCII)(style), l = tmp.length - 1, enc = [], long = word.length < tmp.length;
    // for each, word[i] * style[n] + ":"
    if (!long)
        for (let i = 0; i < word.length; i++, l--) {
            // if style not enough
            if (l <= -1)
                l = tmp.length - 1;
            enc.push(word[i] * tmp[l]);
        }
    else
        for (let i = 0, j = 0; i < tmp.length; i++, j++) {
            if (j === word.length)
                j = 0;
            j < i ? (enc[j] = enc[j] ^ tmp[i]) : enc.push(word[j] * tmp[i]);
        }
    return enc.join(":");
}
exports.default = Encryption;
