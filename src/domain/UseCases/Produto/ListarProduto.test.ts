import { describe, expect, test } from '@jest/globals';
import { ListarProduto } from './ListarProduto';
import { Produto } from '../../Entity/Produto';

describe('Testar Listagem de Produto', () => { 
    const produto = new Produto(1,'Sapato1',155.20,'http://home.armazem/12542154rs');
    const listagem = new ListarProduto()
    test('Inserir um produto na lista', () => {
        expect(() => listagem.setLista(produto)).not.toThrow()
    })
    test('Obter Lista de produtos', () => {
        expect(listagem.getLista()).toEqual(
            [{id:1, nome:'Sapato1', preco:155.20, image: 'http://home.armazem/12542154rs'}]
        );
    });
 })