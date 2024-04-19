import { ProdutoPersistenceInterface } from "./ProdutoPersistenceInterface"
import { ProdutoPresenterOutput } from "./ProdutoPresenterOutput"

export interface ExibirProdutoInterface {
    getAllProdutos(repository: ProdutoPersistenceInterface, presenter: ProdutoPresenterOutput): Promise<object>
}