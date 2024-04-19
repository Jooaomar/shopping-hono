import { Produto } from "../../Entity/Produto";

export interface ProdutoPresenterOutput{
    presentSalvarProdutoPresenter(): object;
    presentInvalidCreateError(e: Error): object;
    presentExcluirProdutoPresenter(mensagem: string, nomeItem: string): object
    presentListaProdutos(produto: Produto, mensagem: string): object;
    presentInvalidListaProdutos(e: Error): object;
    presentObterLista(produtos: Array<Produto>, mensage: string): object;
}