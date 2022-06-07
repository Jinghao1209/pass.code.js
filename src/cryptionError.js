"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CryptionError extends Error {
    constructor(cryption, name, message) {
        super();
        this.name = `\`${cryption} : ${name}\``;
        this.message = message;
    }
}
exports.default = CryptionError;
