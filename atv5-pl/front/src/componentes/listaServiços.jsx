import { useState, useEffect } from 'react'
import alterarServico from '../utils/alterarServico';
import axios from 'axios';
import cadastrarServico from '../utils/cadastrarServico';

export default function Serviço(props) {
    let tema = props.tema
    let red = props.red
    let green = props.green

    class Servico {
        constructor(nome, preco) {
            this.nome = nome;
            this.preco = preco;
        }
    }

    const [edit, setEdit] = useState(false);
    const [servicos, setServicos] = useState([]);

    const [id, setId] = useState(0);
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");

    const [servicosConsumidos, setServicosConsumidos] = useState([]);
    function servicosMaisConsumidos() {
        axios.get("http://localhost:3001/servicos").then((res) => {
            let servicos = res.data;
            axios.get("http://localhost:3001/vendas_servicos").then((res) => {
                const vendas_servicos = res.data;
                let servs = [];
                vendas_servicos.forEach((venda) => {
                    let servico = servicos.find((s) => s.id === Number(venda.idServico));
                    let nome = servico.nome;
                    if (servs.find((s) => s.id === venda.idServico)) servs.find((s) => s.id === venda.idServico).quantidade += venda.quantidade;
                    else servs.push({ id: venda.idServico, quantidade: venda.quantidade, nome: nome });
                });
                servs.sort((a, b) => b.quantidade - a.quantidade);
                setServicosConsumidos(servs);
            });
        });
    };

    useEffect(() => {
        axios.get('http://localhost:3001/servicos')
            .then((response) => {
                setServicos(response.data);
            })
            .catch((err) => console.log(err))
        servicosMaisConsumidos();
    }, []);

    function handleDelete(id) {
        axios.delete(`http://localhost:3001/servicos/${id}`).then((resposta) => {
            console.log(resposta.data);
        });
    };

    const handleEdit = (e) => {
        e.preventDefault();
        if (edit) {
            alterarServico({ id: id, nome: nome, preco: Number(preco) });
        };
        setEdit(!edit);
    };

    let c = 0;
    let lista = servicos.map((servico) => {
        c += 1;
        return (
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${c}`} aria-expanded="true" aria-controls={`collapseOne${c}`}>
                        {servico.nome}
                    </button>
                </h2>
                <div id={`collapseOne${c}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="input-group mt-3">
                            <span className="input-group-text">R$</span>
                            <input type="text" className="form-control" placeholder={servico.preco} aria-label="Amount (to the nearest dollar)" disabled={!edit} onChange={(e) => { setPreco(e.target.value); setId(servico.id); setNome(servico.nome) }} />
                            <span className="input-group-text">.00</span>
                        </div>
                        <div className="input-group mb-3">
                            <a href="!!"><button className="input-group-text" style={{ background: red }} onClick={() => handleDelete(servico.id)}><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                            <a href="!!"><button className="input-group-text" style={{ background: green }} value={servicos.indexOf(servico)} onClick={(e) => handleEdit(e)}><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    const [nomeServico, setNomeServico] = useState("");
    const [precoServico, setPrecoServico] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        cadastrarServico({ nome: nomeServico, preco: Number(precoServico) });
    };

    let listaConsumidos = servicosConsumidos.map((servico) => {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {servico.nome}
                <span className="badge bg-primary rounded-pill">{servico.quantidade}</span>
            </li>
        )
    });

    return (
        <div className="container-fluid">
            <h5>Cadastro de Serviço</h5>
            <hr />
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do Serviço" aria-label="Nome do Serviço" aria-describedby="basic-addon1" onChange={(e) => setNomeServico(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">R$</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={(e) => setPrecoServico(e.target.value)} />
                    <span className="input-group-text">.00</span>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>Cadastrar novo Serviço</button>
                </div>
            </form>
            <div className="list-group">
                <div className="accordion" id="accordionExample">
                    {lista}
                </div>
            </div>
            <br />
            <h5>Serviços mais Consumidos em Quantidade</h5>
            <ul className="list-group">
                {/* <li className="list-group-item"><i className="bi bi-award-fill" style={{ fontSize: 20 }}></i> Serviço1</li> */}
                {listaConsumidos}
            </ul>
            <br />

        </div>
    )
}