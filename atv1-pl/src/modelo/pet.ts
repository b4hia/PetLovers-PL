import Produto from "./produto";
import Servico from "./servico";

export default class Pet {
    private nome: string;
    private tipo: string;
    private raca: string;
    private genero: string;
    private servicosConsumidos: Array<Servico>;
    private produtosConsumidos: Array<Produto>;

    constructor(nome: string, raca: string, genero: string, tipo: string) {
        this.nome = nome;
        this.raca = raca;
        this.genero = genero;
        this.tipo = tipo;
        this.servicosConsumidos = [];
        this.produtosConsumidos = [];
    };

    public get getNome(){return this.nome};
    public get getRaca(){return this.raca};
    public get getGenero(){return this.genero};
    public get getTipo(){return this.tipo};
    public get getServicosConsumidos(){return this.servicosConsumidos};
    public get getProdutosConsumidos(){return this.produtosConsumidos};

    public alterarNome(nome: string) {this.nome = nome};
    public alterarRaca(raca: string) {this.raca = raca};
    public alterarGenero(genero: string) {this.genero = genero};
    public alterarTipo(tipo: string) {this.tipo = tipo};
    public consumirServico(servico: Servico, quantidade: number): void {
        for (let i = 0; i < quantidade; i++) {
            this.servicosConsumidos.push(servico);
        }
        servico.incrementarQuantidadeConsumida(quantidade);
    };
    public consumirProduto(produto: Produto, quantidade: number): void {
        for (let i = 0; i < quantidade; i++) {
            this.produtosConsumidos.push(produto);
        };
        produto.incrementarQuantidadeConsumida(quantidade);
    };
}