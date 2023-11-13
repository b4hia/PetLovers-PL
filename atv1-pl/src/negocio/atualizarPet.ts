import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Atualizar from "./atualizar";

export default class atualizarPet extends Atualizar {
    private clientes: Array<Cliente>;
    private entrada: Entrada;


    constructor(clientes: Array<Cliente>, entrada: Entrada) {
        super();
        this.clientes = clientes;
        this.entrada = entrada;
    };

    public atualizar(): void {
        
    }
}