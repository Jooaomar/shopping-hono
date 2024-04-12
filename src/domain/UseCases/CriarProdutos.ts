import { ProdutoInterface as Produto } from "../Entity/interfaces/ProdutoInterface";
import { ProdutoPersistenceInterface as ProdutoPersistence } from "./Interfaces/ProdutoUseCaseInterface";
import { ProdutoPresenterOutput } from "./Interfaces/ProdutoUseCaseInterface";

export class CriarProduto{
    private salvar: ProdutoPersistence
    private presenter: ProdutoPresenterOutput
    private lista: Array<Produto> = [];


    constructor(create: ProdutoPersistence, presenter: ProdutoPresenterOutput){
        this.salvar = create;
        this.presenter = presenter;
    }

    setLista(produto: Produto): object{
        try {
            this.lista.push(produto)
            return this.presenter.presentListaProdutos(produto);
        } catch (error) {
            throw this.presenter.presentInvalidListaProdutos(new Error('Not in push!'))
        }
    }

    getLista(): object{
        // return this.lista;
        return this.presenter.presentObterLista(this.lista);
    }

    salvarProdutos(){
        if (this.lista) {
            try {
                this.lista.forEach(produto => {
                    this.salvar.create(produto)
                    return this.presenter.presentSalvarProdutoPresenter();
                });
            } catch (error) {
                throw this.presenter.presentInvalidCreateError(new Error(`Erro ao salvar: ${error}`));
            }   
        } else {
            throw new Error("Sem produto listado");
        }

    }
}