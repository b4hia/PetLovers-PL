import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Apagar from "./apagar";
import Servico from "../modelo/servico";

export default class ApagarServico extends Apagar {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public apagar(): void {
        console.log(`\nInício da Exclusão do cadastro do serviço`);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do serviço a ser excluído: `);

        let index = this.servicos.findIndex((c) => c.getNome === nome);

        if (index !== -1) {
            this.servicos.splice(index, 1);
            console.log(`Cadastro do serviço excluído :)\n`);
        } else {
            console.log(`Serviço não encontrado :(\n`);
        }
    }
}