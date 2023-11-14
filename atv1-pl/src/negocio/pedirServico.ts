import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Servico from "../modelo/servico"
import Cadastro from "./cadastro"

export default class PedirServico {
    private servicos: Array<Servico>;
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>, clientes: Array<Cliente>) {
        this.servicos = servicos;
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public pedir(): void {
        console.log(`\nInício do Pedido de serviço`);

        let cpf = this.entrada.receberTexto(`Por favor informe o CPF do cliente que deseja pedir o serviço: `)
        let cliente = this.clientes.find((c) => c.getCpf.getValor === cpf);

        if (cliente) {
            let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);

            let servico = this.servicos.find((c) => c.getNome() === nome);

            if (servico) {
                cliente.getServicosConsumidos.push(servico);
                console.log(`\nServiço concluído :)\n`);
            } else {
                console.log(`\nServiço não encontrado :(`)
            }

        } else {
            console.log(`Cliente não encontrado :(\n`);
        }

    }
}

