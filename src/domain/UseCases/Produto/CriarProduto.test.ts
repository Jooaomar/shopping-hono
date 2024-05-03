import { CriarProdutoPresenter } from "../../../presenter/ProdutoPresenter";
import { CriarProduto } from "./CriarProdutos";
import { Produto } from "../../Entity/Produto";
import { describe, expect, test } from '@jest/globals';
import { ProdutoModel } from "../../../repository/ProdutoModel";


describe('Use Case Criar Produto', () => {
    const persistir = new ProdutoModel();
    const presenter = new CriarProdutoPresenter();
    const produtoEmlista = new CriarProduto(persistir, presenter);

    test('Inserir um produto na lista', () => {
        const produto = new Produto(1,'Sapato1',155.20,'http://home.armazem/12542154rs', 20, true);
        expect(produtoEmlista.adicionaLista(produto)).toEqual({
            "sucess": {"Produto listado": produto.nome}
        })
    })
    test('Obter Lista de produtos', () => {
        // const produto2 = new Produto(2, 'Sapato2', 255.25, 'http://home.armazem/saxhgs21565')
        // produtoEmlista.setLista(produto2);
        expect(produtoEmlista.listagem()).toEqual({
            "Lista de produtos": [
                {
                  id: 1,
                  nome: "Sapato1",
                  preco: 155.2,
                  image: "http://home.armazem/12542154rs",
                }
            ],
        });
    });
    test('Salvar produto no banco de dados', async () => {
        const produto3 = new Produto(4, 'Sapato3', 30000, 'wwww.com.br', 20, true)
        produtoEmlista.setLista(produto3);
        const result = await produtoEmlista.salvarProdutos()
        expect(() => result).not.toThrow();
        expect(result).toEqual({
            "Ok":"Produto criado"
        })
    })
})