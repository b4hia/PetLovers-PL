/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'

export default function ListaCliente(props) {
    let tema = props.tema
    let red = props.red
    let green = props.green

    const [clientes, setClientes] = useState(["ASD", "ASD"]);
    let c = 0;

    clientes.map((cliente) => {
        c += 1;
        return (
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${c}`}aria-expanded="true" aria-controls={`collapseOne${c}`}>
                        Cliente 1
                    </button>
                </h2>
                <div id={`collapseOne${c}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <form className="row g-3">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Cliente1" aria-label="Cliente1" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Nome Social" aria-label="Nome Social" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <a href="!!"><button className="input-group-text" style={{ background: red }}><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                                <a href="!!"><button className="input-group-text" style={{ background: green }}><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                            </div>
                            <div className="col-md-11">
                                <label htmlFor="inputState" className="form-label">Selecionar Pet</label>
                                <select id="inputState" className="form-select">
                                    <option selected>Escolha uma opção...</option>
                                    <option>Pet1</option>
                                    <option>Pet2</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="inputState" className="form-label">Solicitar Serviço</label>
                                <select id="inputState" className="form-select">
                                    <option selected>Escolha uma opção...</option>
                                    <option>Serviço1</option>
                                    <option>Serviço2</option>
                                    <option>Serviço3</option>
                                    <option>Serviço4</option>
                                    <option>Serviço5</option>
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
                                    <option>Produto1</option>
                                    <option>Produto2</option>
                                    <option>Produto3</option>
                                    <option>Produto4</option>
                                    <option>Produto5</option>
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
        )
    })

    return (
        <div className="container-fluid">
            <h5>Lista com todos os clientes</h5>
            <hr />
            <div className="list-group">
                <div className="accordion" id="accordionExample">
                    {/* <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                Cliente 1
                            </button>
                        </h2>
                        <div id="collapseOne1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <form className="row g-3">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Cliente1" aria-label="Cliente1" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome Social" aria-label="Nome Social" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <a href="!!"><button className="input-group-text" style={{ background: red }}><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                                        <a href="!!"><button className="input-group-text" style={{ background: green }}><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                                    </div>
                                    <div className="col-md-11">
                                        <label htmlFor="inputState" className="form-label">Selecionar Pet</label>
                                        <select id="inputState" className="form-select">
                                            <option selected>Escolha uma opção...</option>
                                            <option>Pet1</option>
                                            <option>Pet2</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="inputState" className="form-label">Solicitar Serviço</label>
                                        <select id="inputState" className="form-select">
                                            <option selected>Escolha uma opção...</option>
                                            <option>Serviço1</option>
                                            <option>Serviço2</option>
                                            <option>Serviço3</option>
                                            <option>Serviço4</option>
                                            <option>Serviço5</option>
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
                                            <option>Produto1</option>
                                            <option>Produto2</option>
                                            <option>Produto3</option>
                                            <option>Produto4</option>
                                            <option>Produto5</option>
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
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                                    Cliente 2
                                </button>
                            </h2>
                            <div id="collapseOne2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <form className="row g-3">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Cliente2" aria-label="Cliente2" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Nome Social" aria-label="Nome Social" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                            <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <a href="!!"><button className="input-group-text" style={{ backgroundColor: red }}><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                                            <a href="!!"><button className="input-group-text" style={{ backgroundColor: green }}><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                                        </div>
                                        <div className="col-md-11">
                                            <label htmlFor="inputState" className="form-label">Selecionar Pet</label>
                                            <select id="inputState" className="form-select">
                                                <option selected>Escolha uma opção...</option>
                                                <option>Pet1</option>
                                                <option>Pet2</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="inputState" className="form-label">Solicitar Serviço</label>
                                            <select id="inputState" className="form-select">
                                                <option selected>Escolha uma opção...</option>
                                                <option>Serviço1</option>
                                                <option>Serviço2</option>
                                                <option>Serviço3</option>
                                                <option>Serviço4</option>
                                                <option>Serviço5</option>
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
                                                <option>Produto1</option>
                                                <option>Produto2</option>
                                                <option>Produto3</option>
                                                <option>Produto4</option>
                                                <option>Produto5</option>
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
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
                                        Cliente 3
                                    </button>
                                </h2>
                                <div id="collapseOne3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <form className="row g-3">
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Cliente3" aria-label="Cliente3" aria-describedby="basic-addon1" />
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Nome Social" aria-label="Nome Social" aria-describedby="basic-addon1" />
                                            </div>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                                <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                                            </div>
                                            <div className="input-group mb-3">
                                                <a href="!!"><button className="input-group-text" style={{ background: red }}><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                                                <a href="!!"><button className="input-group-text" style={{ background: green }}><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                                            </div>
                                            <div className="col-md-11">
                                                <label htmlFor="inputState" className="form-label">Selecionar Pet</label>
                                                <select id="inputState" className="form-select">
                                                    <option selected>Escolha uma opção...</option>
                                                    <option>Pet1</option>
                                                    <option>Pet2</option>
                                                </select>
                                            </div>
                                            <div className="col-md-3">
                                                <label htmlFor="inputState" className="form-label">Solicitar Serviço</label>
                                                <select id="inputState" className="form-select">
                                                    <option selected>Escolha uma opção...</option>
                                                    <option>Serviço1</option>
                                                    <option>Serviço2</option>
                                                    <option>Serviço3</option>
                                                    <option>Serviço4</option>
                                                    <option>Serviço5</option>
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
                                                    <option>Produto1</option>
                                                    <option>Produto2</option>
                                                    <option>Produto3</option>
                                                    <option>Produto4</option>
                                                    <option>Produto5</option>
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
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne4">
                                            Cliente 4
                                        </button>
                                    </h2>
                                    <div id="collapseOne4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <form className="row g-3">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Cliente4" aria-label="Cliente4" aria-describedby="basic-addon1" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Nome Social" aria-label="Nome Social" aria-describedby="basic-addon1" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                                                </div>
                                                <div className="input-group mb-3">
                                                    <a href="!!"><button className="input-group-text" style={{ background: red }}><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                                                    <a href="!!"><button className="input-group-text" style={{ background: green }}><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                                                </div>
                                                <div className="col-md-11">
                                                    <label htmlFor="inputState" className="form-label">Selecionar Pet</label>
                                                    <select id="inputState" className="form-select">
                                                        <option selected>Escolha uma opção...</option>
                                                        <option>Pet1</option>
                                                        <option>Pet2</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="inputState" className="form-label">Solicitar Serviço</label>
                                                    <select id="inputState" className="form-select">
                                                        <option selected>Escolha uma opção...</option>
                                                        <option>Serviço1</option>
                                                        <option>Serviço2</option>
                                                        <option>Serviço3</option>
                                                        <option>Serviço4</option>
                                                        <option>Serviço5</option>
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
                                                        <option>Produto1</option>
                                                        <option>Produto2</option>
                                                        <option>Produto3</option>
                                                        <option>Produto4</option>
                                                        <option>Produto5</option>
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
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true" aria-controls="collapseOne5">
                                                Cliente 5
                                            </button>
                                        </h2>
                                        <div id="collapseOne5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <form className="row g-3">
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" placeholder="Cliente5" aria-label="Cliente5" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" placeholder="Nome Social" aria-label="Nome Social" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                                        <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <div className="input-group mb-3">
                                                        <a href="!!"><button className="input-group-text" style={{ background: red }}><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                                                        <a href="!!"><button className="input-group-text" style={{ background: green }}><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                                                    </div>
                                                    <div className="col-md-11">
                                                        <label htmlFor="inputState" className="form-label">Selecionar Pet</label>
                                                        <select id="inputState" className="form-select">
                                                            <option selected>Escolha uma opção...</option>
                                                            <option>Pet1</option>
                                                            <option>Pet2</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="inputState" className="form-label">Solicitar Serviço</label>
                                                        <select id="inputState" className="form-select">
                                                            <option selected>Escolha uma opção...</option>
                                                            <option>Serviço1</option>
                                                            <option>Serviço2</option>
                                                            <option>Serviço3</option>
                                                            <option>Serviço4</option>
                                                            <option>Serviço5</option>
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
                                                            <option>Produto1</option>
                                                            <option>Produto2</option>
                                                            <option>Produto3</option>
                                                            <option>Produto4</option>
                                                            <option>Produto5</option>
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
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {ListaCliente}
                </div>
            </div>
            <br />
            <form className="row">
                <div className="col">
                    <div className="input-group mb-3">
                        <button className="btn btn-outline" type="button" style={{ background: tema }} onClick={(e) => this.props.seletorView("Buscar Tutor", e)}>Atualizar/Editar um Pet</button>
                    </div>
                </div>
                <div className="col">
                    <div className="input-group mb-3">
                        <button className="btn btn-outline" type="button" style={{ background: tema }} onClick={(e) => this.props.seletorView("Mais Consumidos", e)}>Produtos & Serviços mais consumidos</button>
                    </div>
                </div>
                <div className="col">
                    <div className="input-group mb-3">
                        <button className="btn btn-outline" type="button" style={{ background: tema }} onClick={(e) => this.props.seletorView("Pagamento", e)}>Ir para Pagamento</button>
                    </div>
                </div>
            </form>
        </div>
    )
}