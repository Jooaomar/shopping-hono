import { Cliente } from "../../Entity/Cliente";

export interface ClientePersistenceInterface{
    create(cliente: Cliente): any
    getAll(): Promise<Cliente[]>
    obtainOne(id: number): Promise<Cliente>
    update(cliente: Cliente): Promise<Cliente>
    delete(cliente: Cliente): Promise<Cliente>
}