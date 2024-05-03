import { ProdutoPresenterOutput } from '../Interfaces/ProdutoPresenterOutput';
import { ExibirProdutoInterface } from "../Interfaces/ExibirProdutos";
import { ProdutoPersistenceInterface } from "../Interfaces/ProdutoPersistenceInterface";
import { Produto } from '../../Entity/Produto';


export class ExibirProdutos implements ExibirProdutoInterface{

    repository: ProdutoPersistenceInterface;
    presenter: ProdutoPresenterOutput;

    constructor(repository: ProdutoPersistenceInterface, presenter: ProdutoPresenterOutput){
        this.repository = repository;
        this.presenter = presenter;
    }
    
    async getAllProdutos(): Promise<object>{
        const result = await this.repository.getAll();
        return this.presenter.presentObterLista(result, "Lista de Produtos");
    }

    async getProduto(id: number): Promise<object> {
        const result = await this.repository.getOne(id);
        return this.presenter.presentEditarProduto(result);
    }


}