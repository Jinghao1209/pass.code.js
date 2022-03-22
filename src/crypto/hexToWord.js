"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function HexToWord(hex) {
    var str = "";
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}
exports.default = HexToWord;
