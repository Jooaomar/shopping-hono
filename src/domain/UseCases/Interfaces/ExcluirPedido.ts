import { PedidoPresenterOutput } from "./PedidoPresenterOutput";
import { PedidoPersistenceInterface } from "./PedidoPersistenceInterface";
import { ClientePersistenceInterface } from "./ClientePersistenceInterface";
import { ProdutoPersistenceInterface } from "./ProdutoPersistenceInterface";
import { Pedido } from "../../Entity/Pedido";


export interface ExcluirPedidoInterface {
    presenter: PedidoPresenterOutput;
    repositoryPedido: PedidoPersistenceInterface;
    repositoryCliente: ClientePersistenceInterface;
    repositoryProduto: ProdutoPersistenceInterface;
    excluir(pedido: Pedido, excluirPedido: boolean): Promise<object>
}