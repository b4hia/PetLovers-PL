import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Pet from "../modelo/pet";
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
        let cpf = this.entrada.receberTexto(`Por favor, informe o número do CPF do cliente a ser atualizado: `);
        this.clientes.forEach(cliente => {
            if (cliente.getCpf.getValor == cpf) {
                if (cliente.getPets.length == 0) {
                    console.log(`O cliente ${cliente.nome} ainda não possui pets.`);
                } else {
                    console.log(`O cliente ${cliente.nome} possui os seguintes pets:`);
                    cliente.getPets.forEach(pet => {
                        console.log(`[${cliente.getPets.indexOf(pet)}] ${pet.getNome}`);
                    });
                    console.log(`Escolha o pet para atualizar as informações: `);
                    let indexPet = this.entrada.receberNumero(``);
                    let pet = cliente.getPets[indexPet];
                    let execucao = true;
                    while (execucao) {
                        console.log(`[1] Atualizar nome\n[2] Atualizar raça\n[3] Atualizar gênero\n[4] Atualizar tipo\n[0] Finalizar alterações`);
                        let opcao = this.entrada.receberNumero(``);
                        switch (opcao) {
                            case 0:
                                execucao = false;
                                break;
                            case 1:
                                let nome = this.entrada.receberTexto(`Informe o nome do Pet: `);
                                pet.alterarNome(nome);
                                break;
                            case 2:
                                let raca = this.entrada.receberTexto(`Informe a raça do Pet: `);
                                pet.alterarRaca(raca);
                                break;
                            case 3:
                                let genero = this.entrada.receberTexto(`Informe o gênero do Pet: `);
                                pet.alterarGenero(genero);
                                break;
                            case 4:
                                let tipo = this.entrada.receberTexto(`Informe o tipo do Pet: `);
                                pet.alterarTipo(tipo);
                                break;
                            default:
                                console.log("Opção inválida!");
                        };
                    };
                };
            };
        });
    };
};

// Testes
let clientes = [new Cliente("Wellington", "Wellington", new CPF("12345678912", new Date())), new Cliente("Wellington", "Wellington", new CPF("12345678913", new Date())), new Cliente("Wellington", "Wellington", new CPF("12345678914", new Date())), new Cliente("Wellington", "Wellington", new CPF("12345678915", new Date()))]

clientes[2].adicionarPet(new Pet("Luna", "Shitzu", "Femea", "Cachorro"));
clientes[3].adicionarPet(new Pet("Luna", "Shitzu", "Femea", "Cachorro"));
clientes[0].adicionarPet(new Pet("Luna", "Shitzu", "Femea", "Cachorro"));

new atualizarPet(clientes, new Entrada()).atualizar();