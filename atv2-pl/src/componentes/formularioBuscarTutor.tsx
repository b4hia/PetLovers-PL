import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class FormularioBuscarTutor extends Component<props> {
    constructor(props: props | Readonly<props>) {
        super(props)
    };
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <h5 className="text-center">Digite o CPF do Responsável pelo Pet</h5>
                <br />
                    <br />
                <form className="row g-3">
                <div className="container text-center">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF do Responsável pelo Pet" aria-label="CPF do Responsável pelo Pet" aria-describedby="basic-addon1" />
                    </div>
                </div>
                    <div className="container text-center">
                        <div className="input-group mb-5">
                        <button className="btn btn-outline" type="button" style={{ background: tema }} onClick={(e) => this.props.seletorView("Atualizar Pet", e)}>Buscar</button>
                        </div>    
                    </div>
                </form>
            </div>
        )
    }
}