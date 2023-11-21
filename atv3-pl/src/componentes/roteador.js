/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import Produtos from "./listaProdutos";
import Serviços from "./listaServiços";
import FormularioCadastroPet from "./formularioCadastroPet";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
                    <ListaCliente tema="#5eb4fc" red="#fc6464" green="#00ff00" />
                </>
            )}
        else if (tela === 'Cadastros') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
                    <FormularioCadastroCliente tema="#5eb4fc" azul="#5eb4fc" />
                </>
            )}
        else if (tela === 'Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
                    <Produtos tema="#5eb4fc" red="#fc6464"/>
                </>
            )}
        else if (tela === 'Serviços') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
                    <Serviços tema="#5eb4fc" red="#fc6464"/>
                </>
            )}
        else if (tela === 'Cadastrar Pet') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
                    <FormularioCadastroPet tema="#5eb4fc" red="#fc6464"/>
                </>
            )
        } else {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
                    <FormularioCadastroCliente tema="#5eb4fc" azul="#5eb4fc" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}