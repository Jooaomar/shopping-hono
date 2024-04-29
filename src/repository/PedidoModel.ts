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

    private pedidoRepository = new PedidosPostgres<Pedido>('peididos', mapearPedido);

    async create(pedido: Pedido){
        const res = await this.pedidoRepository.toSave([
                pedido.id_cliente,
                pedido.id_produto,
                pedido.quantidade
            ]);
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

}