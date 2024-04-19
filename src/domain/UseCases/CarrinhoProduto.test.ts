import { CriarProdutoPresenter } from "../../presenter/CriarProdutoPresenter";
import { CriarProduto } from "./CriarProdutos";
import { Produto } from "../Entity/Produto";
import { describe, expect, test } from '@jest/globals';
import { ProdutoModel } from "../../repository/ProdutoModel";
import { ExibirProdutos } from "./ExibirProdutos";
import { CarrinhoProduto } from "./CarrinhoProduto";


describe('Teste UseCase CarrinhoProduto', () => {

    const produto = new Produto(11, 'ProdutoJJJ',898, 'www.com.be')
    const presenter = new CriarProdutoPresenter();
    const carrinho = new CarrinhoProduto(presenter)
    test('Adicionar dados ao carrinho', async () => {
        const res = carrinho.adiciona(produto)
        expect(() => res).not.toThrow()
        expect(res).toEqual({'sucess' : {'Produto adicionado ao carrinho': "ProdutoJJJ"}})
    })
    test('Listar produtos no carrinho', () => {
        const res = carrinho.listagem();
        expect(() => res).not.toThrow();
        expect(res).toEqual({
            'Carrinho': [
                {
                    id: 11,
                    nome: 'ProdutoJJJ',
                    preco: 898,
                    image: "www.com.be",
                }
            ]
        })
    })
    test('Excluir produto do carrinho', () => {
        const produto2 = new Produto(13, 'ProdutoMMM',765, 'www.tec.com.br')
        carrinho.adiciona(produto2)
        expect(carrinho.listagem()).toEqual({
            'Carrinho': [
                {
                    id: 11,
                    nome: 'ProdutoJJJ',
                    preco: 898,
                    image: "www.com.be",
                },
                {
                    id: 13,
                    nome: 'ProdutoMMM',
                    preco: 765,
                    image: 'www.tec.com.br'
                }
            ]
        })
        expect(carrinho.exclui(produto)).toEqual({
            excluir: {
                'Excluir do carrinho' : 'ProdutoJJJ'
            }
        })
        expect(carrinho.listagem()).toEqual({
            'Carrinho': [
                {
                    id: 13,
                    nome: 'ProdutoMMM',
                    preco: 765,
                    image: 'www.tec.com.br'
                }
            ]
        })
    })
})