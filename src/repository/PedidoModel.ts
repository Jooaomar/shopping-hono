import { PedidoPersistenceInterface } from './../domain/UseCases/Interfaces/PedidoPersistenceInterface';
import { ProdutoPersistenceInterface } from './../domain/UseCases/Interfaces/ProdutoPersistenceInterface';
import { mapearProduto } from "./mapping/Produto";
import { mapearPedido } from './mapping/Pedido';
import { Produto } from "../domain/Entity/Produto";
import { ConfigPostgres } from "./Conf/Postgres/ConfigPostgres";
import { ProdutosPostgres } from './Conf/Postgres/ProdutosPostgres';
import { Pedido } from '../domain/Entity/Pedido';

export class PedidoModel implements PedidoPersistenceInterface {

    private produtoRepository = new ProdutosPostgres<Pedido>('vendas', mapearPedido);

    async create(pedido: Pedido){
        const res = await this.produtoRepository.toSave([
                pedido.id_cliente,
                pedido.id_produto,
                pedido.quantidade
            ]);
        return res
    }

    async getAll(): Promise<Pedido[]> {
        const res = await this.produtoRepository.getAll();
        return res
    }

    async getOne(id: number): Promise<Pedido> {
        const res = await this.produtoRepository.obtainOne(id);
        return res
    }

}