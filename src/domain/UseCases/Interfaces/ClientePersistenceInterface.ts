import { Cliente } from "../../Entity/Cliente";

export interface ClientePersistenceInterface{
    create(cliente: Cliente): any;
    getAll(): Promise<Cliente[]>; 
}