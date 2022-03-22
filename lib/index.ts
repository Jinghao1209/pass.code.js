export { default as Decryption } from "./decryption/decryption";
export { default as Encryption } from "./encryption/encryption";
export { default as EnPhone9Key } from "./encryption/enPhone9Key";
export { default as DePhone9Key } from "./decryption/dePhone9Key";
export { default as EnRailFenceCipher } from "./encryption/enRailFenceCipher";
export { default as DeRailFenceCipher } from "./decryption/deRailFenceCipher";
export { default as HexToWord } from "./crypto/hexToWord";
export { default as WordToHex } from "./crypto/wordToHex";
export * from "./crypto/crypto";
export * from "./crypto/keyCrypt";
export * as crypto from "crypto";

// the basic as basic, if here error, all error
export function wordToASCII(word: string): number[] {
    let x: number[] = [];
    for (let i = 0; i < word.length; i++) x.push(word[i].charCodeAt(0));
    return x;
}
export function ASCIItoWord(word: number[]): string {
    let x: string[] = [];
    for (let i = 0; i < word.length; i++) x.push(String.fromCharCode(word[i]));
    return x.join("");
}
export function bufferToHex(buffer: Buffer): string {
    return buffer.toString("hex");
}
