"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AES = void 0;
const crypto_1 = __importDefault(require("crypto"));
const cryptionError_1 = __importDefault(require("../cryptionError"));
function AES(algorithm, key, returnType) {
    const encrypt = (data) => {
        const iv = crypto_1.default.randomBytes(12);
        const cipher = crypto_1.default.createCipheriv(algorithm, key, iv, {
            ...{ authTagLength: 16 },
        });
        // Hint: Larger inputs (it's GCM, after all!) should use the stream API
        let enc = cipher.update(data, "utf8", returnType);
        enc += cipher.final(returnType);
        return [enc, iv, cipher, cipher.getAuthTag()]; // `as never` because of type error
    };
    const decrypt = (encoded, iv, authTag) => {
        const decipher = crypto_1.default.createDecipheriv(algorithm, key, iv, {
            ...{ authTagLength: 16 },
        });
        if (algorithm.includes("gcm")) {
            if (typeof authTag === "undefined")
                throw new cryptionError_1.default("AES", "authTag undefined", "authTag is required in GCM!");
        }
        else if (algorithm.includes("ccm")) {
            if (typeof authTag === "undefined")
                throw new cryptionError_1.default("AES", "authTag undefined", "authTag is required in CCM!");
        }
        decipher.setAuthTag(authTag);
        let str = decipher.update(encoded, returnType, "utf-8");
        return str;
    };
    return {
        encrypt,
        decrypt,
    };
}
exports.AES = AES;
