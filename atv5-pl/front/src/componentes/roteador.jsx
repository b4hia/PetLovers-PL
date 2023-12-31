/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import Produtos from "./listaProdutos";
import Serviços from "./listaServiços";
import FormularioCadastroPet from "./formularioCadastroPet";
import Pagamento from "./pagamento";
import MaisConsumidos from "./listaMaisConsumidos";
import FormularioAtualizarPet from "./formularioAtualizarPet";
import VisualizarCliente from "./visualizarCliente";
import ListaClientesMaisConsumiram from "./listaClientesMaisConsumiram";
import ListaMaisConsumiramValor from "./listaMaisConsumiramValor";
import RegistroConsumo from "./registroConsumo";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
        console.log(valor);
    }

    const botoes = ['Clientes', 'Cadastros', 'Produtos', 'Serviços', 'Mais consumiram em quantidade', 'Mais consumiram em valor', 'Registro de consumo'];

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={botoes} />
                    <ListaCliente tema="#5eb4fc" red="#fc6464" green="#00ff00" seletorView={selecionarView} />
                </>
            )
        }
        else if (tela === 'Cadastros') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={botoes} />
                    <FormularioCadastroCliente tema="#5eb4fc" azul="#5eb4fc" seletorView={selecionarView} />
                </>
            )
        }
        else if (tela === 'Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={botoes} />
                    <Produtos tema="#5eb4fc" red="#fc6464" green="#00ff00" />
                </>
            )
        }
        else if (tela === 'Serviços') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={botoes} />
                    <Serviços tema="#5eb4fc" red="#fc6464" green="#00ff00" />
                </>
            )
        }
        else if (tela === 'Cadastrar Pet') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={botoes} />
                    <FormularioCadastroPet tema="#5eb4fc" red="#fc6464" />
                </>
            )
        }
        else if (tela === 'Pagamento') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={botoes} />
                    <Pagamento tema="#5eb4fc" red="#fc6464" />
                </>
            )
        }
        else if (tela === 'Mais Consumidos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={botoes} />
                    <MaisConsumidos tema="#5eb4fc" red="#fc6464" />
                </>
            )
        }
        else if (tela === 'Buscar Tutor') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={botoes} />
                    <FormularioAtualizarPet tema="#5eb4fc" red="#fc6464" azul="#5eb4fc" />
                </>
            )
        } else if (tela === "Mais consumiram em quantidade") {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={botoes} />
                    <ListaClientesMaisConsumiram />
                </>
            )
        } else if (tela === "Mais consumiram em valor") {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={botoes} />
                    <ListaMaisConsumiramValor />
                </>
            )
        } else if (tela === "Registro de consumo") {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={botoes} />
                    <RegistroConsumo />
                </>
            )
        } else {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={botoes} />
                    <FormularioCadastroCliente seletorView={selecionarView} tema="#5eb4fc" azul="#5eb4fc" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}