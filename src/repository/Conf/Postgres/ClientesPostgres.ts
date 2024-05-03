import { ConfigPostgres } from "./ConfigPostgres";
import { RepositoryClienteInterface } from "../../interfaces/repositoryClienteInterface";
import { Cliente } from "../../../domain/Entity/Cliente";

export class ClientesPostgres<T> extends ConfigPostgres<T> implements RepositoryClienteInterface{

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

    async toSave(cliente: Cliente){

        // const valuePlaceholders = this.qtdParametrosBuscaDB(values)

        try {
            await this.conect();
            await this.client.query({
                text: `INSERT INTO ${this.tabela} VALUES($1, $2, $3, $4, $5, $6, $7)`,
                values: [
                    `${cliente.id}`,
                    `${cliente.nome}`, 
                    `${cliente.endereco.bairro}`, 
                    `${cliente.endereco.cidade}`,
                    `${cliente.endereco.estado}`,
                    `${cliente.endereco.numero}`,
                    `${cliente.cpf}`,
                ]
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

    async update(cliente: Cliente){
        try {
            
            await this.conect();
            const res = await this.client.query({
                text: `UPDATE ${this.tabela} SET nome = $1, rua = $2, bairro = $3, cidade = $4, estado = $5, numero_casa = $6, cpf = $7 WHERE id = $8`,
                values: [
                        `${cliente.nome}`, 
                        `${cliente.endereco.rua}`, 
                        `${cliente.endereco.bairro}`, 
                        `${cliente.endereco.cidade}`,
                        `${cliente.endereco.estado}`, 
                        `${cliente.endereco.numero}`, 
                        `${cliente.cpf}`,
                        `${cliente.id}`
                    ]
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

    /**
     * Deleta todos os pedidos de um cliente e o cadastro do cliente.
     */
    async delete(cliente: Cliente){
        try {

            await this.conect();

            await this.client.query({
                text: `DELETE FROM pedidos WHERE id_cliente = $1`,
                values: [`${cliente.id}`]
            })

            const res = await this.client.query({
                text: `DELETE FROM  ${this.tabela} WHERE id = $1`,
                values: [`${cliente.id}`]
            })
            await this.client.end();
            
            return res.rows[0];
            
        } catch (error) {
            throw error;
        }
    }
    // IMPLEMENTAR AS COISAS COMUNS EM TODOS OS BANCOS
}