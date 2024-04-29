// import { ProdutosPostgres } from "./Conf/Postgres/ProdutosPostgres";
import { Cliente } from "../domain/Entity/Cliente";
import { mapearCliente } from "./mapping/Cliente";
import { ClientePersistenceInterface } from "../domain/UseCases/Interfaces/ClientePersistenceInterface";
import { ClientesPostgres } from "./Conf/Postgres/ClientesPostgres";


export class ClienteModel implements ClientePersistenceInterface {
    private produtoRepository = new ClientesPostgres<Cliente>('cliente', mapearCliente);

    async create(cliente: Cliente) {
        const res = await this.produtoRepository.toSave([
            cliente.id,
            cliente.nome,
            cliente.endereco.rua,
            cliente.endereco.bairro,
            cliente.endereco.cidade,
            cliente.endereco.estado,
            cliente.endereco.numero,
            cliente.cpf,
        ])
    }

    async getAll(): Promise<Cliente[]> {
        const res = await this.produtoRepository.getAll()
        return res
    }
}