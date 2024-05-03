import { Produto } from "../../Entity/Produto"
import { ProdutoPersistenceInterface } from "./ProdutoPersistenceInterface"
import { ProdutoPresenterOutput } from "./ProdutoPresenterOutput"

export interface ExcluirProdutoInterface {
    presenter: ProdutoPresenterOutput
    repositoryProduto: ProdutoPersistenceInterface
    excluir(produto: Produto, excluirPedidos: boolean): Promise<object>
}