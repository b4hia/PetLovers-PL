/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function ListaCliente(props) {
    let tema = props.tema
    let red = props.red
    let green = props.green

    class Cliente {
        constructor(nome, nomeSocial, rg, cpf, email) {
            this.nome = nome;
            this.nomeSocial = nomeSocial;
            this.rg = rg;
            this.cpf = cpf;
            this.email = email;
        }
    }
    const [clientes, setClientes] = useState([]);
    const [edit, setEdit] = useState(false);
    const [servicos, setServicos] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [editingClient, setEditingClient] = useState({});
    const [rg, setRG] = useState({});
    const [cpf, setCPF] = useState({});

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchData = async () => {
            try {
                const responseClientes = await axios.get("http://localhost:3001/clientes", { cancelToken: source.token });
                setClientes(responseClientes.data);
                setCPF(responseClientes.data.cpf);
                setRG(responseClientes.data.rg);

                const responseServicos = await axios.get("http://localhost:3001/servicos", { cancelToken: source.token });
                setServicos(responseServicos.data);

                const responseProdutos = await axios.get("http://localhost:3001/produtos", { cancelToken: source.token });
                setProdutos(responseProdutos.data);
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Requisição cancelada', err.message);
                } else {
                    console.log(err);
                }
            }
        };

        fetchData();

        return () => {
            source.cancel('Operação cancelada pelo usuário.');
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    function handleChange(e) {
        const { name, value } = e.target;
        let a = editingClient;
        a[name] = value;
        setEditingClient(a);
        console.log(editingClient);
    };

    function handleEdit(id, nome, nome_social, rg, cpf, email) {
        if (edit === true) {
            axios.patch(`http://localhost:3001/clientes/${id}`, {
                nome: editingClient.nome,
                nome_social: editingClient.nome_social,
                rg: rg,
                cpf: cpf,
                email: editingClient.email
            }).then((resposta) => {
                console.log(resposta.data);
            });
        } else {
            setEditingClient({ id: id, nome: nome, nome_social: nome_social, rg: rg, cpf: cpf, email: email });
            console.log(editingClient);
        };
        setEdit(!edit);
    };

    function handleDelete(id) {
        axios.delete(`http://localhost:3001/clientes/${id}`).then((resposta) => {
            console.log(resposta.data);
        });
    };

    let c = 0;
    const lista = clientes.map((cliente, index) => {
        c += 1;
        return (
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${c}`} aria-expanded="true" aria-controls={`collapseOne${c}`}>
                        {cliente.nome}
                    </button>
                </h2>
                <div id={`collapseOne${c}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder={"Nome: " + cliente.nome} aria-label="Cliente1" aria-describedby="basic-addon1" disabled={!edit} onChange={(e) => handleChange(e)} name='nome'/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder={"Nome social: " + cliente.nome_social} aria-label="Nome Social" aria-describedby="basic-addon1" disabled={!edit} onChange={(e) => handleChange(e)} name='nome_social'/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                <input type="text" className="form-control" placeholder={cliente.email} aria-label="E-mail" aria-describedby="basic-addon1" disabled={!edit} onChange={(e) => handleChange(e)} name='email'/>
                            </div>
                            <div className="input-group mb-3">
                                <a href="!!"><button className="input-group-text" title="Clique aqui para excluir o cliente" style={{ background: red }} onClick={() => handleDelete(cliente.id)}><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                                <a href="!!"><button className="input-group-text" title="Clique aqui para editar ou salvar edições" data-bs-trigger="hover focus" data-bs-content="Clique aqui para editar" style={{ background: green }} onClick={() => handleEdit(cliente.id, cliente.nome, cliente.nome_social, cliente.rg, cliente.cpf, cliente.email)}><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                            </div>
                            <div className="col-md-11">
                                <label htmlFor="inputState" className="form-label">Selecionar Pet</label>
                                <select id="inputState" className="form-select">
                                    <option selected>Escolha uma opção...</option>
                                    {cliente.pets.map((pet, index) => (
                                        <option key={index} value={pet.id}>{pet.nome}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="inputState" className="form-label">Solicitar Serviço</label>
                                <select id="inputState" className="form-select">
                                    <option selected>Escolha uma opção...</option>
                                    {servicos.map((servico, index) => (
                                        <option key={index} value={servico.id}>{servico.nome}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-1">
                                <label htmlFor="inputState" className="form-label">Quantidade</label>
                                <input type="number" className="form-control" placeholder="" aria-label="Quantidade" />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="inputState" className="form-label">Solicitar Produto</label>
                                <select id="inputState" className="form-select">
                                    <option selected>Escolha uma opção...</option>
                                    {produtos.map((produto, index) => (
                                        <option key={index} value={produto.id}>{produto.nome}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-1">
                                <label htmlFor="inputState" className="form-label">Quantidade</label>
                                <input type="number" className="form-control" placeholder="" aria-label="Quantidade" />
                            </div>
                            <div className="col-md-1">
                                <button className="btn btn-outline" type="button" style={{ background: tema }} >Fazer Pedido</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="container-fluid">
            <h5>Lista com todos os clientes</h5>
            <hr />
            <div className="list-group">
                <div className="accordion" id="accordionExample">
                    {lista}
                </div>
            </div>
            <br />
            <form className="row">
                <div className="col">
                    <div className="input-group mb-3">
                        <button className="btn btn-outline" type="button" style={{ background: tema }} onClick={(e) => props.seletorView("Buscar Tutor", e)}>Atualizar/Editar um Pet</button>
                    </div>
                </div>
                <div className="col">
                    <div className="input-group mb-3">
                        <button className="btn btn-outline" type="button" style={{ background: tema }} onClick={(e) => props.seletorView("Mais Consumidos", e)}>Produtos & Serviços mais consumidos</button>
                    </div>
                </div>
                <div className="col">
                    <div className="input-group mb-3">
                        <button className="btn btn-outline" type="button" style={{ background: tema }} onClick={(e) => props.seletorView("Pagamento", e)}>Ir para Pagamento</button>
                    </div>
                </div>
            </form>
        </div>
    )
}