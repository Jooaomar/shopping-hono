import { ProdutoPresenterOutput } from '../domain/UseCases/Interfaces/ProdutoPresenterOutput';
import { ViewModelProduto } from "../views/Produto/ViewModelProduto";
import { Produto } from "../domain/Entity/Produto";
import { ProdutoViewInterface } from "./interfaces/ProdutoViewInterface";
import { Cliente } from '../domain/Entity/Cliente';
import { PedidoPresenterOutput } from '../domain/UseCases/Interfaces/PedidoPresenterOutput';
import { Pedido } from '../domain/Entity/Pedido';
import { ViewModelPedido } from '../views/Pedido/VielModelPedido';

export class PedidoPresenter implements PedidoPresenterOutput{
    // 
    viewModel = new ViewModelPedido()

    presentSalvarPedidoPresenter(): object {
        // Validar se produto existe
        return this.viewModel.setPedidoCriado();
    }

    presentExcluirPedidoPresenter(cliente: Cliente, produto: Produto): object {
        return this.viewModel.excluir(cliente, produto);
    }

    presentInvalidCreateError(e: Error): object {
        // this.viewModel.setError(e);
        return this.viewModel.setError("Erro ao criar produto",e);
    }

    presentInvalidCompraError(e: Error, mensagem: string): object {
        return this.viewModel.setError(mensagem, e);
    }


    presentObterLista(produtos: Array<Produto>, cliente: Cliente): object {
        return this.viewModel.pedidos(produtos, cliente)
    }

    presentInvalidListaPedidos(e: Error): object {
        return this.viewModel.setError("Erro ao listar produtos", e)
    }

    presentEfetuarCompra(produtos: Produto[], cliente: Cliente): object {
        return this.viewModel.pedidos(produtos, cliente)
    }

    presetEdtarPedido(pedido: Pedido, produto: Produto): object {
        return this.viewModel.editar(pedido, produto);
    }

    presentInvalidError(mensage: string): object {
        return this.viewModel.setError(mensage, new Error("Sem estoque"))
    }

    presentAlerta(mensage: string): object {
        return this.viewModel.alerta(mensage)
    }
}