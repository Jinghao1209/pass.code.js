import crypto from "crypto";

export declare type ASCII = number[];
export declare type MaybeKey<K> = {
    [key in keyof K]?: K[key];
};

//#region AES
export declare type AESAlgoGCMAuthTag = Buffer;
export declare type AESIv = string;
//#endregion

export declare interface RSAPublicKeyEncoding {
    format?: KeyFormat;
    type?: "pkcs1" | "spki";
}

export declare interface RSAPrivateKeyEncoding {
    cipher?: string | undefined;
    format?: KeyFormat;
    passphrase?: string | undefined;
    type?: "pkcs1" | "pkcs8";
}

export declare interface AESAlgorithm {
    "aes-128-ccm": [string, AESIv, crypto.Cipher];
    "aes-128-gcm": [string, AESIv, crypto.Cipher, AESAlgoGCMAuthTag];
    "aes-192-ccm": [string, AESIv, crypto.Cipher];
    "aes-192-gcm": [string, AESIv, crypto.Cipher, AESAlgoGCMAuthTag];
    "aes-256-ccm": [string, AESIv, crypto.Cipher];
    "aes-256-gcm": [string, AESIv, crypto.Cipher, AESAlgoGCMAuthTag];
    "chacha20-poly1305": [string, AESIv, crypto.Cipher];
}

