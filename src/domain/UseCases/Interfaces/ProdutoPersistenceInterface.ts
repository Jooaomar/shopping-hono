import { Produto } from "../../Entity/Produto";
import { Cliente } from "../../Entity/Cliente";


export interface ProdutoPersistenceInterface{
    create(prduto: Produto | Cliente): any;
    getAll(): Promise<Produto[]>; 
    getOne(id: number): Promise<Produto>;
    update(produto: Produto): Promise<Produto>;
    delete(produto: Produto): Promise<Produto>;
}