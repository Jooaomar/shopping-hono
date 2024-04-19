import { Produto } from "../../Entity/Produto"

export interface ListarProdutoInterface{
    lista: Array<Produto>
    setLista(produto: Produto): void
    getLista(): Array<Produto>
}