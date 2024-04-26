import { ClienteInterface } from "./interfaces/ClienteInterface";

export class Cliente implements ClienteInterface{
    id: number
    nome: string
    cpf: number
    cadastrado: boolean
    endereco: { rua: string; bairro: string; cidade: string; estado: string; numero: number}

    constructor(id: number, nome: string, cpf: number,cadastrado: boolean,endereco: { rua: string; bairro: string; cidade: string; estado: string; numero: number; }){
        this.id = id
        this.nome = nome
        this.cpf = cpf
        this.cadastrado = cadastrado
        this.endereco = endereco
    }
}