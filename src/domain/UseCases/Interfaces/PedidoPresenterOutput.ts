import { Produto } from "../../Entity/Produto";
import { Cliente } from "../../Entity/Cliente";
import { Pedido } from "../../Entity/Pedido";

export interface PedidoPresenterOutput{
    presentSalvarPedidoPresenter(): object;
    presentInvalidError(mensage: string): object;
    presentInvalidCreateError(e: Error): object;
    presentInvalidCompraError(e: Error, mensagem: string): object;
    presentExcluirPedidoPresenter(mensagem: string, nomeItem: string): object
    presentInvalidListaPedidos(e: Error): object;
    presentObterLista(pedidos: Array<Produto>, cliente: Cliente): object;
    presentEfetuarCompra(pedidos: Array<Produto>, cliente: Cliente): object
    presetEdtarPedido(pedido: Pedido, produto: Produto): object;
}