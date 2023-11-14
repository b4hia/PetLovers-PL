import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto";
import Cadastro from "./cadastro"

export default class PedirProduto {
    private produtos: Array<Produto>;
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>, clientes: Array<Cliente>) {
        this.produtos = produtos;
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public pedir(): void {
        console.log(`\nInício do Pedido de serviço`);

        let cpf = this.entrada.receberTexto(`Por favor informe o CPF do cliente que deseja pedir o produto: `)
        let cliente = this.clientes.find((c) => c.getCpf.getValor === cpf);

        if (cliente) {
            let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);

            let produto = this.produtos.find((c) => c.getNome() === nome);

            if (produto) {
                let quantidade = this.entrada.receberNumero(`Por favor informe a quantidade que deseja pedir: `);
                cliente.adicionarProdutoConsumido(produto, quantidade);
                console.log(`\nProduto concluído :)\n`);
            } else {
                console.log(`\nProduto não encontrado :(`)
            }

        } else {
            console.log(`Cliente não encontrado :(\n`);
        }

    }
}

