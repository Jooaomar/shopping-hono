import { Produto } from "../Entity/Produto";
import { CarrinhoProdutoInterface } from "./Interfaces/CarrinhoProduto";
import { ListarProduto } from "./ListarProduto";
import { ProdutoPresenterOutput } from "./Interfaces/ProdutoPresenterOutput";

export class CarrinhoProduto extends ListarProduto implements CarrinhoProdutoInterface{

    carrinhoProduto!: Produto[];
    presenter: ProdutoPresenterOutput;

    constructor(presenter: ProdutoPresenterOutput){
        super();
        this.presenter = presenter
    }

    adiciona(produto: Produto): object {
        try {
            this.setLista(produto)
            return this.presenter.presentListaProdutos(produto, 'Produto adicionado ao carrinho');
        } catch (error) {
            throw this.presenter.presentInvalidListaProdutos(new Error('Not in push!'))
        }
    }

    exclui(produto: Produto): object {
        try {
            this.excluirValue(produto.id)
            return this.presenter.presentExcluirProdutoPresenter('Excluir do carrinho', produto.nome)
        } catch (error) {
            throw error
        }
    }

    listagem(): object {
        this.carrinhoProduto = this.getLista();
        return this.presenter.presentObterLista(this.carrinhoProduto, "Carrinho")
    }
}