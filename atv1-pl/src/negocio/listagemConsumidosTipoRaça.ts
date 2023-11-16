import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

class Raca {
    private raca: string;
    private produtosConsumidos: Array<Produto>;
    private servicosConsumidos: Array<Servico>;
    constructor(raca: string) {
        this.raca = raca;
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    };

    consumirServico(servico: Servico, quantidade: number): void {
        for (let i = 0; i < quantidade; i++) {
            this.servicosConsumidos.push(servico);
        };
    };

    consumirProduto(produto: Produto, quantidade: number): void {
        for (let i = 0; i < quantidade; i++) {
            this.produtosConsumidos.push(produto);
        };
    };
};

// Mesma classe da Raca mas para Tipo
class Tipo {
    private tipo: string;
    private produtosConsumidos: Array<Produto>;
    private servicosConsumidos: Array<Servico>;
    constructor(tipo: string) {
        this.tipo = tipo;
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    };

    consumirServico(servico: Servico, quantidade: number): void {
        for (let i = 0; i < quantidade; i++) {
            this.servicosConsumidos.push(servico);
        };
    };

    consumirProduto(produto: Produto, quantidade: number): void {
        for (let i = 0; i < quantidade; i++) {
            this.produtosConsumidos.push(produto);
        };
    };
};

class ListagemConsumidosTipoRaça extends Listagem {
    private clientes: Array<Cliente>;
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    };

    public listar(): void {
        let racas: Array<Raca> = [];
        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
               racas.push(new Raca(pet.getRaca)); 
            });
        });
    };
};