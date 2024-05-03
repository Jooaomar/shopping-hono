import { describe, expect, test } from '@jest/globals';
import { ConfigPostgres } from './ConfigPostgres';
import { Produto } from '../../../domain/Entity/Produto';
import { mapearProduto } from '../../mapping/Produto';
import { ProdutosPostgres } from './ProdutosPostgres';

describe('Teste de Configuaração do Postgres', () =>{
    // const instancia = new ConfigPostgres('produto', mapearProduto)
    const instancia = new ProdutosPostgres('produto', mapearProduto)

    const produto = new Produto(2,'produtoTest',600.0,'htt://bicicleta', 20, true)
    
    test('Conectando com banco objeto Postgres', () => {
        const pg = new ConfigPostgres('produtos', mapearProduto);
        expect(() => pg.config()).not.toThrow();
        // expect(() => pg.conect()).not.toThrow();
    });
    test('Criar dados no postgres', () => {
        expect(() => instancia.toSave(produto)).not.toThrow()
    })
    test('Obter Todos os dados salvos na tabela e ver se os objetos são do tipo Produto', async () => {
        const res = await instancia.getAll()
        expect(res).toContainEqual(expect.any(Produto));
    })
})