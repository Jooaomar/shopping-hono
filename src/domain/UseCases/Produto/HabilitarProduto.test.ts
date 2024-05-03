import { describe, test, expect } from '@jest/globals';
import { HabilitarProduto } from './HabilitarProduto';
import { ProdutoModel } from '../../../repository/ProdutoModel';
import { CriarProdutoPresenter } from '../../../presenter/ProdutoPresenter';
import { Produto } from '../../Entity/Produto';

describe('Teste Use Case Habilitar Produto', () => {
    const presenter = new CriarProdutoPresenter();
    const repository = new ProdutoModel();

    const produto = new Produto(4, 'Sapato3', 30500, '.com.com', 50, true);
    const habilitar = new HabilitarProduto(presenter, repository);

    test("Desabilitando produto produto", async () => {
        const res = await habilitar.habilitar(produto);
        expect(() => res).not.toThrow();
        expect(res).toEqual({
            "Produto Editado": {
                habilidado: false,
                image: ".com.com",
                nome: "Sapato3",
                preco: 30500,
                quantidade: 50,
            },
        })
    })
})