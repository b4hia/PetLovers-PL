/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = {
    tema: string
    red: string
}

export default class ListaCliente extends Component<props>{
    render() {
        let red = this.props.red
        let tema = this.props.tema
        let green = '#00ff00'
        return (
            <div className="container-fluid">
                <div className="list-group">
                <div className="list-group">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Cliente 1
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="col-md-4">
                                        <label htmlFor="inputState" className="form-label">Pedir Serviço</label>
                                            <select id="inputState" className="form-select">
                                                <option selected>Escolha uma opção...</option>
                                                <option>Cachorro</option>
                                                <option>Gato</option>
                                                <option>Ave</option>
                                                <option>Roedor</option>
                                                <option>Peixe</option>
                                                <option>Réptil</option>
                                                <option>Outros</option>
                                            </select>
                                        </div>
                                    <div className="input-group mb-3">
                                        <a href="!!"><button className="input-group-text" style={{ background: red }}><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                                        <a href="!!"><button className="input-group-text" style={{ background: green}}><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 1</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 3</a>
                    <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }} >Cliente 4</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 5</a>
                    <a href="#" className="list-group-item list-group-item-action">Cliente 6</a>
                </div>
            </div>
        )
    }
}