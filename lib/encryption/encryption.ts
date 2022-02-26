import { ASCIItoWord, wordToASCII } from "..";

/**
 * 加密字符 Encrypted characters or word
 * @link https://zh.wikipedia.org/wiki/ASCII#可显示字符
 * @link https://en.wikipedia.org/wiki/ASCII#Printable_characters
 */
export default function Encryption(word: number[], style?: string): string {
    let enc = ""; // 加密字符
    // 这个是加密style去[a-zA-Z]，让enc等于字母
    let tmp = wordToASCII(style ?? "13").map(
        (v, i) =>
            i % 2 == 0
                ? v + 17 + 26 + 6 // 当i除2没有余数时，变成小字母。
                : v + 17 // 反之大字母
    );
    enc = ASCIItoWord(tmp); // 编译成加密字符
    let x: string =
        word
            .map(
                (v, i) =>
                    (v << 2) +
                    (i !== word.length - 1
                        ? ":" // 如果是在中间，则添加:当作隔断
                        : ".") // 如果是最后一个ASCII或字符，则添加《.》方便声明编译规则
            )
            .join(style ?? "13") + enc; // join()方面是添加加密的style；《+》方面是申明加密规则
    return x;
}
