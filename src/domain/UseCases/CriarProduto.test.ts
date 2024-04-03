import { CriarProduto } from "./CriarProdutos";
import { Produto } from "../Entity/Produto";
import { describe, expect, test } from '@jest/globals';
import { ProdutoModel } from "../../repository/ProdutoModel";

describe('Use Case Criar Produto', () =>{
    const persistir = new ProdutoModel();
    const produto = new Produto(1,'Sapato1',155.20,'http://home.armazem/12542154rs');
    const produto2 = new Produto(2, 'Sapato2', 255.25, 'http://home.armazem/saxhgs21565')
    test('Inserir produto em lista', () => {
        const produtoEmlista = new CriarProduto(persistir);
        produtoEmlista.setLista(produto.getProduto());
        produtoEmlista.setLista(produto2.getProduto());
        expect(produtoEmlista.getLista()).toEqual([
            {id:1, nome:'Sapato1', preco:155.20, image: 'http://home.armazem/12542154rs'},
            {id:2, nome:'Sapato2', preco:255.25, image: 'http://home.armazem/saxhgs21565'}
        ]);
    });
})