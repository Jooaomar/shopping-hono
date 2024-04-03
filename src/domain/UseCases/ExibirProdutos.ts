import { ProdutoPersistenceInterface } from "./Interfaces/ProdutoUseCaseInterface";

export class ExibirProdutos{

    lista: ProdutoPersistenceInterface;

    constructor(lista: ProdutoPersistenceInterface){
        this.lista = lista;
    }
    
    getProdutos(){
        return this.lista.list();
    }
    
}