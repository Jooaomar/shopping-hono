import { describe, expect, test } from '@jest/globals';
import { ClienteModel } from './ClienteModel';
import { Cliente } from '../domain/Entity/Cliente';

describe('Teste de ClienteModel', () => {
    const cliente = new Cliente(2, 'João', 1234214141, true, {rua: 'jean', bairro: 'mafrense', cidade: 'tersina', estado: 'piauí', numero: 15})

    test('Criar usuário cliente no banco de dados', () => {
        const repository = new ClienteModel()

        try {
            expect(() => repository.create(cliente)).not.toThrow()
        } catch (error) {
            throw error;
        }
    })
})