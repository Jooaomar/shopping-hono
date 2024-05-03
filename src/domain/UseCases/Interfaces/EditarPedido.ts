import { Produto } from "../../Entity/Produto"
import { ProdutoPersistenceInterface } from "./ProdutoPersistenceInterface"
import { PedidoPresenterOutput } from "./PedidoPresenterOutput";
import { PedidoPersistenceInterface } from "./PedidoPersistenceInterface";
import { Pedido } from "../../Entity/Pedido";

export interface EditarPedidoInterface {
    presenter: PedidoPresenterOutput;
    repositoryPedido: PedidoPersistenceInterface
    repositoryProduto: ProdutoPersistenceInterface;
    editar(pedido: Pedido, quantidade: number): Promise<object>
}