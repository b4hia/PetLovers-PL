import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string;
    public nomeSocial: string;
    private cpf: CPF;
    private rgs: Array<RG>;
    private dataCadastro: Date;
    private dataEmissaoCPF: Date;
    private dataEmissaoRG: Date;
    private telefones: Array<Telefone>;
    private produtosConsumidos: Array<Produto>;
    private servicosConsumidos: Array<Servico>;
    private pets: Array<Pet>;
    constructor(nome: string, nomeSocial: string, cpf: CPF, dataEmissaoCPF: Date, rg: RG, dataEmissaoRG: Date) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.dataEmissaoCPF = dataEmissaoCPF
        this.dataEmissaoRG = dataEmissaoRG
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
        this.pets = [];
    };
    public get getCpf(): CPF {
        return this.cpf;
    };
    public get getRgs(): Array<RG> {
        return this.rgs;
    };
    public get getDataEmissaoCPF(): Date {
        return this.dataEmissaoCPF
    }
    public get getDataEmissaoRG(): Date {
        return this.dataEmissaoRG
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro;
    };
    public get getTelefones(): Array<Telefone> {
        return this.telefones;
    };
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos;
    };
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos;
    };
    public get getPets(): Array<Pet>{
        return this.pets
    };
    public adicionarPet(pet: Pet): void {
        this.pets.push(pet);
    };
    public adicionarProdutoConsumido(produto: Produto, quantidade: number): void {
        for (let i = 0; i < quantidade; i++) {
            this.produtosConsumidos.push(produto);
        };
        produto.incrementarQuantidadeConsumida(quantidade);
    };
    public adicionarServicoConsumido(servico: Servico, quantidade: number): void {
        for (let i = 0; i < quantidade; i++) {
            this.servicosConsumidos.push(servico);
        };
        servico.incrementarQuantidadeConsumida(quantidade);
    };
};