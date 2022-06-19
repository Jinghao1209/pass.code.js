import { Hex } from "../typings/types";

export function HexToWord(hex: Hex): string {
    return Buffer.from(hex, "hex").toString("utf8");
}

export function WordToHex(word: string): Hex {
    return Buffer.from(word).toString("hex");
}

export function bufferToHex(buffer: Buffer): Hex {
    return buffer.toString("hex");
}
