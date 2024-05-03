import { ClienteModel } from './../../ClienteModel';
import { describe, expect, test } from '@jest/globals';
import { Produto } from '../../../domain/Entity/Produto';
import { PedidosPostgres } from './PedidosPostgres';
import { mapearPedido } from '../../mapping/Pedido';
import { Pedido } from '../../../domain/Entity/Pedido';
import { Cliente } from '../../../domain/Entity/Cliente';
import { ProdutoModel } from '../../ProdutoModel';
import { CriarProduto } from '../../../domain/UseCases/Produto/CriarProdutos';
import { CriarProdutoPresenter } from '../../../presenter/ProdutoPresenter';
import { CadastrarClientePresenter } from '../../../presenter/CadastrarClientePresenter';
import { CadastroCliente } from '../../../domain/UseCases/Cliente/CadastroCliente';


describe('Armazenar pedidos', async () => {
    // const instancia = new ConfigPostgres('produto', mapearProduto)
    const instancia = new PedidosPostgres('pedidos', mapearPedido)

    const persistir = new ProdutoModel();
    const presenter = new CriarProdutoPresenter();
    const produto = new Produto(30,'Sapato10',3678.20,'http://home.armazem/12542154rs', 20, true);
    const produtoEmlista = new CriarProduto(persistir, presenter);
    produtoEmlista.adicionaLista(produto)
    produtoEmlista.listagem();
    await produtoEmlista.salvarProdutos();

    const persistirCliente = new ClienteModel();
    const presenterCliente = new CadastrarClientePresenter();
    const cadastroCliente = new CadastroCliente(persistirCliente, presenterCliente)
    const cliente = new Cliente(8, 'JM', 1234214141, true, {rua: 'jean', bairro: 'mafrense', cidade: 'tersina', estado: 'piauí', numero: 15})
    await cadastroCliente.cadastrar(cliente);



    const pedido1 = new Pedido(15, 8, cliente.id, produto.id, 5)

    test('Salvar pedidos no banco de dados', () => {
        expect(async () => await instancia.toSave(pedido1)).not.toThrow();
    })
})