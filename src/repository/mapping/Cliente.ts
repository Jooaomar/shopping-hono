import { Cliente } from "../../domain/Entity/Cliente"

export function mapearCliente(valores: Cliente) {
    return new Cliente(1, valores.nome, valores.cpf, valores.cadastrado, valores.endereco)
}