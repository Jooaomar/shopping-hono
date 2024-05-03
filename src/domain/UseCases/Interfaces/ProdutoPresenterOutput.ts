import { Produto } from "../../Entity/Produto";
import { Cliente } from "../../Entity/Cliente";

export interface ProdutoPresenterOutput{
    presentSalvarProdutoPresenter(): object;
    presentInvalidCreateError(e: Error): object;
    presentInvalidCompraError(e: Error, mensagem: string): object;
    presentExcluirProdutoPresenter(mensagem: string, nomeItem: string): object
    presentListaProdutos(produto: Produto, mensagem: string): object;
    presentInvalidListaProdutos(e: Error): object;
    presentObterLista(produtos: Array<Produto>, mensage: string): object;
    presentCompraProduto(produtos: Array<Produto>, cliente: Cliente): object
    presentEditarProduto(produto: Produto): object
    presentExcluirProduto(produto: Produto): object
    presentAlerta(mensage: string): object
}