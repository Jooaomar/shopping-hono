import { Cliente } from "../../domain/Entity/Cliente";

export interface ClienteViewInterface{
    setClienteCriado(): object;
    setError(mensgaem: string ,e: Error): object
    excluir(mensage: string, nome: string): object
    clientes(clientes: Array<Cliente>, mensage: string): object
}