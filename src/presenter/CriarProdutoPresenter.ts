import { ProdutoPresenterOutput } from "../domain/UseCases/Interfaces/ProdutoUseCaseInterface";
import { ProdutoViewInterface } from "./interfaces/ProdutoViewInterface";
import { ViewModelProduto } from "../views/Produto/ViewModelProduto";
import { ProdutoInterface } from "../domain/Entity/interfaces/ProdutoInterface";

export class CriarProdutoPresenter implements ProdutoPresenterOutput{
    // 
    viewModel: ProdutoViewInterface = new ViewModelProduto()

    presentSalvarProdutoPresenter(): object {
        // Validar se produto existe
        return this.viewModel.setProdutoCriado();
    }

    presentInvalidCreateError(e: Error): object {
        // this.viewModel.setError(e);
        return this.viewModel.setError("Erro ao criar produto",e);
    }

    presentListaProdutos(produto: ProdutoInterface): object {
        return this.viewModel.listarProduto(produto);
    }

    presentObterLista(produtos: Array<ProdutoInterface>): object {
        return this.viewModel.produtos(produtos)
    }

    presentInvalidListaProdutos(e: Error): object {
        return this.viewModel.setError("Erro ao listar produtos", e)
    }
}