import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class Listagem10Clientes extends Listagem {
    private clientes: Array<Cliente>;
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    };

    public listar(): void {
        console.log(`\nLista dos 10 clientes que mais consumiram produtos ou serviços:`);
        let clis: any = [];
        this.clientes.forEach(cliente => {
            clis.push({ nome: cliente.nome, quantidade: cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length, cpf: cliente.getCpf.getValor });
        });
        clis.sort((a: any, b: any) => b.quantidade - a.quantidade);
        clis.slice(0, 10).forEach((cli: any) => {
            console.log(`Nome: ${cli.nome}`);
            console.log(`Quantidade: ${cli.quantidade}`);
            console.log(`CPF: ${cli.cpf}`);
            console.log(`--------------------------------------`); 
        });
    };
};

// Teste da listagem de 10 clientes que mais consumiram produtos ou serviços
// function main() {
//     const clientes: Array<Cliente> = [
//         new Cliente("Cliente 1", "Cliente 1", new CPF("111.111.111-11", new Date())),
//         new Cliente("Cliente 2", "Cliente 2", new CPF("222.222.222-22", new Date())),
//         new Cliente("Cliente 3", "Cliente 3", new CPF("333.333.333-33", new Date())),
//         new Cliente("Cliente 4", "Cliente 4", new CPF("444.444.444-44", new Date())),
//         new Cliente("Cliente 5", "Cliente 5", new CPF("555.555.555-55", new Date())),
//         new Cliente("Cliente 6", "Cliente 6", new CPF("666.666.666-66", new Date())),
//     ];
//     // Adicionar produtos e serviços consumidos aos clientes
//     clientes.forEach(cliente => {
//         cliente.getProdutosConsumidos.push(new Produto("Produto 1", 10));
//         cliente.getServicosConsumidos.push(new Servico("Serviço 1", 10));
//     });
//     clientes[0].getProdutosConsumidos.push(new Produto("Produto 2", 10));
//     clientes[0].getServicosConsumidos.push(new Servico("Serviço 2", 10));
//     clientes[1].getProdutosConsumidos.push(new Produto("Produto 3", 10));
//     const listagem10Clientes = new Listagem10Clientes(clientes);
//     listagem10Clientes.listar();
// };

// main();