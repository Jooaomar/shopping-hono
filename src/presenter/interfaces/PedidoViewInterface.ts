import { Produto } from "../../domain/Entity/Produto";
import { Cliente } from "../../domain/Entity/Cliente";

export interface PedidoViewInterface{
    setPedidoCriado(): object;
    setError(mensgaem: string ,e: Error): object
    excluir(mensagem: string, nome: string): object
    pedidos(produtos: Produto[], cliente: Cliente):object
}