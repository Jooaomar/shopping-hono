import { Produto } from "../../Entity/Produto";
import { ListarProdutoInterface } from "../Interfaces/ListarProduto";

export class ListarProduto implements ListarProdutoInterface {
    lista: Array<Produto> = [];

    setLista(produto: Produto): void {
        try {
            this.lista.push(produto)
        } catch (error) {
            throw error
        }
    }

    excluirValue(id: number){
        try {
            this.lista = this.lista.filter(item => item.id !== id)
        } catch (error) {
            throw error
        }
    }

    getLista(): Produto[] {
        return this.lista
    }

}