export default function EnRailFenceCipher(word: string): string {
    let arr1: string = "";
    let arr2: string = "";
    for (let i = 0; i < word.length; i++) {
        if (i % 2 == 0) arr1 += word[i];
        else arr2 += word[i];
    }
    return arr1 + arr2;
}
