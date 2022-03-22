import crypto from "crypto";
import { MaybeKey } from "../../typings/types";

export function publicEncrypt(
    content: NodeJS.ArrayBufferView,
    publicKey: string,
    options: MaybeKey<crypto.RsaPublicKey | crypto.RsaPrivateKey> = {}
) {
    return crypto.publicEncrypt(
        {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha3-512",
            ...options,
        },
        content
    );
}

export function privateDecrypt(
    content: NodeJS.ArrayBufferView,
    privateKey: string,
    options: MaybeKey<crypto.RsaPublicKey | crypto.RsaPrivateKey> = {}
) {
    return crypto.privateDecrypt(
        {
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha3-512",
            ...options,
        },
        content
    );
}
