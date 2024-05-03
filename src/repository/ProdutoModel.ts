import { ProdutoPersistenceInterface } from './../domain/UseCases/Interfaces/ProdutoPersistenceInterface';
import { mapearProduto } from "./mapping/Produto";
import { Produto } from "../domain/Entity/Produto";
import { ConfigPostgres } from "./Conf/Postgres/ConfigPostgres";
import { ProdutosPostgres } from './Conf/Postgres/ProdutosPostgres';

export class ProdutoModel implements ProdutoPersistenceInterface {

    private produtoRepository = new ProdutosPostgres<Produto>('produto', mapearProduto);

    async create(produto: Produto){
        const res = await this.produtoRepository.toSave(produto);
        return res
    }

    async getAll(): Promise<Produto[]> {
        const res = await this.produtoRepository.getAll();
        return res
    }

    async getOne(id: number): Promise<Produto> {
        const res = await this.produtoRepository.obtainOne(id);
        return res
    }

    async update(produto: Produto){
        const res = await this.produtoRepository.update(produto)
        return res;
    }

    async delete(produto: Produto): Promise<Produto> {
        const res =  await this.produtoRepository.delete(produto);
        return res;
    }

}