import { ProdutoPresenterOutput } from '../Interfaces/ProdutoPresenterOutput';
import { ProdutoPersistenceInterface as ProdutoPersistence} from '../Interfaces/ProdutoPersistenceInterface';
import { Produto } from "../../Entity/Produto";
import { CriarProdutoInterface } from "../Interfaces/CriarProduto";
import { ListarProduto } from './ListarProduto';

export class CriarProduto extends ListarProduto implements CriarProdutoInterface{
    repository: ProdutoPersistence
    presenter: ProdutoPresenterOutput
    listaProduto!: Array<Produto>;


    constructor(repository: ProdutoPersistence, presenter: ProdutoPresenterOutput){
        super();
        this.repository = repository;
        this.presenter = presenter;
    }

    adicionaLista(produto: Produto): object {
        try {
            this.setLista(produto)
            return this.presenter.presentListaProdutos(produto, 'Produto listado');
        } catch (error) {
            throw this.presenter.presentInvalidListaProdutos(new Error('Not in push!'))
        }
    }

    listagem(): object {
        try {
            this.listaProduto = this.getLista()
            return this.presenter.presentObterLista(this.listaProduto, "Lista de produtos");
        } catch (error) {
            throw error
        }
    }

    async salvarProdutos(){

        if (!this.listaProduto || this.listaProduto.length === 0) {
            throw new Error("Sem produto listado");
        }

        try {
            for (const produto of this.listaProduto) {
                await this.repository.create(produto)
            }
            return this.presenter.presentSalvarProdutoPresenter();
        } catch (error) {
            throw this.presenter.presentInvalidCreateError(new Error(`Erro ao salvar: ${error}`));
        }
    }
}