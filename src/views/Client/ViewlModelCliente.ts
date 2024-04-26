import { Cliente } from "../../domain/Entity/Cliente";
import { ClienteViewInterface } from "../../presenter/interfaces/ClienteViewInterface";

export class ViewModelCliente implements ClienteViewInterface{
    setClienteCriado(): object {
        // 
        return {"Ok": "Cliente cadastrado!"}
    }

    setError(mensgaem: string, e: Error): object {
        // 
        return {"error": `${mensgaem}, ${e}`}
    }

    excluir(mensagem: string, nome: string): object{
        return {"excluir": {[mensagem]: nome}}
    }

    clientes(clientes: Cliente[], mensage: string): object {
        // 
        return {[mensage]: clientes.map((cliente) => ({
            id: cliente.id,
            nome: cliente.nome,
            cpf: cliente.cpf,
            cadastrado: cliente.cadastrado,
            cidade: cliente.endereco.cidade,
            estado: cliente.endereco.estado,
            rua: cliente.endereco.rua,
            bairro: cliente.endereco.bairro,
            numero_casa: cliente.endereco.numero
        }))}
    }
}