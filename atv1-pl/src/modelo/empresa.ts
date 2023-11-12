import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"
import Pet from "./pet"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private pets: Array<Pet>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
        this.pets = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
    public get getPets(){
        return this.pets
    }
}