import { useEffect, useState } from 'react';
import cadastrarProduto from '../utils/cadastrarProduto';
import alterarProduto from '../utils/alterarProduto';
import axios from 'axios';

export default function Produtos(props) {
    let tema = props.tema
    let red = props.red
    let green = props.green

    class Produto {
        constructor(nome, preco) {
            this.nome = nome;
            this.preco = preco;
        }
    }

    const [produtos, setProdutos] = useState([]);
    const [edit, setEdit] = useState(false);

    const [id, setId] = useState(0);
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);

    const [produtosConsumidos, setProdutosConsumidos] = useState([]);
    function produtosMaisConsumidos() {
        axios.get("http://localhost:3001/produtos").then((res) => {
            let produtos = res.data;
            axios.get("http://localhost:3001/vendas_produtos").then((res) => {
                const vendas_produtos = res.data;
                let prods = [];
                vendas_produtos.forEach((venda) => {
                    let produto = produtos.find((p) => p.id === Number(venda.idProduto));
                    let nome = produto.nome;
                    if (prods.find((p) => p.id === venda.idProduto)) {
                        prods.find((p) => p.id === venda.idProduto).quantidade += venda.quantidade;
                    } else prods.push({ id: venda.idProduto, quantidade: venda.quantidade, nome: nome });
                });
                prods.sort((a, b) => b.quantidade - a.quantidade);
                setProdutosConsumidos(prods);
            });
        });
    };

    useEffect(() => {
        axios.get('http://localhost:3001/produtos')
            .then((response) => {
                setProdutos(response.data);
            })
            .catch((err) => console.log(err))
        produtosMaisConsumidos();
    }, []);

    function handleEdit(e) {
        e.preventDefault();
        if (edit) {
            alterarProduto({ id: id, nome: nome, preco: Number(preco) });
        };
        setEdit(!edit);
    };

    let c = 0;
    let lista = produtos.map((produto) => {
        c += 1;
        return (
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${c}`} aria-expanded="true" aria-controls={`collapseOne${c}`}>
                        {produto.nome}
                    </button>
                </h2>
                <div id={`collapseOne${c}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="input-group mt-3">
                            <span className="input-group-text">R$</span>
                            <input type="text" className="form-control" placeholder={produto.preco} aria-label="Amount (to the nearest dollar)" disabled={!edit} onChange={(e) => { setPreco(e.target.value); setId(produto.id); setNome(produto.nome) }} />
                            <span className="input-group-text">.00</span>
                        </div>
                        <div className="input-group mb-3">
                            <a href="!!"><button className="input-group-text" style={{ background: red }}><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                            <a href="!!"><button className="input-group-text" style={{ background: green }} onClick={(e) => handleEdit(e)} value={produtos.indexOf(produto)}><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    console.log("Produtos Consumidos:", produtosConsumidos);
    let maisConsumidos = produtosConsumidos.map((produto) => {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {produto.nome}
                <span className="badge bg-primary rounded-pill">{produto.quantidade}</span>
            </li>
        );
    });

    const [nomeProduto, setNomeProduto] = useState("");
    const [precoProduto, setPrecoProduto] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        cadastrarProduto({ nome: nomeProduto, preco: Number(precoProduto) });
    };

    return (
        <div className="container-fluid">
            <h5>Cadastro de Produto</h5>
            <hr />
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do Produto" aria-label="Nome do Produto" aria-describedby="basic-addon1" onChange={(e) => setNomeProduto(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">R$</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={(e) => setPrecoProduto(e.target.value)} />
                    <span className="input-group-text">.00</span>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>Cadastrar novo Produto</button>
                </div>
            </form>
            <div className="list-group">
                <div className="accordion" id="accordionExample">
                    {lista}
                </div>
            </div>
            <br />
            <h5>Produtos mais Consumidos em Quantidade</h5>
            <ul className="list-group">
                {maisConsumidos}
            </ul>
            <br />
        </div>
    );
};
