import { Produto } from "../../Entity/Produto";
import { HabilitarProdutoInterface } from "../Interfaces/HabilitarProduti";
import { ProdutoPersistenceInterface } from "../Interfaces/ProdutoPersistenceInterface";
import { ProdutoPresenterOutput } from "../Interfaces/ProdutoPresenterOutput";

export class HabilitarProduto implements HabilitarProdutoInterface{

    presenter: ProdutoPresenterOutput;
    repositoryProduto: ProdutoPersistenceInterface;

    constructor(presenter: ProdutoPresenterOutput, repositoryProduto: ProdutoPersistenceInterface){
        this.presenter = presenter;
        this.repositoryProduto = repositoryProduto;
    }

    async habilitar(produto: Produto): Promise<object> {
        try {
            produto.setHabilitado();
            await this.repositoryProduto.update(produto);
            return this.presenter.presentEditarProduto(produto);
        } catch (error) {
            throw error
        }
    }
}