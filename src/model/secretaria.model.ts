import { Pessoa } from "./pessoa.model";

export class Secretaria extends Pessoa {
    salario!: number
    dataContracacao!: Date
    pis!: string

    constructor() {
        super()
        this.ativo = true
    }
}