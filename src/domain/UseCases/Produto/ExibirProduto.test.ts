import { CriarProdutoPresenter } from "../../../presenter/ProdutoPresenter";
import { CriarProduto } from "./CriarProdutos";
import { Produto } from "../../Entity/Produto";
import { describe, expect, test } from '@jest/globals';
import { ProdutoModel } from "../../../repository/ProdutoModel";
import { ExibirProdutos } from "./ExibirProdutos";


describe('Teste UseCase ExbirProduto', () => {

    test('Exibir Produtos do BD', async () => {
        const persistir = new ProdutoModel();
        const presenter = new CriarProdutoPresenter();
        const exibir = new ExibirProdutos(persistir, presenter)
        const res = await exibir.getAllProdutos()
        expect(res).toEqual({
            "Lista de Produtos": [
                {
                    id: 3,
                    nome: "testeProdu",
                    preco: 444,
                    image: "jmjmjmjm",
                }, {
                    id: 2,
                    nome: "produtoTest",
                    preco: 600,
                    image: "htt://bicicleta",
                }, {
                    id: 1,
                    nome: "Sapato1",
                    preco: 155.2,
                    image: "http://home.armazem/12542154rs",
                }, {
                    id: 4,
                    nome: "Sapato3",
                    preco: 30500,
                    image: ".com.com",
                }
            ],
        })
    })
})