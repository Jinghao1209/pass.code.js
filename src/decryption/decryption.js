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
    let encryptionWord = encryption.split(":"), encryptionWordNumber = encryptionWord.map((v) => parseInt(v)), styleASCII = (0, __1.wordToASCII)(style), tmp = [], el = encryptionWordNumber.length, l = styleASCII.length - 1, en = encryptionWord.length < styleASCII.length;
    if (!en)
        for (let i = 0; i < encryptionWordNumber.length; i++, l--) {
            if (l <= -1)
                // if style not enough
                l = styleASCII.length - 1;
            tmp.push(encryptionWordNumber[i] / styleASCII[l]);
        }
    else {
        let repeatTimes = parseInt(`${styleASCII.length / encryptionWordNumber.length}`) - 1;
        let repeatLastLeft = styleASCII.length % encryptionWordNumber.length;
        for (let i = 0, j = 0; i < styleASCII.length; i++, j++) {
            if (repeatLastLeft) {
                encryptionWordNumber[repeatLastLeft - 1] =
                    encryptionWordNumber[repeatLastLeft - 1] ^
                        styleASCII[styleASCII.length - i - 1];
                repeatLastLeft--;
                if (!repeatLastLeft)
                    j = -1;
                continue;
            }
            if (j === el) {
                j = 0;
                repeatTimes--;
            }
            if (repeatTimes) {
                encryptionWordNumber[el - j - 1] =
                    encryptionWordNumber[el - j - 1] ^
                        styleASCII[styleASCII.length - i - 1];
            }
            else {
                encryptionWordNumber[el - j - 1] =
                    encryptionWordNumber[el - j - 1] /
                        styleASCII[styleASCII.length - i - 1];
            }
        }
        tmp = encryptionWordNumber;
    }
    return tmp;
}
exports.default = Decryption;
