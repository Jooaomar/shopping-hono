import { ClientePresenterOutput } from './ClientePresenterOutput';
import { ClientePersistenceInterface } from './ClientePersistenceInterface';
import { Cliente } from '../../Entity/Cliente';

export interface EexcluirClienteInterface{
    presenter: ClientePresenterOutput
    repositoryCliente: ClientePersistenceInterface
    excluir(cliente: Cliente, excluirCliente: boolean): Promise<object>
}