export default function DeRailFenceCipher(word: string): string {
    if (word === "") throw new SyntaxError("Word can't be empty");
    let arr1 = "";
    let arr2 = "";
    let arr = "";
    // 如果他有余数
    if (word.length % 2 === 1) {
        for (let i = 0; i < (word.length + 1) / 2; i++) arr1 += word[i];
        for (let i = (word.length + 1) / 2; i < word.length; i++)
            arr2 += word[i];
    } else {
        for (let i = 0; i < word.length / 2; i++) arr1 += word[i];
        for (let i = word.length / 2; i < word.length; i++) arr2 += word[i];
    }

    for (let i = 0; i < arr1.length; i++) {
        arr += arr1[i];
        arr += arr2[i] ?? "";
    }
    return arr;
}
