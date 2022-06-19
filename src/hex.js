"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToHex = exports.WordToHex = exports.HexToWord = void 0;
function HexToWord(hex) {
    return Buffer.from(hex, "hex").toString("utf8");
}
exports.HexToWord = HexToWord;
function WordToHex(word) {
    return Buffer.from(word).toString("hex");
}
exports.WordToHex = WordToHex;
function bufferToHex(buffer) {
    return buffer.toString("hex");
}
exports.bufferToHex = bufferToHex;
