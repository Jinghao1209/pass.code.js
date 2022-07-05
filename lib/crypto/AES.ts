import crypto from "crypto";
import { AESAlgoAuthTag, AESAlgorithm, AESIv } from "../../typings/types";
import CryptionError from "../cryptionError";

export function AES<K extends keyof AESAlgorithm>(
    algorithm: K,
    key: Buffer,
    returnType: BufferEncoding
) {
    const encrypt = (data: string): AESAlgorithm[K] => {
        const iv = crypto.randomBytes(12);
        const cipher = crypto.createCipheriv(algorithm, key, iv, {
            ...({ authTagLength: 16 } as any),
        }) as crypto.CipherGCM;

        // Hint: Larger inputs (it's GCM, after all!) should use the stream API
        let enc = cipher.update(data, "utf8", returnType);
        enc += cipher.final(returnType);

        return [enc, iv, cipher, cipher.getAuthTag()] as never; // `as never` because of type error
    };

    const decrypt = (encoded: string, iv: AESIv, authTag?: AESAlgoAuthTag) => {
        const decipher = crypto.createDecipheriv(algorithm, key, iv, {
            ...({ authTagLength: 16 } as any),
        }) as any;

        if (algorithm.includes("gcm")) {
            if (typeof authTag === "undefined")
                throw new CryptionError(
                    "AES",
                    "authTag undefined",
                    "authTag is required in GCM!"
                );
        } else if (algorithm.includes("ccm")) {
            if (typeof authTag === "undefined")
                throw new CryptionError(
                    "AES",
                    "authTag undefined",
                    "authTag is required in CCM!"
                );
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
