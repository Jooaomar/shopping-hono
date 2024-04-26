import { PedidoPresenterOutput } from './PedidoPresenterOutput';
import { Produto } from '../../Entity/Produto';
import { Pedido } from '../../Entity/Pedido';
import { ProdutoPresenterOutput } from './ProdutoPresenterOutput';
import { Cliente } from '../../Entity/Cliente';
import { PedidoPersistenceInterface } from './PedidoPersistenceInterface';
import { ProdutoPersistenceInterface } from './ProdutoPersistenceInterface';

export interface ComprarProdutoInterface {
    presenter: PedidoPresenterOutput
    repositoryPedido: PedidoPersistenceInterface
    repositoryProduto: ProdutoPersistenceInterface
    compra(venda: Pedido[], cliente: Cliente): Promise<object>
    buscaProdutos(pedidos: Pedido[]): Promise<Produto[]>
    efetuaPedido(produtos: Produto[], cliente: Cliente, quantidade: number): Promise<Produto[]>
}