import { Pedido } from "../../Entity/Pedido";

export interface PedidoPersistenceInterface {
    create(prduto: Pedido): any;
    getAll(): Promise<Pedido[]>; 
    getOne(id: number): Promise<Pedido>;
    update(pedido: Pedido): any;
    delete(pedido: Pedido): Promise<void>;
}