import { ConfigPostgres } from "./ConfigPostgres";
import { RepositoryProdutoInterface } from "../../interfaces/repositoryProdutoInterface";
import { Produto } from "../../../domain/Entity/Produto";

export class ProdutosPostgres<T> extends ConfigPostgres<T> implements RepositoryProdutoInterface {

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

    async toSave(produto: Produto){

        // const valuePlaceholders = this.qtdParametrosBuscaDB(values)

        try {
            await this.conect();
            await this.client.query({
                text: `INSERT INTO produto(id, nome, preco, image, quantidade, habilitado) VALUES($1, $2, $3, $4, $5, $6)`,
                values: [`${produto.id}`, `${produto.nome}`, `${produto.preco}`, `${produto.image}`, `${produto.quantidade}`, `${produto.habilitado}`]
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

    async update(produto: Produto){
        try {
            
            await this.conect();
            const res = await this.client.query({
                text: `UPDATE ${this.tabela} SET nome = $1, preco = $2, image = $3, quantidade = $4, habilitado = $5  WHERE id = $6`,
                values: [`${produto.nome}`, `${produto.preco}`, `${produto.image}`, `${produto.quantidade}`, `${produto.habilitado}`,`${produto.id}`]
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
     * Deleta produto e pedidos relacionados ao produto
     */
    async delete(produto: Produto){
        try {

            await this.conect();

            await this.client.query({
                text: `DELETE FROM pedidos WHERE id_produto = $1`,
                values: [`${produto.id}`]
            })

            const res = await this.client.query({
                text: `DELETE FROM  ${this.tabela} WHERE id = $1`,
                values: [`${produto.id}`]
            })
            await this.client.end();
            
            return res.rows[0];
            
        } catch (error) {
            throw error;
        }
    }
    // IMPLEMENTAR AS COISAS COMUNS EM TODOS OS BANCOS
}