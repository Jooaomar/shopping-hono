import { ProdutoInterface as ProdutoEntity} from "../domain/Entity/interfaces/ProdutoInterface";
import { ProdutoPersistenceInterface } from "../domain/UseCases/Interfaces/ProdutoUseCaseInterface";
import { ConfigPostgres } from "./Conf/ConfigPostgres";

export class ProdutoModel implements ProdutoPersistenceInterface {

    // produto: ProdutoEntity;
    
    
    create(produto: ProdutoEntity): void {
        // 
    }

    getProduto(): ProdutoEntity {
        // 
    }

    list(): Array<ProdutoEntity> {
        // 
    }
}