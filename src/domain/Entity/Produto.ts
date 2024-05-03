import { ProdutoInterface } from "./interfaces/ProdutoInteface";

export class Produto implements ProdutoInterface {

    id: number
    nome: string
    preco: number
    image: string
    quantidade: number;
    habilitado: boolean;

    constructor(id: number, nome: string, preco: number, image: string, quantidade: number, habilitado: boolean){
        this.id = id;
        this.nome = nome;
        this.preco = preco;  
        this.image = image;
        this.quantidade = quantidade;
        this.habilitado = habilitado;
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

    setHabilitado(){
        this.habilitado = !this.habilitado; 
    }
}