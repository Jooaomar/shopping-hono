// import { ProdutosPostgres } from "./Conf/Postgres/ProdutosPostgres";
import { Cliente } from "../domain/Entity/Cliente";
import { mapearCliente } from "./mapping/Cliente";
import { ClientePersistenceInterface } from "../domain/UseCases/Interfaces/ClientePersistenceInterface";
import { ClientesPostgres } from "./Conf/Postgres/ClientesPostgres";


export class ClienteModel implements ClientePersistenceInterface {
    private ClienteRepository = new ClientesPostgres<Cliente>('cliente', mapearCliente);

    async create(cliente: Cliente) {
        const res = await this.ClienteRepository.toSave(cliente)
    }

    async getAll(): Promise<Cliente[]> {
        const res = await this.ClienteRepository.getAll()
        return res
    }

    async update(cliente: Cliente): Promise<Cliente> {
        const res = await this.ClienteRepository.update(cliente)
        return res
    }

    async delete(cliente: Cliente): Promise<Cliente> {
        const res =  await this.ClienteRepository.delete(cliente);
        return res;
    }
}