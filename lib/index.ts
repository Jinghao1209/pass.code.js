export { default as Decryption } from "./encryption/decryption";
export { default as Encryption } from "./encryption/encryption";
export { default as EnPhone9Key } from "./encryption/enPhone9Key";
export { default as DePhone9Key } from "./encryption/dePhone9Key";
export { default as EnRailFenceCipher } from "./encryption/enRailFenceCipher";
export { default as DeRailFenceCipher } from "./encryption/deRailFenceCipher";
export { default as HexToWord } from "./encryption/hexToWord";
export { default as WordToHex } from "./encryption/wordToHex";
export * from "./encryption/crypto";

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
