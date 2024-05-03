import { Produto } from "../../Entity/Produto"
import { ProdutoPersistenceInterface } from "./ProdutoPersistenceInterface"
import { ProdutoPresenterOutput } from "./ProdutoPresenterOutput"

export interface EditarProdutoInterface {
    presenter: ProdutoPresenterOutput
    repositoryProduto: ProdutoPersistenceInterface
    editar(produto: Produto): Promise<object>
}