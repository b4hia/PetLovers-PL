import { log } from "console";
import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import ApagarServico from "../negocio/apagarServico";
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarServico from "../negocio/atualizarServico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemServicos from "../negocio/listagemServico";
import ApagarCliente from "../negocio/apagarCliente";
import PedirServico from "../negocio/pedirServico";
import CadastroPets from "../negocio/cadastrarPet";
import ApagarPets from "../negocio/apagarPet";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    //Cliente
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar cliente`)
    console.log(`4 - Deletar cliente`);

    //Serviços
    console.log(`5 - Cadastrar serviço`);
    console.log(`6 - Listar todos os serviços`);
    console.log(`7 - Atualizar serviço`);
    console.log(`8 - Apagar serviço`); 
    console.log(`9 - Pedir serviço`); 

    //Pets
    console.log(`10 - Cadastrar Pet`);
    console.log(`11 - Apagar Pet`);
    
    
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizarCliente = new AtualizarCliente(empresa.getClientes)
            atualizarCliente.atualizar()
            break;
        case 4:
            let apagarCliente = new ApagarCliente(empresa.getClientes)
            apagarCliente.apagar()
            break;
        case 5:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 6:
            let listagemServicos = new ListagemServicos(empresa.getServicos);
            listagemServicos.listar()
            break;
        case 7:
            let atualizacaoServico = new AtualizarServico(empresa.getServicos);
            atualizacaoServico.atualizar();
            break;
        case 8:
            let apagarServico = new ApagarServico(empresa.getServicos);
            apagarServico.apagar();
            break;
        case 9:
            let pedirServico = new PedirServico(empresa.getServicos, empresa.getClientes);
            pedirServico.pedir();
            break;
        case 10:
            let cadastroPet = new CadastroPets(empresa.getPets, empresa.getClientes);
            cadastroPet.cadastrar();
            break;
        case 11:
            let apagarPet = new ApagarPets(empresa.getClientes);
            apagarPet.apagar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}