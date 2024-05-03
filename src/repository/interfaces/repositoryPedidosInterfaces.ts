import { Pedido } from "../../domain/Entity/Pedido"

export interface RepositoryPedidosInterfaces{
    toSave(pedido: Pedido): void
};