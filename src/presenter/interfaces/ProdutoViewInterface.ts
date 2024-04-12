import { ProdutoInterface } from "../../domain/Entity/interfaces/ProdutoInterface";

export interface ProdutoViewInterface{
    setProdutoCriado(): object;
    setError(mensgaem: string ,e: Error): object
    listarProduto(produto: ProdutoInterface): object
    produtos(produtos: Array<ProdutoInterface>): object
}