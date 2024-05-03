// import { ProdutoInterface } from "../../domain/Entity/interfaces/ProdutoInteface";
import { Produto } from "../../domain/Entity/Produto";
import { ProdutoViewInterface } from "../../presenter/interfaces/ProdutoViewInterface";
import { Cliente } from "../../domain/Entity/Cliente";
import { Pedido } from "../../domain/Entity/Pedido";
import { PedidoViewInterface } from "../../presenter/interfaces/PedidoViewInterface";

export class ViewModelPedido implements PedidoViewInterface{

    setPedidoCriado(): object{
        return {"Ok": "Pedido criado"}
    }

    setError(mensagem: string ,e: Error): object {
        return {"error": `${mensagem}, ${e}`}
    }

    excluir(mensagem: string, nome: string): object{
        return {"excluir": {[mensagem]: nome}}
    }


    pedidos(produtos: Produto[], cliente: Cliente):object{
        return {"cliente": {
                    "nome": cliente.nome,
                    "cpf": cliente.cpf,
                    "cadastrado": cliente.cadastrado,
                    "endereco": {
                        "rua": cliente.endereco.rua,
                        "bairro": cliente.endereco.bairro,
                        "cidade": cliente.endereco.cidade,
                        "estado": cliente.endereco.estado,
                        "numero": cliente.endereco.numero
                    }
                }, "produtos_comprados": produtos.map((produto) => ({
                    nome: produto.nome,
                    preco: produto.preco,
                    image: produto.image
                })) }
    }

    editar(pedido: Pedido, produto: Produto): object {
        return {
            "Pedido Atualizado":  {
                "nome": produto.nome,
                "preco": produto.preco,
                "estoque": produto.quantidade,
                "quantidade_pedida": pedido.quantidade
            }
        }
    }
}