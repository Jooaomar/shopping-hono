import { ConfigPostgres } from "./ConfigPostgres";
import { RepositoryInterface } from "../../interfaces/repositoryInterfaces";

export class ClientesPostgres<T> extends ConfigPostgres<T> implements RepositoryInterface{

    constructor(tabela: string, mapping: (value: T) => T){
        super(tabela, mapping)
    }

    /**
     * Obtem a formatação da quantidade de parãmetros buscados 
     */
    qtdParametrosBuscaDB([...values]){
        return values.map((_, index) => `$${index + 1}`).join(', ');
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

        const valuePlaceholders = this.qtdParametrosBuscaDB(values)

        try {
            await this.conect();
            await this.client.query({
                text: `INSERT INTO ${this.tabela} VALUES(${valuePlaceholders})`,
                values: values
            })
            await this.client.end();
        } catch (error) {
            throw new Error(`Não salvo ${error}`)
        }
    }

    async obtainOne(id: number){
        // const valuePlaceholders = this.qtdParametrosBuscaDB([id]) 

        try {
            
            await this.conect();
            const res = await this.client.query({
                text: `SELECT * FROM ${this.tabela} WHERE id = $1`,
                values: [id]
            })
            const resConvert = res.rows.map(item => (
                this.mapping(item)
            ));
            await this.client.end();

            return resConvert[0]
            
        } catch (error) {
            throw error
        }
    }


    toRemove(){
        //
    }

    update(){
        //
    }
    // IMPLEMENTAR AS COISAS COMUNS EM TODOS OS BANCOS
}