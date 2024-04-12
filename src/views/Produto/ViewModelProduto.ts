import { ProdutoInterface } from "../../domain/Entity/interfaces/ProdutoInterface";
import { ProdutoViewInterface } from "../../presenter/interfaces/ProdutoViewInterface";

export class ViewModelProduto implements ProdutoViewInterface{

    setProdutoCriado(): object{
        return {"Ok": "Produto criado"}
    }

    setError(mensagem: string ,e: Error): object {
        return {'error': `${mensagem}, ${e}`}
    }

    listarProduto(produto: ProdutoInterface): object{
        return {"sucess": {"Produto listado": produto}};
    }

    produtos(produtos: Array<ProdutoInterface>): object {
        return {"Produtos Listados": produtos}
    }
}