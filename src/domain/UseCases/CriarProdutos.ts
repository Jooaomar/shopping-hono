import { ProdutoInterface as Produto } from "../Entity/interfaces/ProdutoInterface";
import { ProdutoPersistenceInterface as ProdutoPersistence } from "./Interfaces/ProdutoUseCaseInterface";

export class CriarProduto{
    salvar: ProdutoPersistence
    private lista: Produto[] = [];


    constructor(create: ProdutoPersistence){
        this.salvar = create;
    }

    setLista(produto: Produto): void{
        try {
            this.lista.push(produto)
        } catch (error) {
            throw new Error('Not in push!');
        }
    }

    getLista(): Array<Produto>{
        return this.lista;
    }

    salvarProdutos(){
        if (this.lista) {
            try {
                this.lista.forEach(produto => {
                    this.salvar.create(produto)                                
                });
            } catch (error) {
                return error;
            }   
        } else {
            return "Sem produto listado";
        }
    }
}