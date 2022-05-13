"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saltMatch = exports.addSalt = exports.generateSalt = exports.generateRSAKeyPair = exports.hash = exports.generateUUID = exports.generateKeyPairSync = void 0;
const crypto_1 = __importDefault(require("crypto"));
var crypto_2 = require("crypto");
Object.defineProperty(exports, "generateKeyPairSync", { enumerable: true, get: function () { return crypto_2.generateKeyPairSync; } });
var crypto_3 = require("crypto");
Object.defineProperty(exports, "generateUUID", { enumerable: true, get: function () { return crypto_3.randomUUID; } });
function hash(data, algorithm, encoding, options = {}) {
    return crypto_1.default.createHash(algorithm, options).update(data).digest(encoding);
}
exports.hash = hash;
function generateRSAKeyPair(length = 2048, privateKeyEncoding = {}, publicKeyEncoding = {}) {
    return crypto_1.default.generateKeyPairSync("rsa", {
        modulusLength: length,
        publicKeyEncoding: {
            type: "spki",
            format: "pem",
            ...publicKeyEncoding,
        },
        privateKeyEncoding: {
            type: "pkcs8",
            format: "pem",
            ...privateKeyEncoding,
            // cipher: 'aes-256-cbc',
            // passphrase: 'top secret'
        },
    });
}
exports.generateRSAKeyPair = generateRSAKeyPair;
function generateSalt(size = 16) {
    return crypto_1.default.randomBytes(size).toString("hex");
}
exports.generateSalt = generateSalt;
function addSalt(data, salt, addSaltOptions = {}) {
    return crypto_1.default.scryptSync(data, salt, 64, addSaltOptions).toString("hex");
}
exports.addSalt = addSalt;
function saltMatch(data, salt, salty) {
    const hashedBuffer = crypto_1.default.scryptSync(data, salt, 64);
    const keyBuffer = Buffer.from(salty, "hex");
    const match = crypto_1.default.timingSafeEqual(hashedBuffer, keyBuffer);
    return match ? true : false;
}
exports.saltMatch = saltMatch;
