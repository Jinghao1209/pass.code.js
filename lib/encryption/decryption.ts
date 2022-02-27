import { wordToASCII } from "..";

/**
 * more safe than v1.0.0
 * @param encryption the encryption string
 * @param style the encryption style, by default is "13", but here don't have set it, please write the encryption style
 * @returns ascii
 */
export default function Decryption(
    encryption: string,
    style: string
): number[] {
    // word that want to decrypt
    let encryptionWord = encryption.split(":");
    let encryptionWordNumber = encryptionWord.map((v) => parseInt(v));
    let styleASCII = wordToASCII(style);
    let l = styleASCII.length - 1;
    let tmp = [];
    for (let i = 0; i < encryptionWordNumber.length; i++, l--) {
        if (l <= -1) l = styleASCII.length - 1;
        tmp.push(encryptionWordNumber[i] / styleASCII[l]);
    }
    return tmp;
}
