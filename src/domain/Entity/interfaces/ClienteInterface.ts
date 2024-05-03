export interface ClienteInterface {
    id: number
    nome: string
    endereco: {rua: string, bairro: string, cidade: string, estado: string, numero: number}
}