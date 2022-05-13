"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.privateDecrypt = exports.publicEncrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
function publicEncrypt(content, publicKey, options = {}) {
    return crypto_1.default.publicEncrypt({
        key: publicKey,
        padding: crypto_1.default.constants.RSA_PKCS1_OAEP_PADDING,
        ...options,
    }, content);
}
exports.publicEncrypt = publicEncrypt;
function privateDecrypt(content, privateKey, options = {}) {
    return crypto_1.default.privateDecrypt({
        key: privateKey,
        padding: crypto_1.default.constants.RSA_PKCS1_OAEP_PADDING,
        ...options,
    }, content);
}
exports.privateDecrypt = privateDecrypt;
