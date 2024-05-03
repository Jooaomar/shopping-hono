import { ClientePresenterOutput } from './ClientePresenterOutput';
import { ClientePersistenceInterface } from './ClientePersistenceInterface';
import { Cliente } from '../../Entity/Cliente';

export interface EditarClienteInterface{
    presenter: ClientePresenterOutput
    repositoryCliente: ClientePersistenceInterface
    editar(cliente: Cliente): Promise<object>
}