import { Produto } from "../../Entity/Produto";

export interface ProdutoPersistenceInterface{
    create(prduto: Produto): any;
    getAll(): Promise<Produto[]>; 
}