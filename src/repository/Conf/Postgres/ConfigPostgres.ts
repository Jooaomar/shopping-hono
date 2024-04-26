import { Client } from 'pg'
import * as dotenv from 'dotenv';
import { configs } from '../../interfaces/configInterface';
dotenv.config();


export class ConfigPostgres<T> implements configs<T>{

    protected client!: Client

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

}