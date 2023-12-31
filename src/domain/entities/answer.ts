import { randomUUID } from "node:crypto"

export class Answer {
    public id: string
    public content: string
    constructor(content: string, id?: string) {
        this.id = randomUUID()
        this.content = content
    }
}
