import { Produto } from './../../Entity/Produto';
import { ListarProdutoInterface } from './ListarProduto';

export interface ComprarProduto {
    comprar(produtos: Array<Produto>, cliente: object): void
}