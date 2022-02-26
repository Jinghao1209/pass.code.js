/**
 * @param word /[a-zA-Z]/
 * @warn word will word.toLowerCase()
 */
export default function EnPhone9Key(word: string): string {
    if (!/[a-zA-Z]+$/.test(word))
        throw new SyntaxError("Word is not valid! Word = /[a-zA-Z]/");
    word = word.toLowerCase();
    word = word.replaceAll("a", "21");
    word = word.replaceAll("b", "22");
    word = word.replaceAll("c", "23");
    word = word.replaceAll("d", "31");
    word = word.replaceAll("e", "32");
    word = word.replaceAll("f", "33");
    word = word.replaceAll("g", "41");
    word = word.replaceAll("h", "42");
    word = word.replaceAll("i", "43");
    word = word.replaceAll("j", "51");
    word = word.replaceAll("k", "52");
    word = word.replaceAll("l", "53");
    word = word.replaceAll("m", "61");
    word = word.replaceAll("n", "62");
    word = word.replaceAll("o", "63");
    word = word.replaceAll("p", "71");
    word = word.replaceAll("q", "72");
    word = word.replaceAll("r", "73");
    word = word.replaceAll("s", "74");
    word = word.replaceAll("t", "81");
    word = word.replaceAll("u", "82");
    word = word.replaceAll("v", "83");
    word = word.replaceAll("w", "91");
    word = word.replaceAll("x", "92");
    word = word.replaceAll("y", "93");
    word = word.replaceAll("z", "94");
    return word;
}
