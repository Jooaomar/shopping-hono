import { Cliente } from "../../Entity/Cliente";
import { ClientePersistenceInterface } from "../Interfaces/ClientePersistenceInterface";
import { ClientePresenterOutput } from "../Interfaces/ClientePresenterOutput";
import { EditarClienteInterface } from "../Interfaces/EditarCliente";

export class EditarCliente implements EditarClienteInterface{
    presenter: ClientePresenterOutput;
    repositoryCliente: ClientePersistenceInterface;

    constructor(presenter: ClientePresenterOutput, repositoryCliente: ClientePersistenceInterface){
        this.presenter = presenter;
        this.repositoryCliente = repositoryCliente;
    }

    async editar(cliente: Cliente): Promise<object> {
        try {
            await this.repositoryCliente.update(cliente);
            return this.presenter.presentEditarCliente(cliente);
        } catch (error) {
            return new Error(`Erro ao atuazlizar, ${error}`);   
        }
    }
}