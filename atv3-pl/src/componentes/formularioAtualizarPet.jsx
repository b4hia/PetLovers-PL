import { useState } from 'react'

export default function FormularioAtualizarPet(props) {

    let tema = props.tema
    let red = props.red
    let green = '#00ff00'

    const [nome, setNome] = useState("")
    const [raça, setRaça] = useState("")
    const [cpf, setCPF] = useState("")
    const [tipo, setTipoPet] = useState("")
    const [genero, setGenero] = useState("")

    class Pet {
        constructor(nome, raça) {
            this.nome = nome;
            this.raça = raça;
        }
    }

    const [edit, setEdit] = useState(false);
    const [pets, setPets] = useState([new Pet("Nome1", "Raça1"), new Pet("Nome2", "Raça2")]);
    const [editingPet, setEditingPet] = useState(0);
    const [editingPetIndex, setEditingPetIndex] = useState(0);

    const handleInputChange = (e, field) => {
        let edPet = editingPet;
        edPet[field] = e.target.value;
        setEditingPet(edPet);
    };
    
    const handleEdit = (e) => {
        if (edit) {
            setEdit(false);
            let petss = pets;
            petss[editingPetIndex] = editingPet;
        } else {
            setEdit(true);
            setEditingPetIndex(e.target.value);
            setEditingPet(pets[e.target.value]);
            console.log(editingPet);
        };
        e.preventDefault();
    };
    let c = 0;
    console.log(pets);

    let lista = pets.map((pet) => {
        c += 1;
        return (
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${c}`} aria-expanded="true" aria-controls={`collapseOne${c}`}>
                                {pet.nome}
                            </button>
                        </h2>
                        <div id={`collapseOne${c}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <form className="row g-3">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Nome Pet1" aria-label="Nome Pet1" aria-describedby="basic-addon1" onChange={(e) => {setNome(e.target.value)}} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Raça Pet1" aria-label="Raça Pet1" aria-describedby="basic-addon1" onChange={(e) => {setRaça(e.target.value)}} />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="inputState"  className="form-label">Gênero do Pet</label>
                                        <select id="inputState" className="form-select" onChange={(e) => {setGenero(e.target.value)}}>
                                            <option selected>Escolha uma opção...</option>
                                            <option>Macho</option>
                                            <option>Fêmea</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputState" className="form-label">Tipo de Pet</label>
                                        <select id="inputState" className="form-select" onChange={(e) => {setTipoPet(e.target.value)}}>
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
                                        <a href="!!"><button className="input-group-text" style={{ background: green }}><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    );
                    });
                    
                    return (
                        <div className="container-fluid">
                        <br />
                        <form className="row g-3">
                            <div className="container text-center">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="CPF do Responsável pelo Pet" aria-label="CPF do Responsável pelo Pet" aria-describedby="basic-addon1" onChange={(e) => {setCPF(e.target.value)}}/>
                                </div>
                            </div>
                            <div className="container text-center">
                                <div className="input-group mb-5">
                                    <button className="btn btn-outline" type="button" style={{ background: tema }}>Buscar</button>
                                </div>
                            </div>
                        </form>
                        <h5>Lista com todos os Pets do Cliente</h5>
                        <div className="list-group">
                            <div className="accordion" id="accordionExample">
                        </div>
                    </div>
                </div>
            );
                    }
