import { Component } from "react";

type props = {
    tema: string
    azul: string
    seletorView: Function
}

export default class FormularioCadastroCliente extends Component<props> {
    constructor(props: props | Readonly<props>) {
        super(props)
    };
    render() {
        let azul = this.props.azul
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3"> 
                        <input type="text" className="form-control" placeholder="RG" aria-label="RG"/>
                        <span className="input-group-text">data de Emissão</span>
                        <input type="date" className="form-control" placeholder="Data de Emissão" aria-label="Data de Emissão"/>
                    </div>

                    <div className="input-group mb-3"> 
                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF"/>
                        <span className="input-group-text">data de Emissão</span>
                        <input type="date" className="form-control" placeholder="Data de Emissão" aria-label="Data de Emissão"/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                    </div>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <div className="input-group mb-3">
                                    <button className="btn btn-outline" type="button" style={{ background: azul }}>Finalizar Cadastro de Cliente</button>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-group mb-5">
                                    <button className="btn btn-outline" type="button" style={{ background: azul }} onClick={(e) => this.props.seletorView("Cadastrar Pet", e)}>Cadastrar um Pet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}