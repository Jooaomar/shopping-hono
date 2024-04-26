import { Cliente } from "../../domain/Entity/Cliente"

export function mapearCliente(valores: Cliente) {
    return new Cliente(valores.id, valores.nome, valores.cpf, valores.cadastrado, valores.endereco)
}