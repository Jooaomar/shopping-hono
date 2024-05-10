import { Produto } from "../../Entity/Produto";
import { EditarProdutoInterface } from "../Interfaces/EditarProduto";
import { ProdutoPersistenceInterface } from "../Interfaces/ProdutoPersistenceInterface";
import { ProdutoPresenterOutput } from "../Interfaces/ProdutoPresenterOutput";
import { ExcluirPedidoInterface } from "../Interfaces/ExcluirPedido";
import { PedidoPresenterOutput } from "../Interfaces/PedidoPresenterOutput";
import { PedidoPersistenceInterface } from "../Interfaces/PedidoPersistenceInterface";
import { Pedido } from "../../Entity/Pedido";
import { ClientePersistenceInterface } from "../Interfaces/ClientePersistenceInterface";

export class ExcluirPedido implements ExcluirPedidoInterface{

    presenter: PedidoPresenterOutput;
    repositoryPedido: PedidoPersistenceInterface;
    repositoryCliente: ClientePersistenceInterface;
    repositoryProduto: ProdutoPersistenceInterface;

    constructor(
                presenter: PedidoPresenterOutput, 
                repositoryPedido: PedidoPersistenceInterface, 
                repositoryCliente: ClientePersistenceInterface,
                repositoryProduto: ProdutoPersistenceInterface
            ){
        this.presenter = presenter;
        this.repositoryPedido = repositoryPedido;
        this.repositoryCliente = repositoryCliente;
        this.repositoryProduto = repositoryProduto
    }

    async excluir(pedido: Pedido, excluirPedido=false): Promise<object> {
        if (excluirPedido === false || excluirPedido === undefined){
            return this.presenter.presentAlerta("Tem certeza que deseja excluir esse pedido?")
        }

        try {
            await this.repositoryPedido.delete(pedido);
            const cliente = await this.repositoryCliente.obtainOne(pedido.id_cliente)
            const produto = await this.repositoryProduto.getOne(pedido.id_produto)
            return this.presenter.presentExcluirPedidoPresenter(cliente, produto);
        } catch (error) {
            throw error
        }
    }
}