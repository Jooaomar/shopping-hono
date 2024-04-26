import { Cliente } from '../../Entity/Cliente';
import { ClientePersistenceInterface } from '../Interfaces/ClientePersistenceInterface';
import { ClientePresenterOutput } from '../Interfaces/ClientePresenterOutput';
import { CadastroClienteInterface } from './../Interfaces/CadastroCliente';

export class CadastroCliente implements CadastroClienteInterface{

    repository: ClientePersistenceInterface;
    presenter: ClientePresenterOutput;

    constructor(repository: ClientePersistenceInterface, presenter: ClientePresenterOutput){
        this.repository = repository
        this.presenter = presenter
    }

    async cadastrar(cliente: Cliente) {
        try {
            await this.repository.create(cliente);
            return this.presenter.presentCadastrarClientePresenter();
        } catch (error) {
            throw error;
        }
    }
}