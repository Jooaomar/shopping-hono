import { describe, test, expect } from '@jest/globals';
import { ExcluirProduto } from './ExcluirProduto';
import { ProdutoModel } from '../../../repository/ProdutoModel';
import { CriarProdutoPresenter } from '../../../presenter/ProdutoPresenter';
import { Produto } from '../../Entity/Produto';

describe('Teste Use Case Excluir Produto', () => {
    const presenter = new CriarProdutoPresenter();
    const repository = new ProdutoModel();

    const produto = new Produto(30, 'Sapato10', 3678.2, 'http://home.armazem/12542154rs', 20, true);
    const excluir = new ExcluirProduto(repository, presenter);

    test("Alerta de excluindo produto", async () => {
        const res = await excluir.excluir(produto);
        expect(async () => await excluir.excluir(produto)).not.toThrow();
        expect(res).toEqual({
            mensage: "Você quer mesmo excluir também os pedidos relacionados a este produto? Você pode apenas desabilitar o produto"
        })
    })
    test("Confirmando excluindo produto", async () => {
        const res = await excluir.excluir(produto, true);
        expect(() => res).not.toThrow();
        expect(res).toEqual({
            "excluir": {"produto excluído": `${produto.nome}`}
        })
    })
})