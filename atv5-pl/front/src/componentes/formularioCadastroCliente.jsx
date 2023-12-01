import { useState } from "react"
import axios from "axios";

export default function FormularioCadastroCliente(props) {
    let tema = props.tema;
    let azul = props.azul;
    let seletorView = props.seletorView;

    const [nome, setNome] = useState("")
    const [nomesocial, setNomeSocial] = useState("")
    const [rg, setRG] = useState("")
    const [rgdata, setRGemissao] = useState("")
    const [cpf, setCPF] = useState("")
    const [cpfdata, setCPFemissao] = useState("")
    const [mail, setMail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let cliente = {
            nome: nome,
            nome_social: nomesocial,
            rg: {
                valor: rg,
                data: rgdata
            },
            cpf: {
                valor: cpf,
                data: cpfdata
            },
            email: mail,
            servicos: [],
            produtos: [],
            pets: []
        };
        axios.post("http://localhost:3001/clientes", cliente).then((resposta) => {
            console.log(resposta.data);
            seletorView("Clientes", e);
        });
    };

    return (
        <div className="container-fluid">
                <h5>Cadastro de Cliente</h5>
                <hr />
                
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" onChange={(e) => {setNome(e.target.value)}}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" onChange={(e) => {setNomeSocial(e.target.value)}} />
                    </div>
                    <div className="input-group mb-3"> 
                        <input type="text" className="form-control" placeholder="RG" aria-label="RG" onChange={(e) => {setRG(e.target.value)}}/>
                        <span className="input-group-text">data de Emissão</span>
                        <input type="date" className="form-control" placeholder="Data de Emissão" aria-label="Data de Emissão" onChange={(e) => {setRGemissao(e.target.value)}}/>
                    </div>

                    <div className="input-group mb-3"> 
                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" onChange={(e) => {setCPF(e.target.value)}}/>
                        <span className="input-group-text">data de Emissão</span>
                        <input type="date" className="form-control" placeholder="Data de Emissão" aria-label="Data de Emissão" onChange={(e) => {setCPFemissao(e.target.value)}}/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" onChange={(e) => {setMail(e.target.value)}} />
                    </div>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <div className="input-group mb-3">
                                    <button className="btn btn-outline" type="submit" style={{ background: azul }}>Finalizar Cadastro de Cliente</button>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group mb-3">
                                    <button className="btn btn-outline" type="button" style={{ background: azul }} onClick={(e) => props.seletorView("Cadastrar Pet", e)}>Cadastrar Pet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
}