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
import CadastroPets from "../negocio/cadastroPet";
import ApagarPets from "../negocio/apagarPet";
import AtualizarPet from "../negocio/atualizarPet";
import ListagemPets from "../negocio/listagemPets";
import ListagemValorProdutosServicosPorCliente from "../negocio/listagem5Clientes";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemProdutos from "../negocio/listagemProduto";
import AtualizarProduto from "../negocio/atualizarProduto";
import ApagarProdutos from "../negocio/apagarProduto";
import PedirProduto from "../negocio/pedirProduto";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Pet from "../modelo/pet";
import Listagem10Clientes from "../negocio/listagem10Clientes";
import ListagemProdutoPorCPF from "../negocio/listagemProdutoConsumido";
import ListagemServicoPorCPF from "../negocio/listagemServicoConsumido";
import RG from "../modelo/rg";

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
    console.log(`10 - Listar serviços consumidos por cliente`);	

    //Pets
    console.log(`11 - Cadastrar Pet`);
    console.log(`12 - Listar todos os Pets`);
    console.log(`13 - Atualizar Pet`);
    console.log(`14 - Apagar Pet`);
    
    //Produtos
    console.log(`15 - Cadastrar produto`);
    console.log(`16 - Listar todos os produtos`);
    console.log(`17 - Atualizar produto`);
    console.log(`18 - Apagar produto`);
    console.log(`19 - Pedir produto`);
    console.log(`20 - Listar produtos consumidos por cliente`);	
    
    
        
    //Listagens
    console.log(`21 - Listar os 5 clientes que mais consumiram produtos ou serviços por valor`);
    console.log(`22 - Listar os 10 clientes que mais consumiram produtos ou serviços por quantidade`);
    console.log(`23 - Listar os Serviços ou Produtos mais consumidos`);
    
    
    
    
    
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
            let listagemServicosConsumidos = new ListagemServicoPorCPF(empresa.getServicos, empresa.getClientes);
            listagemServicosConsumidos.listar();
            break;
        case 11:
            let cadastroPet = new CadastroPets(empresa.getPets, empresa.getClientes);
            cadastroPet.cadastrar();
            break;
        case 12:
            let listagemPets = new ListagemPets(empresa.getClientes);
            listagemPets.listar();
            break;
        case 13:
            let atualizarPet = new AtualizarPet(empresa.getClientes);
            atualizarPet.atualizar();
            break;
        case 14:
            let apagarPet = new ApagarPets(empresa.getClientes);
            apagarPet.apagar();
            break;
        case 15:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 16:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        case 17:
            let atualizarProduto = new AtualizarProduto(empresa.getProdutos);
            atualizarProduto.atualizar();
            break;
        case 18:
            let apagarProduto = new ApagarProdutos(empresa.getProdutos);
            apagarProduto.apagar();
            break;
        case 19:
            let pedirProduto = new PedirProduto(empresa.getProdutos, empresa.getClientes);
            pedirProduto.pedir();
            break;
        case 20:
            let listagemProdutosConsumidos = new ListagemProdutoPorCPF(empresa.getProdutos, empresa.getClientes);
            listagemProdutosConsumidos.listar();
            break;
        case 21:
            let listagem5Clientes = new ListagemValorProdutosServicosPorCliente(empresa.getProdutos, empresa.getServicos, empresa.getClientes);
            listagem5Clientes.listar();
            break;
        case 22:
            let listagem10Clientes = new Listagem10Clientes(empresa.getClientes);
            listagem10Clientes.listar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
            
        default:
            console.log(`Operação não entendida :(`)
    }
}