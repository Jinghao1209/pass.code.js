"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
/**
 * more safe than v1.0.0
 * @param encryption the encryption string
 * @param style the encryption style, by default is "13", but here don't have set it, please write the encryption style
 * @returns ascii
 */
function Decryption(encryption, style) {
    // word that want to decrypt
    let encryptionWord = encryption.split(":");
    let encryptionWordNumber = encryptionWord.map((v) => parseInt(v));
    let styleASCII = (0, __1.wordToASCII)(style);
    let l = styleASCII.length - 1;
    let tmp = [];
    for (let i = 0; i < encryptionWordNumber.length; i++, l--) {
        if (l <= -1)
            l = styleASCII.length - 1;
        tmp.push(encryptionWordNumber[i] / styleASCII[l]);
    }
    return tmp;
}
exports.default = Decryption;
