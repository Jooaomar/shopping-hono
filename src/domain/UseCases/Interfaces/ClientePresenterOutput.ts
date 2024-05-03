import { Cliente } from "../../Entity/Cliente";

export interface ClientePresenterOutput{
    presentCadastrarClientePresenter(): object
    presentInvalidCadastroError(e: Error): object;
    presentExcluirClientePresenter(mensagem: string, nomeItem: string): object
    presentObterListaClientes(clientes: Array<Cliente>, mensage: string): object;
    presentEditarCliente(cliente: Cliente): object
    presentAlerta(mensage: string): object
}