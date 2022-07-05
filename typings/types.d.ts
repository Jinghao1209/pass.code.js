import crypto from "crypto";

export declare type ASCII = number[];
export declare type Hex = string;
export declare type MaybeKey<K> = {
    [key in keyof K]?: K[key];
};

//#region AES
export declare type AESAlgoAuthTag = Buffer;
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

type decoded = string;
type AESAlgoReturnType = [decoded, AESIv, crypto.Cipher, AESAlgoAuthTag];
export declare interface AESAlgorithm {
    "aes-128-ccm": AESAlgoReturnType;
    "aes-128-gcm": AESAlgoReturnType;
    "aes-192-ccm": AESAlgoReturnType;
    "aes-192-gcm": AESAlgoReturnType;
    "aes-256-ccm": AESAlgoReturnType;
    "aes-256-gcm": AESAlgoReturnType;
    "chacha20-poly1305": [decoded, AESIv, crypto.Cipher];
}
