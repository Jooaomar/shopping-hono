import { ProdutoInterface } from "./interfaces/ProdutoInterface";

export class Produto {

    private produto: ProdutoInterface;

    constructor(id: number, nome: string, preo: number, image: string){
        this.produto = {
            id: id,
            nome : nome,
            preco: preo,
            image: image
        }
    }

    getNome(): string{
        return this.produto.nome;
    }

    getProduto(): ProdutoInterface{
        return this.produto
    }
}