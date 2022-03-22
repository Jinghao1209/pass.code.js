export default function WordToHex(word: string): string {
    let hex = Buffer.from(word).toString("hex");
    return hex;
}