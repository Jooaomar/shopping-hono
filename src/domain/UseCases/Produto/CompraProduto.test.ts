import { describe, expect, test } from '@jest/globals';
import { CompraProduto } from './CompraProduto';
import { CriarProdutoPresenter } from '../../../presenter/ProdutoPresenter';
import { ProdutoModel } from '../../../repository/ProdutoModel';
import { Produto } from '../../Entity/Produto';
import { Cliente } from '../../Entity/Cliente';
import { Pedido } from '../../Entity/Pedido';
import { PedidoModel } from '../../../repository/PedidoModel';
import { PedidoPresenter } from '../../../presenter/PedidoPresenter';

describe('Teste Use Case CompraProduto', () => {
  const presenter = new PedidoPresenter();
  const persistenceProduto = new ProdutoModel();
  const persistencePedido = new PedidoModel()

  const venda = new CompraProduto(presenter, persistencePedido, persistenceProduto)
  test('Comprar produtos existentes', async () => {
    const produto = new Produto(1,'Sapato1',155.20,'http://home.armazem/12542154rs', 20, true);
    const produto2 = new Produto(4, 'Sapato3', 30000, 'wwww.com.br', 20, true)
    const produto3 = new Produto(4, 'Sapato6', 765, 'com.br', 30, true)

    const cliente = new Cliente(1, 'Marcelo', 1234214141, true, {rua: 'jean', bairro: 'mafrense', cidade: 'tersina', estado: 'piauí', numero: 15})
    
    const pedido1 = new Pedido(2, 2, cliente.id, produto.id, 2)
    const pedido2 = new Pedido(3, 3, cliente.id, produto2.id, 1)
    const pedido3 = new Pedido(4, 6, cliente.id, produto3.id, 10)

    const res = await venda.compra([pedido1, pedido2, pedido3], cliente)
    expect(() => res).not.toThrow();
    expect(res).toEqual(
      {
        cliente: {
          nome: "Marcelo",
          cpf: 1234214141,
          cadastrado: true,
          endereco: {
            rua: "jean",
            bairro: "mafrense",
            cidade: "tersina",
            estado: "piauí",
            numero: 15,
          },
        },
        produtos_comprados: [
          {
            nome: "Sapato1",
            preco: 155.2,
            image: "http://home.armazem/12542154rs",
          }, {
            nome: "Sapato3",
            preco: 30000,
            image: "wwww.com.br",
          }, {
            image: "wwww.com.br",
            nome: "Sapato3",
            preco: 30000,
          }
        ],
      }
    )
  })

  test("Teste erro ao tentar comprar produtos não existentes", async () => {
    const produto = new Produto(15,'Sapato1',155.20,'http://home.armazem/12542154rs', 20, true);
    const produto2 = new Produto(30, 'Sapato3', 30000, 'wwww.com.br', 20, true)
    const cliente = new Cliente(2, 'Marcelo', 1234214141, true, {rua: 'jean', bairro: 'mafrense', cidade: 'tersina', estado: 'piauí', numero: 15})
    const pedido1 = new Pedido(8, 4,cliente.id, produto.id, 2)
    const pedido2 = new Pedido(10, 5,cliente.id, produto2.id, 1)

    expect(async () => await venda.compra([pedido1, pedido2], cliente)).toThrow()
  })
})