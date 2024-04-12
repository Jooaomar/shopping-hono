import { ProdutoInterface as ProdutoEntity } from "../domain/Entity/interfaces/ProdutoInterface";
import { ProdutoPersistenceInterface } from "../domain/UseCases/Interfaces/ProdutoUseCaseInterface";
import { ConfigPostgres } from "./Conf/ConfigPostgres";


export class ProdutoModel implements ProdutoPersistenceInterface {

    // produto: ProdutoEntity;
    private produtoRepository = new ConfigPostgres('produto');


    create(produto: ProdutoEntity): void {
        //
        try {
            this.produtoRepository.toSave([
                produto.id, 
                produto.image, 
                produto.nome, 
                produto.preco
            ])
        } catch (error) {
            throw error
        }
    }

    getProduto(): ProdutoEntity {
        // 
    }

    list(): Array<ProdutoEntity> {
        // 
    }
}