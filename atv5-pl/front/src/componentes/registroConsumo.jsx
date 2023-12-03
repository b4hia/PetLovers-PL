import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RegistroConsumo() {
    const [clientes, setClientes] = useState([]);
    const [vendasProdutos, setVendasProdutos] = useState([]);
    const [vendasServicos, setVendasServicos] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [servicos, setServicos] = useState([]);

    function getClientes() {
        axios.get("http://localhost:3001/clientes").then((res) => {
            const clientes = res.data;
            setClientes(clientes);
        });
    };

    function getProdutos() {
        axios.get("http://localhost:3001/produtos").then((res) => {
            const produtos = res.data;
            setProdutos(produtos);
        });
    };

    function getServicos() {
        axios.get("http://localhost:3001/servicos").then((res) => {
            const servicos = res.data;
            setServicos(servicos);
        });
    };

    useEffect(() => {
        getClientes();
        getProdutos();
        getServicos();
    }, []);

    function handleChange(e) {
        getVendasProdutos(e.target.value);
        getVendasServicos(e.target.value);
    };

    function getVendasProdutos(idCliente) {
        axios.get("http://localhost:3001/vendas_produtos").then((res) => {
            const vendas_produtos = res.data;
            let vendas = [];
            vendas_produtos.forEach((venda) => {
                if (venda.idCliente === Number(idCliente)) {
                    vendas.push(venda);
                };
            });
            setVendasProdutos(vendas);
        });
    };

    function getVendasServicos(idCliente) {
        axios.get("http://localhost:3001/vendas_servicos").then((res) => {
            const vendas_servicos = res.data;
            let vendas = [];
            vendas_servicos.forEach((venda) => {
                console.log(venda, idCliente);
                if (venda.idCliente === Number(idCliente)) {
                    vendas.push(venda);
                };
            });
            setVendasServicos(vendas);
        });
    };

    let vendasProds = vendasProdutos.map((venda) => {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={venda.id}>
                {produtos.find((p) => p.id === venda.idProduto).nome}
                <span className="badge bg-primary rounded-pill">{venda.quantidade}</span>
            </li>
        );
    });

    let vendasServs = vendasServicos.map((venda) => {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={venda.id}>
                {servicos.find((s) => s.id === venda.idServico).nome}
                <span className="badge bg-primary rounded-pill">{venda.quantidade}</span>
            </li>
        );
    });

    return (
        <div className="container-fluid">
            <h3>Registro de consumo dos clientes</h3>
            <h5>Selecione o cliente</h5>
            <select className="form-select" aria-label="Default select example" onChange={handleChange}>
                <option selected>Selecione o cliente</option>
                {
                    clientes.map((cliente) => {
                        return (
                            <option value={cliente.id}>{cliente.nome}</option>
                        );
                    })
                }
            </select>

            <ul className="list-group">
                <h5>Produtos</h5>
                {vendasProds}
            </ul>

            <ul className="list-group">
                <h5>Serviços</h5>
                {vendasServs}
            </ul>
        </div>
    );
};