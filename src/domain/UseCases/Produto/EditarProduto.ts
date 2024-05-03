import { Produto } from "../../Entity/Produto";
import { EditarProdutoInterface } from "../Interfaces/EditarProduto";
import { ProdutoPersistenceInterface } from "../Interfaces/ProdutoPersistenceInterface";
import { ProdutoPresenterOutput } from "../Interfaces/ProdutoPresenterOutput";

export class EditarProduto implements EditarProdutoInterface{

    presenter: ProdutoPresenterOutput;
    repositoryProduto: ProdutoPersistenceInterface;

    constructor(presenter: ProdutoPresenterOutput, repository: ProdutoPersistenceInterface){
        this.presenter = presenter;
        this.repositoryProduto = repository;
    }

    async editar(produto: Produto): Promise<object> {
        try {
            await this.repositoryProduto.update(produto);
            return this.presenter.presentEditarProduto(produto);
        } catch (error) {
            throw new Error(`Erro ao atuazlizar, ${error}`);   
        }
    }
}