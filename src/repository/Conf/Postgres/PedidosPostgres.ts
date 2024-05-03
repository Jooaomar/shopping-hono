import { ConfigPostgres } from "./ConfigPostgres";
import { RepositoryPedidosInterfaces } from "../../interfaces/repositoryPedidosInterfaces";
import { Pedido } from "../../../domain/Entity/Pedido";

export class PedidosPostgres<T> extends ConfigPostgres<T> implements RepositoryPedidosInterfaces{

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

    async toSave(pedido: Pedido){

        // const valuePlaceholders = this.qtdParametrosBuscaDB(values)

        try {
            await this.conect();
            await this.client.query({
                text: `INSERT INTO pedidos(id, id_cliente, id_produto, quantidade, codigo_pedido) VALUES($1, $2, $3, $4, $5)`,
                values: [`${pedido.id}`,`${pedido.id_cliente}`, `${pedido.id_produto}`, `${pedido.quantidade}`, `${pedido.codigo_pedido}`]
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

    async update(pedido: Pedido){
        try {
            
            await this.conect();
            const res = await this.client.query({
                text: 'UPDATE pedidos SET quantidade = $1 WHERE id = $2',
                values: [`${pedido.quantidade}`,`${pedido.id}`]
            })
            console.log("Atualizar pedido, ",res.rows)
            await this.client.end();
        } catch (error) {
            throw error
        }
    }
    // IMPLEMENTAR AS COISAS COMUNS EM TODOS OS BANCOS
}