import { Pedido } from "../../domain/Entity/Pedido"


export function mapearPedido(valores: Pedido) {
    return new Pedido(valores.id_cliente, valores.id_produto, valores.quantidade)
}