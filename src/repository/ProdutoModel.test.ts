import { describe, expect, test } from '@jest/globals';
import { ProdutoModel } from './ProdutoModel';
import { Produto } from '../domain/Entity/Produto';

describe('Testes de ProdutoModel', () => {
    const produto = new Produto(3, 'testeProdu', 444, 'jmjmjmjm', 20, true)

    test('Criar produto no banco', () => {
        const repository = new ProdutoModel()
        try {
            expect(() => repository.create(produto)).not.toThrow()            
        } catch (error) {
            throw error;
        }
    })
    test('Buscar produto específico', async () => {
        try {
            const repository = new ProdutoModel()
            expect((await repository.getOne(3)).nome).toBe("testeProdu")
        } catch (error) {
            throw error
        }
    })
})