import crypto from "crypto";
import { AESAlgoGCMAuthTag, AESAlgorithm, AESIv } from "../../typings/types";
import CryptionError from "../cryptionError";

export function AES<K extends keyof AESAlgorithm>(algorithm: K, key: Buffer, returnType: BufferEncoding) {
    const encrypt = (data: string): AESAlgorithm[K] => {
        const iv = crypto.randomBytes(12);
        const cipher = crypto.createCipheriv(algorithm, key, iv);

        // Hint: Larger inputs (it's GCM, after all!) should use the stream API
        let enc = cipher.update(data, "utf8", returnType);
        enc += cipher.final(returnType);

        if (
            algorithm === "aes-128-gcm" ||
            algorithm === "aes-192-gcm" ||
            algorithm === "aes-256-gcm"
        ) {
            return [
                enc,
                iv,
                cipher,
                (cipher as crypto.CipherGCM).getAuthTag(),
            ] as never; // `as never` because of type error
        } else if (
            algorithm === "aes-128-ccm" ||
            algorithm === "aes-192-ccm" ||
            algorithm === "aes-256-ccm" ||
            algorithm === "chacha20-poly1305"
        ) {
            return [enc, iv, cipher] as never; // `as never` because of type error
        }

        return null as never; // `as never` because of type error
    };

    const decrypt = (
        encoded: string,
        iv: AESIv,
        authTag?: AESAlgoGCMAuthTag
    ) => {
        const decipher = crypto.createDecipheriv(algorithm, key, iv);

        if (algorithm.includes("gcm")) {
            if (typeof authTag === "undefined")
                throw new CryptionError(
                    "AES",
                    "authTag undefined",
                    "authTag is required in GCM!"
                );
            (decipher as crypto.DecipherGCM).setAuthTag(authTag);
        }
        let str = decipher.update(encoded, returnType, "utf-8");
        return str;
    };

    return {
        encrypt,
        decrypt,
    };
}
