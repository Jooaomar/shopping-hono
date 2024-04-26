import { Cliente } from '../domain/Entity/Cliente';
import { ClientePresenterOutput } from './../domain/UseCases/Interfaces/ClientePresenterOutput';
import { ViewModelCliente } from '../views/Client/ViewlModelCliente';

export class CadastrarClientePresenter implements ClientePresenterOutput{
    
    viewlModel = new ViewModelCliente()

    presentCadastrarClientePresenter(): object {
        // 
        return this.viewlModel.setClienteCriado();
    }

    presentExcluirClientePresenter(mensagem: string, nomeItem: string): object {
        // 
        return this.viewlModel.excluir('Usuário excluído', nomeItem)
    }

    presentInvalidCadastroError(e: Error): object {
        // 
        return this.viewlModel.setError("Erro ao criar usuário", e)
    }

    presentObterListaClientes(clientes: Cliente[], mensage: string): object {
        return this.viewlModel.clientes(clientes, mensage)
    }
}