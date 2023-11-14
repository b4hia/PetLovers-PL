import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Servico from "../modelo/servico"

export default class ListagemServicoPorCPF {
    private servicos: Array<Servico>;
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>, clientes: Array<Cliente>) {
        this.servicos = servicos;
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public listar(): void {
        console.log(`\nInicio da listagem de serviços consumidos do usuário:`);

        let cpf = this.entrada.receberTexto(`Por favor informe o seu CPF: `)
        const cliente = this.clientes.find((c) => c.getCpf.getValor === cpf);

        if (cliente) {
            const servicosPedidos = cliente.getServicosConsumidos;
            if (servicosPedidos.length === 0) {
                console.log("Nenhum serviço encontrado :(");
            } else {
                servicosPedidos.forEach((servico) => {
                    console.log(`Nome do serviço: ` + servico.getNome);
                    console.log(`--------------------------------------`);
                });
            }
        } else {
            console.log("Cliente não encontrado :(");
        }
    }
}