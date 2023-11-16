import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Atualizar from "./atualizar";
import Servico from "../modelo/servico";
export default class AtualizarServico extends Atualizar{
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log(`\nInício da Atualização do cadastro do serviço`);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do serviço a ser atualizado: `);

        let servico = this.servicos.find((c) => c.getNome === nome);

        if (servico) {
            let nome = this.entrada.receberTexto(`Por favor, informe o novo nome do serviço: `);
            let preco = this.entrada.receberNumero(`Por favor, informe o novo valor do serviço: `);
            servico.nome = nome;
            servico.preco = preco;

            console.log(`\nCadastro de serviço atualizado :)\n`);
        } else {
            console.log(`Serviço não encontrado :(\n`);
        }
    }

}