import { Cliente } from "./Cliente";
import { PedidoInterface } from "./interfaces/PedidoInterface";
import { Produto } from "./Produto";

export class Pedido implements PedidoInterface {
    id_produto: number;
    id_cliente: number
    quantidade: number;

    constructor(id_cliente: number,id_produto: number, quantidade: number){
        this.id_produto = id_produto;
        this.id_cliente = id_cliente;
        this.quantidade = quantidade;
    }
}