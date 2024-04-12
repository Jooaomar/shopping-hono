import { Client } from 'pg'
import { configs } from '../interfaces/repositoryInterfaces';
import * as dotenv from 'dotenv';
dotenv.config();


export class ConfigPostgres implements configs{

    private client!: Client

    host?: string;
    port?: number;
    database?: string;
    user?: string;
    password?: string | (() => string | Promise<string>);
    tabela?: string;

    // POSTGRES_HOST='172.21.0.2'
    // POSTGRES_PORT='5432'
    // POSTGRES_DATABASE='myshop'
    // POSTGRES_USER='admin'
    // POSTGRES_PASSWORD='aB#0515P@1709fF1H*9096273254_@'
    
    constructor(tabela: string){
        this.tabela = tabela;
        // this.host = process.env.POSTGRES_HOST;
        // this.port = process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : undefined;
        // this.database = process.env.POSTGRES_DATABASE;
        // this.user = process.env.POSTGRES_USER;
        // this.password = process.env.POSTGRES_PASSWORD;
        this.host = '172.21.0.2'
        this.port = 5432
        this.database = 'myshop'
        this.user = 'admin'
        this.password = 'aB#0515P@1709fF1H*9096273254_@'

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

    all(){
        // 
    }

    async toSave(values: Array<any>){

        try {
            await this.client.query({
                text: `INSERT INTO ${this.tabela} VALUES($1, $2, $3, $4)`,
                values: values
            })
            return "Ok";
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