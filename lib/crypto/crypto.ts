import crypto from "crypto";
import {
    RSAPrivateKeyEncoding,
    RSAPublicKeyEncoding,
} from "../../typings/types";

export { generateKeyPairSync } from "crypto";
export { randomUUID as generateUUID } from "crypto";

export function hash(
    data: crypto.BinaryLike,
    algorithm: string,
    encoding: crypto.BinaryToTextEncoding,
    options: crypto.HashOptions = {}
) {
    return crypto.createHash(algorithm, options).update(data).digest(encoding);
}

export function generateRSAKeyPair(
    length = 2048,
    privateKeyEncoding: RSAPrivateKeyEncoding = {},
    publicKeyEncoding: RSAPublicKeyEncoding = {}
) {
    return crypto.generateKeyPairSync("rsa", {
        modulusLength: length, // the length of your key in bits
        publicKeyEncoding: {
            type: "spki", // recommended to be 'spki' by the Node.js docs
            format: "pem",
            ...publicKeyEncoding as any,
        },
        privateKeyEncoding: {
            type: "pkcs8", // recommended to be 'pkcs8' by the Node.js docs
            format: "pem",
            ...privateKeyEncoding as any,
            // cipher: 'aes-256-cbc',
            // passphrase: 'top secret'
        },
    });
}

export function generateSalt(size: number = 16): string {
    return crypto.randomBytes(size).toString("hex");
}

export function addSalt(
    data: string,
    salt: string,
    addSaltOptions: crypto.ScryptOptions = {}
): string {
    return crypto.scryptSync(data, salt, 64, addSaltOptions).toString("hex");
}

export function saltMatch(data: string, salt: string, salty: string): boolean {
    const hashedBuffer = crypto.scryptSync(data, salt, 64);

    const keyBuffer = Buffer.from(salty, "hex");
    const match = crypto.timingSafeEqual(hashedBuffer, keyBuffer);

    return match ? true : false;
}
