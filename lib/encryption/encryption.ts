import { wordToASCII } from "..";

/**
 * 加密字符 Encrypted characters or word
 * more safe than version v1.0.0
 * @link https://zh.wikipedia.org/wiki/ASCII#可显示字符
 * @link https://en.wikipedia.org/wiki/ASCII#Printable_characters
 */
export default function Encryption(
    word: number[],
    style: string = "13"
): string {
    let tmp = wordToASCII(style),
        l = tmp.length - 1,
        enc = "";

    // for each, word[i] * style[n] + ":"
    for (let i = 0; i < word.length; i++, l--) {
        if (l <= -1) l = tmp.length - 1;
        enc += (word[i] * tmp[l]) + (i + 1 === word.length ? "" : ":");
    }
    return enc;
}
