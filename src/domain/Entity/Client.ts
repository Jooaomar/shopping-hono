export class Client{
    private sessao: number;

    constructor(sessao: number){
        this.sessao = sessao;
    }

    getSessao(): number {
        return this.sessao;
    }
}