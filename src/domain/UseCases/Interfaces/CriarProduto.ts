import { ProdutoPresenterOutput } from "./ProdutoPresenterOutput"
import { ProdutoPersistenceInterface } from "./ProdutoPersistenceInterface"

export interface CriarProdutoInterface {
    repository: ProdutoPersistenceInterface
    presenter: ProdutoPresenterOutput
}