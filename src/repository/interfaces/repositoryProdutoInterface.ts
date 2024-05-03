import { Produto } from "../../domain/Entity/Produto"


export interface RepositoryProdutoInterface{
    toSave(produto: Produto): void
};