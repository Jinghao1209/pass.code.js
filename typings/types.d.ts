export declare type ASCII = number[];
export declare type MaybeKey<K> = {
    [key in keyof K]?: K[key];
};
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
