import { Produto } from "../../domain/Entity/Produto";

export interface ProdutoViewInterface{
    setProdutoCriado(): object;
    setError(mensgaem: string ,e: Error): object
    listarProduto(produto: Produto, mensagem: string): object
    produtos(produtos: Array<Produto>, mensage: string): object
}