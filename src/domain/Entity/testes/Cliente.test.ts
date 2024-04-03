import { describe, expect, test } from '@jest/globals';
import { Client } from "../Client";

describe('Testes Entity Cliente', () =>{
    const client = new Client(12345);
    test('criando objeto sessão', () => {
        expect(client.getSessao()).toBe(12345);
    });
})