import { Pedido } from "../../Entity/Pedido";
import { Produto } from "../../Entity/Produto";
import { ClientePersistenceInterface } from "../Interfaces/ClientePersistenceInterface";
import { EditarPedidoInterface } from "../Interfaces/EditarPedido";
import { PedidoPersistenceInterface } from "../Interfaces/PedidoPersistenceInterface";
import { PedidoPresenterOutput } from "../Interfaces/PedidoPresenterOutput";
import { ProdutoPersistenceInterface } from "../Interfaces/ProdutoPersistenceInterface";

export class EditarPedido implements EditarPedidoInterface{
    presenter: PedidoPresenterOutput;
    repositoryPedido: PedidoPersistenceInterface;
    repositoryProduto: ProdutoPersistenceInterface;
    repositoryCliente: ClientePersistenceInterface;

    constructor(
                presenter: PedidoPresenterOutput, 
                repositoryPedido: PedidoPersistenceInterface, 
                repositoryProduto: ProdutoPersistenceInterface,
                repositoryCliente: ClientePersistenceInterface
            ){
        this.presenter = presenter;
        this.repositoryPedido = repositoryPedido;
        this.repositoryProduto = repositoryProduto;
        this.repositoryCliente = repositoryCliente;
    }


    async editar(pedido: Pedido): Promise<object> {
        const produto = await this.repositoryProduto.getOne(pedido.id_produto);

        if (pedido.quantidade > produto.quantidade) {
            console.log("Inválido editar")
            return this.presenter.presentInvalidError(`Quantidade indisponível! Quantidaed atual do produto ${produto.nome} é ${produto.quantidade}`)
        }
        console.log("Válido editar")

        try {
            await this.repositoryPedido.update(pedido);
            return this.presenter.presetEdtarPedido(pedido, produto);
        } catch (error) {
            throw error
        }
    }
}