import { Produto } from "../../Entity/Produto";
import { ExcluirProdutoInterface } from "../Interfaces/ExcluirProduto";
import { ProdutoPersistenceInterface } from "../Interfaces/ProdutoPersistenceInterface";
import { ProdutoPresenterOutput } from "../Interfaces/ProdutoPresenterOutput";

export class ExcluirProduto implements ExcluirProdutoInterface{
    
    presenter: ProdutoPresenterOutput;
    repositoryProduto: ProdutoPersistenceInterface;

    constructor(repository: ProdutoPersistenceInterface, presenter: ProdutoPresenterOutput){
        this.presenter = presenter;
        this.repositoryProduto = repository;
    }

    async excluir(produto: Produto, excluirPedidos=false): Promise<object> {
        // 
        if (excluirPedidos === false || excluirPedidos === undefined){
            return this.presenter.presentAlerta("Tem certeza? Isso irá excluir também os pedidos relacionados a este produto! Você pode apenas desabilitar o produto.")
        }

        try {
            await this.repositoryProduto.delete(produto);
            return this.presenter.presentExcluirProduto(produto);
        } catch (error) {
            throw error
        }
    }
}