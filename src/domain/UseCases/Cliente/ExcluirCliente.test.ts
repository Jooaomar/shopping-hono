import { ExcluirCliente } from './ExcluirCliente';
import { describe, expect, test } from '@jest/globals';
import { ClienteModel } from '../../../repository/ClienteModel';
import { Cliente } from '../../Entity/Cliente';
import { CadastrarClientePresenter } from '../../../presenter/CadastrarClientePresenter';
import { Pedido } from '../../Entity/Pedido';
import { PedidoPresenter } from '../../../presenter/PedidoPresenter';
import { ProdutoModel } from '../../../repository/ProdutoModel';
import { PedidoModel } from '../../../repository/PedidoModel';
import { CompraProduto } from '../Produto/CompraProduto';
import { Produto } from '../../Entity/Produto';

async function criarVenda() {
    // 
}

describe('Use case Excluir Cliente', async () => {

    // 2 | João | jean | mafrense | tersina | piauí  |          15 | 1234214141
    const cliente = new Cliente(2, 'João', 1234214141, true, {rua: 'jean', bairro: 'mafrense', cidade: 'tersina', estado: 'piauí', numero: 15})
    

    const persistir = new ClienteModel();
    const presenter = new CadastrarClientePresenter();
    const excluirCliente = new ExcluirCliente(presenter, persistir)

    test('Alerta ao tentar excluir', async () => {
        const res = await excluirCliente.excluir(cliente);
        try {
            expect(() => res).not.toThrow();
            expect(res).toEqual({
                mensage: "Você quer mesmo excluir o cliente?"
            })
        } catch (error) {
            throw error;
        }
    })
    test('Excluindo depois de confirmado', async () => {
        // const res = await excluirCliente.excluir(cliente, true);
        try {
            expect(async () => await excluirCliente.excluir(cliente, true)).not.toThrow();
            expect(await excluirCliente.excluir(cliente, true)).toEqual({
                excluir: {
                    "Excluindo cliente": "João",
                },
            })
        } catch (error) {
            throw error;
        }
    })
})