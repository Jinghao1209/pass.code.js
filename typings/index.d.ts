export declare type ASCII = number[];
export function wordToASCII(word: string): ASCII;
export function ASCIItoWord(word: ASCII): string;

/**
 * 加密字符 Encrypted characters or word
 * more safe than version v1.0.0
 * @link https://zh.wikipedia.org/wiki/ASCII#可显示字符
 * @link https://en.wikipedia.org/wiki/ASCII#Printable_characters
 */
export function Encryption(word: ASCII, style?: string): string;
/**
 * more safe than v1.0.0
 * @param encryption the encryption string
 * @param style the encryption style, by default is "13", but here don't have set it, please write the encryption style
 * @returns ascii
 */
export function Decryption(encryption: string, style: string): ASCII;

export function EnPhone9Key(word: string): string;
export function DePhone9Key(word: string): string;

export function EnRailFenceCipher(word: string): string;
export function DeRailFenceCipher(word: string): string;

export function WordToHex(word: string): string;
/**
 * Not Support Chinese Word...
 */
export function HexToWord(hex: string): string;