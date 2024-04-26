import { ProdutoPersistenceInterface } from './../domain/UseCases/Interfaces/ProdutoPersistenceInterface';
import { mapearProduto } from "./mapping/Produto";
import { Produto } from "../domain/Entity/Produto";
import { ConfigPostgres } from "./Conf/Postgres/ConfigPostgres";
import { ProdutosPostgres } from './Conf/Postgres/ProdutosPostgres';

export class ProdutoModel implements ProdutoPersistenceInterface {

    private produtoRepository = new ProdutosPostgres<Produto>('produto', mapearProduto);

    async create(produto: Produto){
        const res = await this.produtoRepository.toSave([
                produto.getId(),
                produto.getNome(),
                produto.getPreco(),
                produto.getImage()
            ]);
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

}