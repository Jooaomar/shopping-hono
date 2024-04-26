import { ProdutoPresenterOutput } from '../Interfaces/ProdutoPresenterOutput';
import { ExibirProdutoInterface } from "../Interfaces/ExibirProdutos";
import { ProdutoPersistenceInterface } from "../Interfaces/ProdutoPersistenceInterface";


export class ExibirProdutos implements ExibirProdutoInterface{
    
    async getAllProdutos(repository: ProdutoPersistenceInterface, presenter: ProdutoPresenterOutput): Promise<object>{
        const result = await repository.getAll();
        return presenter.presentObterLista(result, "Lista de Produtos");
    }
}