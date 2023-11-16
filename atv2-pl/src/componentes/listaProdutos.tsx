import { Component } from "react";

type props = {
    tema: string
}

export default class Produtos extends Component<props>{
    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome do Produto" aria-label="Nome do Produto" aria-describedby="basic-addon1" />
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
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    <a href="#" className="list-group-item list-group-item-action">Produto 1
                    <div className="input-group mb-3">
                        <a href="!!"><button className="input-group-text"><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                        <a href="!!"><button className="input-group-text"><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                    </div></a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 2
                    <div className="input-group mb-3">
                        <a href="!!"><button className="input-group-text"><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                        <a href="!!"><button className="input-group-text"><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                    </div></a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 3
                    <div className="input-group mb-3">
                        <a href="!!"><button className="input-group-text"><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                        <a href="!!"><button className="input-group-text"><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                    </div></a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 4
                    <div className="input-group mb-3">
                        <a href="!!"><button className="input-group-text"><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                        <a href="!!"><button className="input-group-text"><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                    </div></a>
                    <a href="#" className="list-group-item list-group-item-action">Produto 5
                    <div className="input-group mb-3">
                        <a href="!!"><button className="input-group-text"><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                        <a href="!!"><button className="input-group-text"><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                    </div></a>
            </div>
        </div>
        </div>
        )
    }
}