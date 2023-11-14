export default class Produto {
    public nome: string
    public preco: number
    public quantidadeConsumida: number

    constructor(nome: string, preco: number){
        this.nome = nome
        this.preco = preco
        this.quantidadeConsumida = 0;
    }

    public getNome(): string {
        return this.nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public getQuantidadeConsumida(): number {
        return this.quantidadeConsumida;
    }

    public incrementarQuantidadeConsumida(quantidade: number): void {
        this.quantidadeConsumida += quantidade;
    }
}