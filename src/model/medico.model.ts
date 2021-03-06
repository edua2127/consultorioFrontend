import { Especialidade } from "@/model/especialidade";
import { Pessoa } from "./pessoa.model";

export class Medico extends Pessoa {
    crm!: string
    porcentParticipacao!: number
    consultorio!: string
    especialidade!: Especialidade

    constructor() {
        super()
        this.ativo = true
    }
}