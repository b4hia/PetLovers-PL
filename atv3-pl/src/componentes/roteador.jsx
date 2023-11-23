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

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
        console.log(valor);
    }
    

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
                    <ListaCliente tema="#5eb4fc" red="#fc6464" green="#00ff00" seletorView={selecionarView} />
                </>
            )}
        else if (tela === 'Cadastros') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
                    <FormularioCadastroCliente tema="#5eb4fc" azul="#5eb4fc" seletorView={selecionarView}/>
                </>
            )}
        else if (tela === 'Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
                    <Produtos tema="#5eb4fc" red="#fc6464" green="#00ff00"/>
                </>
            )}
        else if (tela === 'Serviços') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
                    <Serviços tema="#5eb4fc" red="#fc6464" green="#00ff00"/>
                </>
            )}
        else if (tela === 'Cadastrar Pet') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
                    <FormularioCadastroPet tema="#5eb4fc" red="#fc6464" />
                </>
            )}
        else if (tela === 'Pagamento') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
                    <Pagamento tema="#5eb4fc" red="#fc6464" />
                </>
            )}
        else if (tela === 'Mais Consumidos') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
                    <MaisConsumidos tema="#5eb4fc" red="#fc6464" />
                </>
            )}
        else if (tela === 'Buscar Tutor') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#87c7fd" botoes={['Clientes', 'Cadastros', 'Produtos', 'Serviços']} />
                    <FormularioAtualizarPet tema="#5eb4fc" red="#fc6464" azul="#5eb4fc" />
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