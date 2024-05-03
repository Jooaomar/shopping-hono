import { describe, expect, test } from '@jest/globals';
import { CadastroCliente } from './CadastroCliente';
import { ClienteModel } from '../../../repository/ClienteModel';
import { Cliente } from '../../Entity/Cliente';
import { CadastrarClientePresenter } from '../../../presenter/CadastrarClientePresenter';

describe('Use case Cadastrar Clientes', () => {

    const persistir = new ClienteModel();
    const presenter = new CadastrarClientePresenter();
    const cadastroCliente = new CadastroCliente(persistir, presenter)

    test('Fazer cadastro de cliente', async () => {
        const cliente = new Cliente(1, 'Marcelo', 1234214141, true, {rua: 'jean', bairro: 'mafrense', cidade: 'tersina', estado: 'piauí', numero: 15})
        const res = await cadastroCliente.cadastrar(cliente);
        try {
            expect(() => res).not.toThrow();
            expect(res).toEqual({"Ok": "Cliente cadastrado!"})
        } catch (error) {
            throw error;
        }
    })
})