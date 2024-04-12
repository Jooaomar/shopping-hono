import { describe, expect, test } from '@jest/globals';
import { ProdutoModel } from './ProdutoModel';
import { Produto } from '../domain/Entity/Produto';

describe('Testes de ProdutoModel', () => {
    test('Criar produto no banco', () => {
        const produto = new ProdutoModel()
        const input = new Produto(1,'Sapato1',155.20,'http://home.armazem/12542154rs');


        expect(produto.create(input.getProduto())).toEqual({
            "Ok": "Produto criado"
        })
    })
})