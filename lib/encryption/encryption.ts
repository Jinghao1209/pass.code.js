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
        enc: any[] = [],
        long = word.length < tmp.length;

    // for each, word[i] * style[n] + ":"
    if (!long)
        for (let i = 0; i < word.length; i++, l--) {
            // if style not enough
            if (l <= -1) l = tmp.length - 1;
            enc.push(word[i] * tmp[l]);
        }
    else
        for (let i = 0, j = 0; i < tmp.length; i++, j++) {
            if (j === word.length) j = 0;
            j < i ? (enc[j] = enc[j] ^ tmp[i]) : enc.push(word[j] * tmp[i]);
        }
    return enc.join(":");
}
