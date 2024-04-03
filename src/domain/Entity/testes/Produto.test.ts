import { describe, expect, test } from '@jest/globals';
import { Produto } from '../Produto';

describe('Testes Entity Produto', () =>{
    const produto = new Produto(1,'Sapato1',155.20,'http://home.armazem/12542154rs');
    test('obter nome produto', () => {
        expect(produto.getNome()).toBe('Sapato1');
    });
})