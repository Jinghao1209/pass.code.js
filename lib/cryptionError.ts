export default class CryptionError extends Error {
    constructor(cryption: string, name: string, message: string) {
        super()
        this.name = `\`${cryption} : ${name}\``
        this.message = message
    }
}