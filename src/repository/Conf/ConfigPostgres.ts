import { Client } from 'pg'
import { configs } from '../interfaces/repositoryInterfaces';
import * as dotenv from 'dotenv';
import { Produto } from '../../domain/Entity/Produto';
dotenv.config();


export class ConfigPostgres<T> implements configs<T>{

    private client!: Client

    host?: string;
    port?: number;
    database?: string;
    user?: string;
    password?: string | (() => string | Promise<string>);
    tabela: string;
    mapping: (value: T) => T;
    
    constructor(tabela: string, mapping: (value: T) => T){
        this.tabela = tabela;
        this.host = process.env.POSTGRES_HOST;
        this.port = process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : undefined;
        this.database = process.env.POSTGRES_DATABASE;
        this.user = process.env.POSTGRES_USER;
        this.password = process.env.POSTGRES_PASSWORD;
        this.mapping = mapping
        this.conect();
    }

    async conect(): Promise<void>{
        try {
            this.config();
            await this.client.connect();
        } catch (error) {
            throw new Error("Erro de conexão com banco");
        }
    }

    config(){
        try {
            this.client = new Client({
                host: this.host,
                port: this.port,
                database: this.database,
                user: this.user,
                password: this.password
            })
        } catch (error) {
            throw new Error(`Erro ao configurar variáveis de conexão com banco`)
        }
    }

    // Recebe uma função de mapeamento que devolve os dados do banco de dados no formato da Entidade 
    async getAll(): Promise<T[]>{
        try {
            await this.conect();
            const res = await this.client.query(`SELECT * FROM ${this.tabela}`)
            await this.client.end()
            // return mapping(res.rows)
            
            const resConvert = res.rows.map(item => (
                this.mapping(item)
            ));

            return resConvert

        } catch (error) {
            throw error
        }
    }

    async toSave([...values]){
        try {
            await this.conect();
            await this.client.query({
                text: `INSERT INTO ${this.tabela} VALUES($1, $2, $3, $4)`,
                values: values
            })
            await this.client.end();
        } catch (error) {
            throw new Error(`Não salvo ${error}`)
        }
    }

    obtainOne(){
        // 
    }

    toRemove(){
        //
    }

    update(){
        //
    }
    // IMPLEMENTAR AS COISAS COMUNS EM TODOS OS BANCOS
}