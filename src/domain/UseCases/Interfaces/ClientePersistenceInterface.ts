import { Cliente } from "../../Entity/Cliente";

export interface ClientePersistenceInterface{
    create(cliente: Cliente): any
    getAll(): Promise<Cliente[]>
    update(cliente: Cliente): Promise<Cliente>
    delete(cliente: Cliente): Promise<Cliente>
}