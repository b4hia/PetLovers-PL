import { Component } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
type props = {
    tema: string
}


export default class Servicos extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome do Serviço" aria-label="Nome do Serviço" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">R$</span>
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                        <span className="input-group-text">.00</span>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
                <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action">Serviço 1
                        <div className="input-group mb-3">
                            <a href="!!"><button className="input-group-text"><i className="bi bi-trash" style={{ fontSize: 50 }}></i></button></a>
                            <a href="!!"><button className="input-group-text"><i className="bi bi-pencil" style={{ fontSize: 50 }}></i></button></a>
                        </div></a>
                        <a href="#" className="list-group-item list-group-item-action">Serviço 2
                        <div className="input-group mb-3">
                            <a href="!!"><button className="input-group-text"><i className="bi bi-trash" style={{ fontSize: 50 }}></i></button></a>
                            <a href="!!"><button className="input-group-text"><i className="bi bi-pencil" style={{ fontSize: 50 }}></i></button></a>
                        </div></a>
                        <a href="#" className="list-group-item list-group-item-action">Serviço 3
                        <div className="input-group mb-3">
                            <a href="!!"><button className="input-group-text"><i className="bi bi-trash" style={{ fontSize: 50 }}></i></button></a>
                            <a href="!!"><button className="input-group-text"><i className="bi bi-pencil" style={{ fontSize: 50 }}></i></button></a>
                        </div></a>
                        <a href="#" className="list-group-item list-group-item-action">Serviço 4
                        <div className="input-group mb-3">
                            <a href="!!"><button className="input-group-text"><i className="bi bi-trash" style={{ fontSize: 50 }}></i></button></a>
                            <a href="!!"><button className="input-group-text"><i className="bi bi-pencil" style={{ fontSize: 50 }}></i></button></a>
                        </div></a>
                        <a href="#" className="list-group-item list-group-item-action">Serviço 5
                        <div className="input-group mb-3">
                            <a href="!!"><button className="input-group-text"><i className="bi bi-trash" style={{ fontSize: 50 }}></i></button></a>
                            <a href="!!"><button className="input-group-text"><i className="bi bi-pencil" style={{ fontSize: 50 }}></i></button></a>
                        </div></a>
            </div>
        </div>
        )
    }
}