// import { ProdutoInterface } from "../../domain/Entity/interfaces/ProdutoInteface";
import { Produto } from "../../domain/Entity/Produto";
import { ProdutoViewInterface } from "../../presenter/interfaces/ProdutoViewInterface";
import { Cliente } from "../../domain/Entity/Cliente";

export class ViewModelProduto implements ProdutoViewInterface{

    setProdutoCriado(): object{
        return {"Ok": "Produto criado"}
    }


    setError(mensagem: string ,e: Error): object {
        return {"error": `${mensagem}, ${e}`}
    }


    listarProduto(produto: Produto, mensagem: string): object{
        return {"sucess": { [mensagem] : produto.nome }};
    }


    excluir(mensagem: string, nome: string): object{
        return {"excluir": {[mensagem]: nome}}
    }


    produtos(produtos: Array<Produto>, mensage: string) {
        return {[mensage]: produtos.map((produto) => ({
                                                id: produto.id,
                                                nome: produto.nome,
                                                preco: produto.preco,
                                                image: produto.image
                                            }))}
    }


    compra(produtos: Produto[], cliente: Cliente):object{
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


    editar(produto: Produto): object {
        return {
            "Produto Editado": {
                "nome":produto.nome,
                "image": produto.image,
                "preco": produto.preco,
                "quantidade": produto.quantidade,
                "habilidado": produto.habilitado,
            }
        }
    }


    alerta(mensage: string): object{
        return {mensage}
    }

}