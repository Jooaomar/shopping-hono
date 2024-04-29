import { ProdutoPresenterOutput } from '../domain/UseCases/Interfaces/ProdutoPresenterOutput';
import { ViewModelProduto } from "../views/Produto/ViewModelProduto";
import { Produto } from "../domain/Entity/Produto";
import { ProdutoViewInterface } from "./interfaces/ProdutoViewInterface";
import { Cliente } from '../domain/Entity/Cliente';

export class CriarProdutoPresenter implements ProdutoPresenterOutput{
    // 
    viewModel = new ViewModelProduto()

    presentSalvarProdutoPresenter(): object {
        // Validar se produto existe
        return this.viewModel.setProdutoCriado();
    }

    presentExcluirProdutoPresenter(mensagem: string, nomeItem: string): object {
        return this.viewModel.excluir(mensagem, nomeItem);
    }

    presentInvalidCreateError(e: Error): object {
        // this.viewModel.setError(e);
        return this.viewModel.setError("Erro ao criar produto",e);
    }

    presentInvalidCompraError(e: Error, mensagem: string): object {
        return this.viewModel.setError(mensagem, e);
    }

    presentListaProdutos(produto: Produto, mensagem: string): object {
        return this.viewModel.listarProduto(produto, mensagem);
    }

    presentObterLista(produtos: Array<Produto>, mensage: string): object {
        return this.viewModel.produtos(produtos, mensage)
    }

    presentInvalidListaProdutos(e: Error): object {
        return this.viewModel.setError("Erro ao listar produtos", e)
    }

    presentCompraProduto(produtos: Produto[], cliente: Cliente): object {
        // Fazer ainda
        return {}
    }

}