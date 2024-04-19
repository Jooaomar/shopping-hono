import { ProdutoInterface } from "./interfaces/ProdutoInteface";

export class Produto {

    id: number
    nome: string
    preco: number
    image: string

    constructor(id: number, nome: string, preco: number, image: string){
        this.id = id;
        this.nome = nome;
        this.preco = preco;  
        this.image = image;
    }

    getId(){
        return this.id
    }

    getNome(){
        return this.nome
    }

    getPreco(){
        return this.preco
    }

    getImage(){
        return this.image
    }
}