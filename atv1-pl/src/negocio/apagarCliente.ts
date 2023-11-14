import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Apagar from "./apagar";

export default class ApagarCliente extends Apagar {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public apagar(): void {
        console.log(`\nInício da Exclusão do cadastro do cliente`);
        let cpf = this.entrada.receberTexto(`Por favor, informe o número do CPF do cliente a ser excluído: `);

        let index = this.clientes.findIndex((c) => c.getCpf.getValor === cpf);

        if (index !== -1) {
            this.clientes.splice(index, 1);
            console.log(`Cadastro do cliente excluído :)\n`);
        } else {
            console.log(`Cliente não encontrado :(\n`);
        }
    }
}