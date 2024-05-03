import { Cliente } from "../../domain/Entity/Cliente"

export interface RepositoryClienteInterface{
    toSave(cliente: Cliente): void
};