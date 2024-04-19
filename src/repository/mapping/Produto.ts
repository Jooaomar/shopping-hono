import { Produto } from "../../domain/Entity/Produto"

export function mapearProduto(valores: Produto) {
    return new Produto(valores.id, valores.nome, valores.preco, valores.image)
}