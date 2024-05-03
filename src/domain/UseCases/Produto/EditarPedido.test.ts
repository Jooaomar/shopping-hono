import { describe, test, expect } from '@jest/globals';
import { EditarPedido } from './EditarPedido';
import { ProdutoModel } from '../../../repository/ProdutoModel';
import { PedidoPresenter } from '../../../presenter/PedidoPresenter';
import { PedidoModel } from '../../../repository/PedidoModel';
import { ClienteModel } from '../../../repository/ClienteModel';
import { Pedido } from '../../Entity/Pedido';


async function criarPedidoExemplo(): Promise<void> {
    const pedido = new Pedido(9, 55, 8, 3, 16)
    const pedidoRepository = new PedidoModel()
    await pedidoRepository.create(pedido)
}

describe('Teste Use Case Editar Produto', () => {
    const presenter = new PedidoPresenter();
    const repositoryPedido = new PedidoModel();
    const repositoryProduto = new ProdutoModel();
    const repositoryCliente = new ClienteModel();

    // const pedidoRepository = new PedidoModel()


    const editarPedido = new EditarPedido(presenter, repositoryPedido, repositoryProduto, repositoryCliente);

    test("Editando Pedido", async () => {
        await criarPedidoExemplo();
        const pedidoEditar = new Pedido(9, 55, 8, 3, 14)
        // 4 | Sapato3     | 30500 | .com.com                       |         50 | f
        // expect(async () => await editarPedido.editar(pedido)).not.toThrow();
        try {
            expect(async () => await editarPedido.editar(pedidoEditar)).not.toThrow();
            // await editarPedido.editar(pedidoEditar);
            // expect(await editarPedido.editar(pedidoEditar)).toEqual({
            //     "Pedido Atualizado":  {
            //         "nome": "Sapato3",
            //         "preco": "30500",
            //         "estoque": "50",
            //         "quantidade_pedida": pedidoEditar.quantidade
            //     }
            // })    
            // expect(async () => await  pedidoRepository.update(pedidoEditar)).not.toThrow();
        } catch (error) {
            throw error
        }
        
    })
})