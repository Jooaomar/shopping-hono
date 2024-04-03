import { ConfigDefault } from './ConfigDefault';
import { Client } from 'pg'
import { configs } from '../interfaces/repositoryInterfaces';

export class ConfigPostgres extends ConfigDefault implements configs{

    private client!: Client
    
    constructor(host: string, port: number, database: string, user: string, password: string){
        super(host, port, database, user, password);
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

    config(): void{
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