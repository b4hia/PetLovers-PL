import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemMaisConsumidos extends Listagem {
    private users: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;

    constructor(users: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super();
        this.users = users;
        this.produtos = produtos;
        this.servicos = servicos;
    };

    public listar(): void {
        if (this.users.length < 5) console.log(`Não há clientes suficientes cadastrados ()`);
        else if (this.produtos.length < 5) console.log(`Não há produtos suficientes cadastrados`);
        else if (this.servicos.length < 5) console.log(`Não há serviços suficientes cadastrados`);
        else {
            this.produtos.sort((a, b) => {
                if (a.getQuantidadeConsumida > b.getQuantidadeConsumida) {
                    return -1;
                } else if (a.getQuantidadeConsumida < b.getQuantidadeConsumida) {
                    return 1;
                } else {
                    return 0;
                };
            });
            this.servicos.sort((a, b) => {
                if (a.getQuantidadeConsumida > b.getQuantidadeConsumida) {
                    return -1;
                } else if (a.getQuantidadeConsumida < b.getQuantidadeConsumida) {
                    return 1;
                } else {
                    return 0;
                };
            });
            console.log(`Produtos mais consumidos:`);
            for (let i = 0; i < 5; i++) {
                console.log(`${i + 1} - ${this.produtos[i].getNome} - ${this.produtos[i].getQuantidadeConsumida} unidades`);
            };
            console.log(`Serviços mais consumidos:`);
            for (let i = 0; i < 5; i++) {
                console.log(`${i + 1} - ${this.servicos[i].getNome} - ${this.servicos[i].getQuantidadeConsumida} unidades`);
            };
        };
    };
};