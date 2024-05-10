import { describe, test, expect } from '@jest/globals';
import { ProdutoModel } from '../../../repository/ProdutoModel';
import { ClienteModel } from '../../../repository/ClienteModel';
import { Pedido } from '../../Entity/Pedido';
import { ExcluirPedido } from './ExcluirPedidos';
import { CriarProdutoPresenter } from '../../../presenter/ProdutoPresenter';
import { PedidoPresenter } from '../../../presenter/PedidoPresenter';
import { PedidoModel } from '../../../repository/PedidoModel';
import { CriarProduto } from './CriarProdutos';
import { Produto } from '../../Entity/Produto';
import { Cliente } from '../../Entity/Cliente';

async function criarPedidoParaTeste(repositoryProduto: ProdutoModel, repositoryCliente: ClienteModel, repositoryPedido: PedidoModel) {
    
    const produto = new Produto(11, 'bicke', 655, 'wqhndwqjkxn', 89, true);
    await repositoryProduto.create(produto)

    const cliente = new Cliente(5, 'Marcelo', 77777, true, {
                                                            rua: 'luiz ferreira', 
                                                            bairro: 'mafrense', 
                                                            cidade: 'teresina',
                                                            estado: 'piauí',
                                                            numero: 1051});
    await repositoryCliente.create(cliente)

    const pedido = new Pedido(20, 908, cliente.id, produto.id, 6)
    await repositoryPedido.create(pedido)

    return pedido
}


describe('Teste Use Case Excluir Pedidos', async () => {
    const presenter = new PedidoPresenter();
    const repositoryProduto = new ProdutoModel();
    const repositoryCliente = new ClienteModel();
    const repositoryPedido = new PedidoModel();

    const pedido = await criarPedidoParaTeste(repositoryProduto, repositoryCliente, repositoryPedido)

    const excluir = new ExcluirPedido(presenter, repositoryPedido, repositoryCliente, repositoryProduto);

    test("Alerta de excluindo pedido", async () => {
        const res = await excluir.excluir(pedido);
        expect(async () => res).not.toThrow();
        expect(res).toEqual({
            mensage: "Tem certeza que deseja excluir esse pedido?"
        })
    })
    test("Confirmando excluindo pedido", async () => {
        const res = await excluir.excluir(pedido, true);
        // expect(() => res).not.toThrow();
        expect(res).toEqual({
            "excluir": {
                    cliente: "Marcelo",
                    produto: {
                        nome: "bicke",
                        preco: 655,
                        quantidade: 89,
                    }, 

            }
        })
    })
})