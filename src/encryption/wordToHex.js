"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function WordToHex(word) {
    let hex = Buffer.from(word).toString("hex");
    return hex;
}
exports.default = WordToHex;
