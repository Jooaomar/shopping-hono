import { Produto } from "../Produto"

export interface PedidoInterface{
    id_produto: number
    id_cliente: number
    quantidade: number
}