import { useEffect, useState } from "react";
import axios from "axios";

export default function VisualizarCliente(props) {
    let tema = props.tema;
    let red = props.red;
    let green = props.green;

    const [nome, setNome] = useState("");
    const [nome_social, setNomeSocial] = useState("");
    const [valorCPF, setValorCPF] = useState("");
    const [valorRG, setValorRG] = useState("");
    const [dataCPF, setDataCPF] = useState("");
    const [dataRG, setDataRG] = useState("");
    const [email, setEmail] = useState("");
    const [cliPets, setCliPets] = useState([]);
    const [servicos, setServicos] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [petSelecionado, setPetSelecionado] = useState({});

    const [edit, setEdit] = useState(false);

    useEffect(() => {
        if (!edit) {
            setTimeout(async () => {
                await axios.get(`http://localhost:3001/clientes/${props.idCliente}`).then((resposta) => {
                    setNome(resposta.data.nome);
                    setNomeSocial(resposta.data.nome_social);
                    setEmail(resposta.data.email);
                    setValorCPF(resposta.data.cpf.valor);
                    setValorRG(resposta.data.rg.valor);
                    setDataCPF(resposta.data.cpf.data);
                    setDataRG(resposta.data.rg.data);
                    setCliPets(resposta.data.pets);
                });
                await axios.get(`http://localhost:3001/servicos`).then((resposta) => {
                    setServicos(resposta.data);
                });
                await axios.get(`http://localhost:3001/produtos`).then((resposta) => {
                    setProdutos(resposta.data);
                });

            }, 1000);
        };
    });


    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text">Nome</span>
                    <input type="text" className="form-control" value={nome} aria-label="Nome" aria-describedby="basic-addon1" onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Nome social</span>
                    <input type="text" className="form-control" placeholder={nome_social} aria-label="Nome social" aria-describedby="basic-addon1" readOnly />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">RG</span>
                    <input type="text" className="form-control" placeholder={valorRG} aria-label="RG" readOnly />
                    <span className="input-group-text">Data de Emissão</span>
                    <input type="date" className="form-control" placeholder={dataRG} aria-label="Data de Emissão" readOnly />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">CPF</span>
                    <input type="text" className="form-control" placeholder={valorCPF} aria-label="CPF" readOnly />
                    <span className="input-group-text">Data de Emissão</span>
                    <input type="date" className="form-control" placeholder={`${dataCPF.split(/\//)[2]}/${dataCPF.split(/\//)[1]}/${dataCPF.split(/\//)[0]}`} aria-label="Data de Emissão" readOnly />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">E-mail</span>
                    <input type="text" className="form-control" placeholder={email} aria-label="E-mail" readOnly />
                </div>

                <div className="input-group mb-3">
                    <a href="!!"><button className="input-group-text" title="Clique aqui para excluir o cliente" style={{ background: red }}><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                    <a href="!!"><button className="input-group-text" title="Clique aqui para editar ou salvar edições" data-bs-trigger="hover focus" data-bs-content="Clique aqui para editar" style={{ background: green }} onClick={(e) => { setEdit(edit ? false : true); e.preventDefault() }}><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                </div>
                <div className="col-md-11">
                    <label htmlFor="inputState" className="form-label">Selecionar Pet</label>
                    <select id="inputState" className="form-select" onChange={(e) => { setPetSelecionado(cliPets.find(pet => pet.id == e.target.value)) }}>
                        <option selected>Escolha uma opção...</option>
                        {cliPets.map((pet, index) => (
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
    );
};
