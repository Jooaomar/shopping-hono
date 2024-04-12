import { ProdutoInterface } from "../../Entity/interfaces/ProdutoInterface";

export interface ProdutoPersistenceInterface{
    create(produto: ProdutoInterface): void; 
    getProduto(): ProdutoInterface; 
    list(): Array<ProdutoInterface>;
}

export interface ProdutoPresenterOutput{
    presentSalvarProdutoPresenter(): object;
    presentInvalidCreateError(e: Error): object;
    presentListaProdutos(produto: ProdutoInterface): object;
    presentInvalidListaProdutos(e: Error): object;
    presentObterLista(produtos: Array<ProdutoInterface>): object;
}