import { ProdutoPersistenceInterface } from "./ProdutoPersistenceInterface"
import { ProdutoPresenterOutput } from "./ProdutoPresenterOutput"
import { Produto } from "../../Entity/Produto"

export interface ExibirProdutoInterface {
    repository: ProdutoPersistenceInterface
    presenter: ProdutoPresenterOutput
    getAllProdutos(): Promise<object>
    getProduto(id: number): Promise<object>
}