import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ListaClientesMaisConsumiram(props) {
    const [clientesConsumiram, setClientesConsumiram] = useState([]);
    function clientesMaisConsumiram() {
        axios.get("http://localhost:3001/clientes").then((res) => {
            let clientes = res.data;
            axios.get("http://localhost:3001/vendas_produtos").then((res) => {
                const vendas_produtos = res.data;
                let clis = [];
                vendas_produtos.forEach((venda) => {
                    let cliente = clientes.find((c) => c.id === Number(venda.idCliente));
                    let nome = cliente.nome;
                    if (clis.find((c) => c.id === venda.idCliente)) {
                        clis.find((c) => c.id === venda.idCliente).quantidade += venda.quantidade;
                    } else clis.push({ id: venda.idCliente, quantidade: venda.quantidade, nome: nome });
                });
                axios.get("http://localhost:3001/vendas_servicos").then((res) => {
                    const vendas_servicos = res.data;
                    vendas_servicos.forEach((venda) => {
                        let cliente = clientes.find((c) => c.id === Number(venda.idCliente));
                        let nome = cliente.nome;
                        if (clis.find((c) => c.id === venda.idCliente)) {
                            clis.find((c) => c.id === venda.idCliente).quantidade += venda.quantidade;
                        } else clis.push({ id: venda.idCliente, quantidade: venda.quantidade, nome: nome });
                    });
                    clis.sort((a, b) => b.quantidade - a.quantidade);
                    setClientesConsumiram(clis);
                });
            });
        });
    };

    useEffect(() => {
        clientesMaisConsumiram();
    }, []);


    let maisConsumiram = clientesConsumiram.map((cliente) => {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={cliente.id}>
                {cliente.nome}
                <span className="badge bg-primary rounded-pill">{cliente.quantidade}</span>
                {console.log(cliente)}
            </li>
        );
    });

    return (
        <div className="container-fluid">
            <h5>Clientes que mais consumiram em quantidade</h5>
            <ul className="list-group">
                {maisConsumiram}
            </ul>
        </div>
    );
};