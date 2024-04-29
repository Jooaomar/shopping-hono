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
        const exibir = new ExibirProdutos()
        const res = await exibir.getAllProdutos(persistir, presenter)
        expect(res).toEqual({
            "Lista de Produtos": [
            {
                id: 10,
                nome: "testeProdu",
                preco: 444,
                image: "jmjmjmjm",
            }, {
                id: 2,
                nome: "produtoTest",
                preco: 600,
                image: "htt://bicicleta",
            }, {
                id: 30,
                image: "http://home.armazem/12542154rs",
                nome: "Sapato10",
                preco: 3678.2,
            }, {
                id: 1,
                nome: "Sapato1",
                preco: 155.2,
                image: "http://home.armazem/12542154rs",
            }, {
                id: 3,
                nome: "Sapato3",
                preco: 30000,
                image: "wwww.com.br",
            }
            ],
        })
    })
})