import { ASCIItoWord, wordToASCII } from "..";

export default function Decryption(encryption: string): number[] { // word that want to decrypt
    let x = encryption.split('.'); x.shift(); // 寻找加密规则
    if (x[0] === '') // 如果没有加密规则，则丢出Error
        throw new SyntaxError("Can't find Encryption Style")

    let a = wordToASCII(x[0]); // 反译规则的第一步骤
    a = a.map((v, i) => i % 2 == 0 ? (
        v - 17 - 26 - 6 // 和加密规则一样
    ) : (
        v - 17 // 小字母，和加密function一样
    ));
    let b = ASCIItoWord(a); // 获取加密的东西
    let y = encryption.split(`:${b}`); // 变成可编译数组
    let c = y[y.length - 1].replace(`.${x}`, ''); // 寻找最后一个数据，并且忽略加密规则
    y[y.length - 1] = c; // 同上
    let z = y.map(v => Number(v)).map(v => v >> 2); // 返回解密ASCII数组
    // let z = y.filter((v, i) => i !== encryption.split(':').length - 1);
    return z;
}