import { describe, expect, test } from '@jest/globals';
import { ConfigDefault } from './ConfigDefault';
import { ConfigPostgres } from './ConfigPostgres';

describe('Teste de Configuaração do Postgres', () =>{
    
    test('Conectando com banco objeto Postgres', () => {
        const pg = new ConfigPostgres('172.21.0.2',5432,'myshop','admin','aB#0515P@1709fF1H*9096273254_@');
        expect(() => pg.config()).not.toThrow();
        expect(() => pg.conect()).not.toThrow();
    });
    test('Erro de conecção com banco objeto Postgres', async () => {
        const pg = new ConfigPostgres('172.21.0.2',5432111,'myshop','admin','aB#0515P@1709fF1H*9096273254_@');
        await expect(() => pg.conect()).toThrow(Error);
        await expect(() => pg.conect()).toThrow('Erro de conexão com banco');
    });
})