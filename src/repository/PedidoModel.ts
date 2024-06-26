import { PedidoPersistenceInterface } from './../domain/UseCases/Interfaces/PedidoPersistenceInterface';
import { ProdutoPersistenceInterface } from './../domain/UseCases/Interfaces/ProdutoPersistenceInterface';
import { mapearProduto } from "./mapping/Produto";
import { mapearPedido } from './mapping/Pedido';
import { Produto } from "../domain/Entity/Produto";
import { ConfigPostgres } from "./Conf/Postgres/ConfigPostgres";
import { ProdutosPostgres } from './Conf/Postgres/ProdutosPostgres';
import { PedidosPostgres } from './Conf/Postgres/PedidosPostgres';
import { Pedido } from '../domain/Entity/Pedido';

export class PedidoModel implements PedidoPersistenceInterface {

    private pedidoRepository = new PedidosPostgres<Pedido>('pedidos', mapearPedido);

    async create(pedido: Pedido){
        const res = await this.pedidoRepository.toSave(pedido);
        return res
    }

    async getAll(): Promise<Pedido[]> {
        const res = await this.pedidoRepository.getAll();
        return res
    }

    async getOne(id: number): Promise<Pedido> {
        const res = await this.pedidoRepository.obtainOne(id);
        return res
    }

    async update(pedido: Pedido){
        const res = await this.pedidoRepository.update(pedido);
        return res;
    }

    async delete(pedido: Pedido): Promise<void>{
        const res = await this.pedidoRepository.delete(pedido);
        return res;
    }

}