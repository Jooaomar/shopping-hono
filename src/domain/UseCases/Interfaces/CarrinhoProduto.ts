import { Produto } from "../../Entity/Produto"
import { ProdutoPresenterOutput } from './ProdutoPresenterOutput';

export interface CarrinhoProdutoInterface{
    carrinhoProduto: Array<Produto>;
    presenter: ProdutoPresenterOutput
    adiciona(produto: Produto): object
    exclui(produto: Produto): object
    listagem(): object
}