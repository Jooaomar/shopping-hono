import { describe, expect, test } from '@jest/globals';
import { ConfigPostgres } from './ConfigPostgres';
import { Produto } from '../../domain/Entity/Produto';

describe('Teste de Configuaração do Postgres', () =>{
    const instancia = new ConfigPostgres('produto')
    const criarProduto = new Produto(1,'produtoTest',500.0,'htt://bicicleta')
    const produto = criarProduto.getProduto()
    
    test('Conectando com banco objeto Postgres', () => {
        const pg = new ConfigPostgres('produtos');
        expect(() => pg.config()).not.toThrow();
        expect(() => pg.conect()).not.toThrow();
    });
    test('Criar dados no postgres', () => {
        expect(() => instancia.toSave([produto.id, produto.nome, produto.preco, produto.image])).not.toThrow()
        expect(instancia.toSave([produto.id, produto.nome, produto.preco, produto.image])).toEqual("Ok")
    })
    // test('Erro de conecção com banco objeto Postgres', async () => {
    //     const pg = new ConfigPostgres('172.21.0.2',5432111,'myshop','admin','aB#0515P@1709fF1H*9096273254_@');
    //     await expect(() => pg.conect()).toThrow(Error);
    //     await expect(() => pg.conect()).toThrow('Erro de conexão com banco');
    // });
})