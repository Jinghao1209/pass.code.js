import { ASCII } from "../typings/types";

export { default as Decryption } from "./decryption/decryption";
export { default as Encryption } from "./encryption/encryption";
export { default as EnPhone9Key } from "./encryption/enPhone9Key";
export { default as DePhone9Key } from "./decryption/dePhone9Key";
export { default as EnRailFenceCipher } from "./encryption/enRailFenceCipher";
export { default as DeRailFenceCipher } from "./decryption/deRailFenceCipher";
export * from "./hex";
export * from "./crypto/crypto";
export * from "./crypto/keyCrypt";
export * from "./crypto/AES";
export * as crypto from "crypto";

// the basic as basic, if here error, all error
export function wordToASCII(word: string): ASCII {
    let x: ASCII = [];
    for (let i = 0; i < word.length; i++) x.push(word[i].charCodeAt(0));
    return x;
}

export function ASCIItoWord(word: ASCII): string {
    let x: string[] = [];
    for (let i = 0; i < word.length; i++) x.push(String.fromCharCode(word[i]));
    return x.join("");
}
