import { describe, test, expect } from '@jest/globals';
import { EditarProduto } from './EditarProduto';
import { ExibirProdutos } from './ExibirProdutos';
import { ProdutoModel } from '../../../repository/ProdutoModel';
import { CriarProdutoPresenter } from '../../../presenter/ProdutoPresenter';
import { Produto } from '../../Entity/Produto';

describe('Teste Use Case Editar Produto', () => {
    const presenter = new CriarProdutoPresenter();
    const repository = new ProdutoModel();

    const produto = new Produto(4, 'Sapato3', 30500, '.com.com', 50, true);
    const editar = new EditarProduto(presenter, repository);

    test("Editando", async () => {
        const res = await editar.editar(produto);
        expect(async () => await editar.editar(produto)).not.toThrow();
        console.log(res)
    })
})