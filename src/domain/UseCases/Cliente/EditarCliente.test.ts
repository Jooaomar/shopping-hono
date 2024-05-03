import { describe, expect, test } from '@jest/globals';
import { EditarCliente } from './EditarCliente';
import { ClienteModel } from '../../../repository/ClienteModel';
import { Cliente } from '../../Entity/Cliente';
import { CadastrarClientePresenter } from '../../../presenter/CadastrarClientePresenter';

describe('Use case Editar Clientes', () => {

    const persistir = new ClienteModel();
    const presenter = new CadastrarClientePresenter();
    const editarCliente = new EditarCliente(presenter, persistir)

    test('Editar cadastro', async () => {
        const cliente = new Cliente(1, 'Marcelo', 111111111, true, {rua: 'jean', bairro: 'mafrense', cidade: 'tersina', estado: 'piauí', numero: 15})
        const res = await editarCliente.editar(cliente);
        try {
            expect(() => res).not.toThrow();
            expect(res).toEqual({
                "Cliente Editado": {
                    bairro: "mafrense",
                    cadastrado: true,
                    cidade: "tersina",
                    cpf: 111111111,
                    estado: "piauí",
                    id: 1,
                    nome: "Marcelo",
                    numero: 15,
                    rua: "jean",
                },
            })
        } catch (error) {
            throw error;
        }
    })
})