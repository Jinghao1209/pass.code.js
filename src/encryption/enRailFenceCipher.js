"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function EnRailFenceCipher(word) {
    let arr1 = "";
    let arr2 = "";
    for (let i = 0; i < word.length; i++) {
        if (i % 2 == 0)
            arr1 += word[i];
        else
            arr2 += word[i];
    }
    return arr1 + arr2;
}
exports.default = EnRailFenceCipher;
