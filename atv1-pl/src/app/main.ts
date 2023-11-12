import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import ApagarServico from "../negocio/apagarServico";
import AtualizarServico from "../negocio/atualizarServico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemServicos from "../negocio/listagemServico";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    //Cliente
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar cliente`)
    //Serviços
    console.log(`4 - Cadastrar serviço`);
    console.log(`5 - Listar todos os serviços`);
    console.log(`6 - Atualizar serviço`);
    console.log(`7 - Apagar serviço`); 

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
        case 4:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 5:
            let listagemServicos = new ListagemServicos(empresa.getServicos);
            listagemServicos.listar()
            break;
        case 6:
            let atualizacaoServico = new AtualizarServico(empresa.getServicos);
            atualizacaoServico.atualizar();
            break;
        case 7:
            let apagarServico = new ApagarServico(empresa.getServicos);
            apagarServico.apagar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}