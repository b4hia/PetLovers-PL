import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import Produtos from "./listaProdutos";
import Servicos from "./listaServiços";
import FormularioCadastroPet from "./formularioCadastroPet";

type state = {
    tela: string
}


export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#87c7fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#5eb4fc" red="#fc6464" />
                </>
            )
        }
        else if (this.state.tela === 'Cadastros') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#5eb4fc" azul="#5eb4fc" seletorView = {this.selecionarView} />
                </>
            )

        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <Produtos tema="#5eb4fc" red="#fc6464" />
                </>
            )
            }
        else if (this.state.tela === 'Cadastrar Pet') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroPet tema="#5eb4fc" />
                </>
            )
        } else {
            return (
                <>
                    {barraNavegacao}
                    <Servicos tema="#5eb4fc" red="#fc6464" />
                </>
            )
        }
    }
}