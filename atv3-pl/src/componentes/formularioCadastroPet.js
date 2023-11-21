export default function FormularioCadastroPet(props) {
    let tema = props.tema
    let azul = props.azul
    return (
        <div className="container-fluid">
                <h5>Cadastro de Pet</h5>
                <hr />
                <form className="row g-3">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome do Pet" aria-label="Nome do Pet" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Raça do Pet" aria-label="Raça do Pet" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF do Responsável pelo Pet" aria-label="CPF do Responsável pelo Pet" aria-describedby="basic-addon1" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="inputState" className="form-label">Gênero do Pet</label>
                        <select id="inputState" className="form-select">
                            <option selected>Escolha uma opção...</option>
                            <option>Macho</option>
                            <option>Fêmea</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">Tipo de Pet</label>
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
                    <hr />
                    <div className="container text-center">
                        <div className="input-group mb-5">
                            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar Pet</button>
                        </div>    
                    </div>
                </form>
            </div>
        )
    }