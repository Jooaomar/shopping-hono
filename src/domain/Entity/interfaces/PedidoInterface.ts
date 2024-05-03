import { Produto } from "../Produto"

export interface PedidoInterface{
    id: number
    codigo_pedido: number
    id_produto: number
    id_cliente: number
    quantidade: number
}