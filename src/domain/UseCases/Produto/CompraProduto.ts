import { Pedido } from "../../Entity/Pedido";
import { ProdutoPresenterOutput } from "../Interfaces/ProdutoPresenterOutput";
import { ComprarProdutoInterface } from "../Interfaces/CompraProduto";
import { Produto } from "../../Entity/Produto";
import { ProdutoPersistenceInterface } from "../Interfaces/ProdutoPersistenceInterface";
import { Cliente } from "../../Entity/Cliente";
import { ListarProduto } from "./ListarProduto";
import { PedidoPersistenceInterface } from "../Interfaces/PedidoPersistenceInterface";
import { PedidoPresenterOutput } from "../Interfaces/PedidoPresenterOutput";

export class CompraProduto implements ComprarProdutoInterface {

    presenter: PedidoPresenterOutput;
    repositoryPedido: PedidoPersistenceInterface
    repositoryProduto: ProdutoPersistenceInterface;

    constructor(presenter: PedidoPresenterOutput, repositoryPedido: PedidoPersistenceInterface, repositoryProduto: ProdutoPersistenceInterface){
        this.presenter = presenter
        this.repositoryPedido = repositoryPedido
        this.repositoryProduto = repositoryProduto
    }

    async compra(pedidos: Pedido[], cliente: Cliente): Promise<object> {

        const produtos = await this.efetuaPedido(pedidos)
                            .then((listarProduto) => this.presenter.presentObterLista(listarProduto, cliente))
                            .catch((erro) => {
                                throw this.presenter.presentInvalidCompraError(erro, "erro ao buscar produto");
                            });
                
        return produtos
    }


    async efetuaPedido(pedidos: Pedido[]): Promise<Produto[]> {
        const produtos = []
        try {
            for (const pedido of pedidos) {
                const produto = await this.repositoryProduto.getOne(pedido.id_produto);
                await this.repositoryPedido.create(pedido)
                produtos.push(produto)
            }
            return produtos;
        } catch (error) {
            throw error
        }
    }


}