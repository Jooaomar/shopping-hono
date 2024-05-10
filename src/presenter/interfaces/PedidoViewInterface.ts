import { Produto } from "../../domain/Entity/Produto";
import { Cliente } from "../../domain/Entity/Cliente";
import { Pedido } from "../../domain/Entity/Pedido";

export interface PedidoViewInterface{
    alerta(mensage: string): object
    setPedidoCriado(): object;
    setError(mensgaem: string ,e: Error): object
    excluir(cliente: Cliente, produto: Produto): object
    pedidos(produtos: Produto[], cliente: Cliente):object
    editar(pedido: Pedido, produto: Produto): object
}