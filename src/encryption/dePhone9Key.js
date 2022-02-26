"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param word /[0-9]/
 */
function DePhone9Key(word) {
    if (!/[1-9]+$/.test(word))
        throw new SyntaxError("Word is not valid! Word = /[a-zA-Z]/");
    word = word.toLowerCase();
    let backup = "";
    for (let i = 0; i < word.length; i += 2) {
        let back_word = word[i] + word[i + 1];
        back_word = replace(back_word);
        backup += back_word;
    }
    function replace(word) {
        word = word.replaceAll("21", "a");
        word = word.replaceAll("22", "b");
        word = word.replaceAll("23", "c");
        word = word.replaceAll("31", "d");
        word = word.replaceAll("32", "e");
        word = word.replaceAll("33", "f");
        word = word.replaceAll("41", "g");
        word = word.replaceAll("42", "h");
        word = word.replaceAll("43", "i");
        word = word.replaceAll("51", "j");
        word = word.replaceAll("52", "k");
        word = word.replaceAll("53", "l");
        word = word.replaceAll("61", "m");
        word = word.replaceAll("62", "n");
        word = word.replaceAll("63", "o");
        word = word.replaceAll("71", "p");
        word = word.replaceAll("72", "q");
        word = word.replaceAll("73", "r");
        word = word.replaceAll("74", "s");
        word = word.replaceAll("81", "t");
        word = word.replaceAll("82", "u");
        word = word.replaceAll("83", "v");
        word = word.replaceAll("91", "w");
        word = word.replaceAll("92", "x");
        word = word.replaceAll("93", "y");
        word = word.replaceAll("94", "z");
        return word;
    }
    return backup;
}
exports.default = DePhone9Key;
