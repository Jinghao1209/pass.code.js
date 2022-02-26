export declare type ASCII = number[];

export function wordToASCII(word: string): ASCII;
export function ASCIItoWord(word: ASCII): string;

export function Encryption(word: ASCII, style?: string): string;
export function Decryption(encryption: string): ASCII;

export function EnPhone9Key(word: string): string;
export function DePhone9Key(word: string): string;

export function EnRailFenceCipher(word: string): string;
export function DeRailFenceCipher(word: string): string;

export function WordToHex(word: string): string;
/**
 * Not Support Chinese Word...
 */
export function HexToWord(hex: string): string;
