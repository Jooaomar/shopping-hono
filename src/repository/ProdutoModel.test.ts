import { describe, expect, test } from '@jest/globals';
import { ProdutoModel } from './ProdutoModel';
import { Produto } from '../domain/Entity/Produto';

describe('Testes de ProdutoModel', () => {
    const produto = new Produto(10,'testeProdu', 444, 'jmjmjmjm')

    test('Criar produto no banco', () => {
        const repository = new ProdutoModel()
        try {
            expect(() => repository.create(produto)).not.toThrow()            
        } catch (error) {
            throw error;
        }
    })
})