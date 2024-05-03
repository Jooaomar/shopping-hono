import { Produto } from "../../Entity/Produto"
import { ProdutoPersistenceInterface } from "./ProdutoPersistenceInterface"
import { ProdutoPresenterOutput } from "./ProdutoPresenterOutput"

export interface HabilitarProdutoInterface {
    presenter: ProdutoPresenterOutput
    repositoryProduto: ProdutoPersistenceInterface
    habilitar(produto: Produto): Promise<object>
}