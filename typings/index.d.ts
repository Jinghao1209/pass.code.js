import type {
    BinaryLike,
    BinaryToTextEncoding,
    HashOptions,
    KeyPairSyncResult,
    RsaPrivateKey,
    RsaPublicKey,
    ScryptOptions,
} from "crypto";
import type {
    AESAlgoGCMAuthTag,
    AESAlgorithm,
    AESIv,
    ASCII,
    Hex,
    MaybeKey,
    RSAPrivateKeyEncoding,
    RSAPublicKeyEncoding,
} from "./types";
export * as crypto from "crypto";
export * from "./types";

export function wordToASCII(word: string): ASCII;
export function ASCIItoWord(word: ASCII): string;
export function bufferToHex(buffer: Buffer): Hex;

/**
 * 加密字符 Encrypted characters or word
 * more safe than version v1.0.0
 * @link https://zh.wikipedia.org/wiki/ASCII#可显示字符
 * @link https://en.wikipedia.org/wiki/ASCII#Printable_characters
 */
export function Encryption(word: ASCII, style?: string): string;
/**
 * more safe than v1.0.0
 * @param encryption the encryption string
 * @param style the encryption style, by default is "13", but here don't have set it, please write the encryption style
 * @returns ascii
 */
export function Decryption(encryption: string, style: string): ASCII;

export function EnPhone9Key(word: string): string;
export function DePhone9Key(word: string): string;

export function EnRailFenceCipher(word: string): string;
export function DeRailFenceCipher(word: string): string;

export function WordToHex(word: string): Hex;
export function HexToWord(hex: Hex): string;

/**
 * @readonly this is undefined
 * @author module from nodejs build-in crypto
 * @author import("crypto");
 *
 * @function crypto
 * @function addSalt
 * @function AES
 * @function generateKeyPairSync
 * @function generateRSAKeyPair
 * @function generateSalt
 * @function hash
 * @function privateDecrypt
 * @function publicEncrypt
 * @function randomUUID
 * @function saltMatch
 * @warn not support all functionality
 * @link https://nodejs.org/api/crypto.html
 */
export const _cryptoInfo: {
    crypto: typeof import("crypto");
    addSalt: typeof addSalt;
    AES: typeof AES;
    generateKeyPairSync: typeof import("crypto").generateKeyPairSync;
    generateRSAKeyPair: typeof generateRSAKeyPair;
    generateSalt: typeof generateSalt;
    hash: typeof hash;
    privateDecrypt: typeof privateDecrypt;
    publicEncrypt: typeof publicEncrypt;
    randomUUID: typeof import("crypto").randomUUID;
    saltMatch: typeof saltMatch;
};

export { generateKeyPairSync } from "crypto";
export { randomUUID as generateUUID } from "crypto";

/**
 * @author import("crypto").createHash
 * @description from function:
 *
 * this function that can be used to create a new hash
 *
 * library use from nodejs build-in module
 * @description from crypto.createHash:
 *
 * Creates and returns a `Hash` object that can be used to generate hash digests
 * using the given `algorithm`. Optional `options` argument controls stream
 * behavior. For XOF hash functions such as `'shake256'`, the `outputLength` option
 * can be used to specify the desired output length in bytes.
 *
 * The `algorithm` is dependent on the available algorithms supported by the
 * version of OpenSSL on the platform. Examples are `'sha256'`, `'sha512'`, etc.
 * On recent releases of OpenSSL, `openssl list -digest-algorithms`(`openssl list-message-digest-algorithms` for older versions of OpenSSL) will
 * display the available digest algorithms.
 *
 * Example: generating the sha256
 *
 * ```js
 * const { hash } = require("pass.code.js");
 * let str = hash(
 *     "this is a password", // the data that you want to encrypt
 *     "sha256", // the algorithm that you want to use
 *     "hex" // that string that you want
 * );
 *
 * // 289ca48885442b5480dd76df484e1f90867a2961493b7c60e542e84addce5d1e
 * console.log(str);
 * ```
 * @since crypto v0.1.92
 * @param options `stream.transform` options
 */
export function hash(
    data: BinaryLike,
    algorithm: string,
    encoding: BinaryToTextEncoding,
    options?: HashOptions
): string;

/**
 * @warn do not play `privateKeyEncoding` | `publicKeyEncoding` because don't have any types check, if options error, you will get a error
 *
 * this is a simple generate rsa from
 *
 * ```js
 * const {
 *     generateKeyPairSync
 * } = await import("crypto")
 * ```
 *
 * @param length default is 2048
 */
export function generateRSAKeyPair(
    length?: number,
    privateKeyEncoding?: RSAPrivateKeyEncoding,
    publicKeyEncoding?: RSAPublicKeyEncoding
): KeyPairSyncResult<string, string>;

/**
 * a simple random bytes from
 * ```js
 * import("crypto").randomBytes
 * ```
 * @param size number that the salt length, default is `16`
 * @return hex string, length - `size` * 2
 */
export function generateSalt(size?: number): string;

/**
 * Example:
 * ```js
 * const { addSalt, generateSalt } = require('pass.code.js')
 * const salt = generateSalt();
 * const salty = addSalt("password", salt);
 * console.log(salty);
 * ```
 * @param data this is a string that haven't been hash or encoded, means original
 * @param salt salt should be hex, or just use function `generateSalt(...)`
 * @param addSaltOptions scrypt options
 */
export function addSalt(
    data: string,
    salt: string,
    addSaltOptions?: ScryptOptions
): string;

/**
 * salt match same as function `addSalt(...)`, but this is matching the value.
 *
 * Example:
 *
 * ```js
 * const {
 *     addSalt,
 *     generateSalt,
 *     saltMatch
 * } = require("pass.code.js");
 * const salt = generateSalt(32);
 * const cryptoPassword = "password";
 * const afterSalting = addSalt("password", salt);
 * console.log("salt:", salt);
 * console.log("before add salt:", cryptoPassword);
 * console.log("after  add salt:", afterSalting);
 * console.log(
 *     saltMatch("password", salt, afterSalting)
 *         ? "✔️ good password"
 *         : "❌ password does not match"
 * );
 * ```
 *
 * @param data this is a string that haven't been hash or encoded, means original
 * @param salt this is the salt that the `salty` used
 * @param salty a hex after `addSalt(...)`, the salt should be same as param `salt`
 */
export function saltMatch(data: string, salt: string, salty: string): boolean;

/**
 * A simple encryption.
 *
 *
 * ```js
 * const {
 *     crypto,
 *     generateRSAKeyPair,
 *     publicEncrypt,
 * } = require("pass.code.js");
 *
 * const { publicKey } = generateRSAKeyPair();
 * const content = "This is an sentence";
 *
 * const encryptedData = publicEncrypt(
 *     // We convert the data string to a buffer using `Buffer.from`
 *     Buffer.from(content),
 *     publicKey,
 *     {
 *         // RSA_PKCS1_OAEP_PADDING as default
 *         // for those who don't need padding, set to:
 *         // padding: undefined,
 *         padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
 *         // `pass.code.js` change algorithm `SHA3-512` as default
 *         oaepHash: "sha3-512",
 *     }
 * );
 * ```
 *
 * @from import("crypto").publicEncrypt
 * @from import("pass.code.js").crypto.publicEncrypt
 */
export function publicEncrypt(
    content: NodeJS.ArrayBufferView,
    publicKey: string,
    options?: MaybeKey<RsaPublicKey | RsaPrivateKey>
): Buffer;

/**
 * A simple decryption.
 *
 *
 * ```js
 * const decryptedData = privateDecrypt(
 *     encryptedData, // see function pass.code.js/publicEncrypt()
 *     privateKey,
 *     {
 *         // RSA_PKCS1_OAEP_PADDING as default
 *         padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
 *         // SHA3-512 as default
 *         oaepHash: "sha3-512",
 *     }
 * );
 *
 * // The decrypted data is of the Buffer type, which we can convert to a
 * // string to reveal the original data
 * // same as `content`
 * console.log("Decrypted data: ", decryptedData.toString());
 * ```
 *
 * @from import("crypto").privateDecrypt
 * @from import("pass.code.js").crypto.privateDecrypt
 */
export function privateDecrypt(
    content: NodeJS.ArrayBufferView,
    privateKey: string,
    options?: MaybeKey<RsaPublicKey | RsaPrivateKey>
): Buffer;

/**
 * Use `crypto.createCipheriv` and `crypto.createDecipheriv` to encrypt and decrypt.
 * 
 * `iv` is generated by `crypto.randomBytes`
 * 
 * encrypt function: the first returned value is always same to `returnType`, add something like:
 * ```js
 * let aes = AES("S");
 * let [encoded, iv, cipher, authTag] = aes.encrypt(...); // authTag is optional, if using algo ccm, authTag will be undefined and sometimes throw error
 * ```
 * 
 * decrypt data function:
 * ```js
 * aes.decrypt(encoded, "hex", iv, authTag);
 * ```
 * 
 * @example
 * ```ts
 * import passcode, { AES } from "../passcode.source.js";
 * const KEY128 = passcode.generateSalt(128 / 8); // 16 bytes
 * const KEY192 = passcode.generateSalt(192 / 8); // 24 bytes
 * const KEY256 = passcode.generateSalt(256 / 8); // 32 bytes
 * 
 * // so sorry for the hard code, `KEY256` can be other key, it's ok
 * const { encrypt, decrypt } = AES(
 *     "aes-256-gcm",
 *     Buffer.from(KEY256, "hex"),
 *     "base64"
 * );
 * 
 * const content = "This is an sentence";
 * const [encoded, iv, cipher, authTag] = encrypt(content); // `cipher` maybe will be deprecated in the future
 * const decryptedData = decrypt(encoded, iv, authTag);
 * 
 * console.log(encoded); // any character like `foxLVM2nCSQ/aBeuUq6dKHgWaA==`
 * console.log(decryptedData); // This is an sentence
 * ```
 */
export function AES<K extends keyof AESAlgorithm>(algorithm: K, key: Buffer, returnType: BufferEncoding): {
    encrypt: (data: string) => AESAlgorithm[K];
    decrypt: (encoded: string, iv: AESIv, authTag?: AESAlgoGCMAuthTag) => string;
};