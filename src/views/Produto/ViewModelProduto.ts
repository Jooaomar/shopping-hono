// import { ProdutoInterface } from "../../domain/Entity/interfaces/ProdutoInteface";
import { Produto } from "../../domain/Entity/Produto";
import { ProdutoViewInterface } from "../../presenter/interfaces/ProdutoViewInterface";

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
}