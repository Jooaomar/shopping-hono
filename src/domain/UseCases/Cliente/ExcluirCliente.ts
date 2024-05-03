import { Cliente } from "../../Entity/Cliente";
import { ClientePersistenceInterface } from "../Interfaces/ClientePersistenceInterface";
import { ClientePresenterOutput } from "../Interfaces/ClientePresenterOutput";
import { EexcluirClienteInterface } from "../Interfaces/ExcluirCliente";

export class ExcluirCliente implements EexcluirClienteInterface {
    presenter: ClientePresenterOutput;
    repositoryCliente: ClientePersistenceInterface;


    constructor(presenter: ClientePresenterOutput, repositoryCliente: ClientePersistenceInterface){
        this.presenter = presenter;
        this.repositoryCliente = repositoryCliente;
    }

    async excluir(cliente: Cliente, excluirCliente=false): Promise<object> {

        if (excluirCliente === false || excluirCliente === undefined){
            return this.presenter.presentAlerta("Você quer mesmo excluir o cliente?")
        }

        try {
            const res = await this.repositoryCliente.delete(cliente);
            return this.presenter.presentExcluirClientePresenter("Excluindo cliente", cliente.nome)
        } catch (error) {
            throw error;
        }
    }
}