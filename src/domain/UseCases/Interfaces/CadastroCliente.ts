import { Cliente } from "../../Entity/Cliente"
import { ClientePersistenceInterface } from "./ClientePersistenceInterface"
import { ClientePresenterOutput } from "./ClientePresenterOutput"

export interface CadastroClienteInterface{
    repository: ClientePersistenceInterface
    presenter: ClientePresenterOutput
    cadastrar(cliente: Cliente): object
}