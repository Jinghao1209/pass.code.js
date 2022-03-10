import type {
    BinaryLike,
    BinaryToTextEncoding,
    HashOptions,
    KeyPairSyncResult,
    ScryptOptions,
} from "crypto";

export declare type ASCII = number[];
export function wordToASCII(word: string): ASCII;
export function ASCIItoWord(word: ASCII): string;

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

export function WordToHex(word: string): string;
/**
 * Not Support Chinese Word...
 */
export function HexToWord(hex: string): string;

/**
 * @readonly this is undefined
 * @author module from nodejs build-in crypto
 * @author import("crypto");
 *
 * @function addSalt
 * @function generateKeyPairSync
 * @function generateRSAKeyPair
 * @function generateSalt
 * @function hash
 * @function saltMatch
 * @warn not support all functionality
 * @link https://nodejs.org/api/crypto.html
 */
export const _cryptoInfo: {
    addSalt: typeof addSalt;
    generateKeyPairSync: typeof import("crypto").generateKeyPairSync;
    generateRSAKeyPair: typeof generateRSAKeyPair;
    generateSalt: typeof generateSalt;
    hash: typeof hash;
    saltMatch: typeof saltMatch;
};

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

export { generateKeyPairSync } from "crypto";
/**
 * this is a simple generate rsa from
 *
 * ```js
 * const {
 *     generateKeyPairSync
 * } = await import("crypto")
 * ```
 */
export function generateRSAKeyPair(): KeyPairSyncResult<string, string>;
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
