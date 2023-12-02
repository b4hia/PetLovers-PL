import { useEffect, useState } from 'react'
import axios from 'axios';
import alterarPet from '../utils/alterarPet';

export default function FormularioAtualizarPet(props) {

    let tema = props.tema;
    let red = props.red;
    let green = '#00ff00';

    class Pet {
        constructor(nome, raça) {
            this.nome = nome;
            this.raça = raça;
        };
    };


    const [cpf, setCPF] = useState("");
    const [edit, setEdit] = useState(false);
    const [pets, setPets] = useState([]);
    const [editingPetIndex, setEditingPetIndex] = useState(0);
    const [tipo, setTipo] = useState("");
    const [genero, setGenero] = useState("");
    const [nome, setNome] = useState("");
    const [raca, setRaca] = useState("");

    const handleEdit = (index) => {
        if (edit) {
            let a = [...pets];
            a[editingPetIndex] = { nome: nome, raca: raca, genero: genero, tipo: tipo }
            alterarPet(a, cpf);
            axios.get(`http://localhost:3001/clientes`).then((response) => {
                console.log("Status:", response.status)
                const cliente = response.data.find((cliente) => cliente.cpf.valor === cpf);
                if (cliente) {
                    setPets(cliente.pets);
                    console.log("Pets buscar:", pets)
                } else {
                    alert("Cliente não encontrado!");
                };
            })
        } else {
            setEditingPetIndex(index);
        }
        setEdit(!edit);
    };

    let c = 0;
    let lista = pets.map((pet, index) => {
        c += 1;
        return (
            <div key={index} className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${c}`} aria-expanded="true" aria-controls={`collapseOne${c}`}>
                        {pet.nome}
                    </button>
                </h2>
                <div id={`collapseOne${c}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder={"Nome: " + pet.nome} aria-label="Nome Pet1" aria-describedby="basic-addon1" disabled={!edit} onChange={(e) => setNome(e.target.value)} />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder={"Raça: " + pet.raca} aria-label="Raça Pet1" aria-describedby="basic-addon1" disabled={!edit} onChange={(e) => setRaca(e.target.value)} />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="inputState" className="form-label">Gênero do Pet: {pet.genero}</label>
                                <select id="inputState" className="form-select" disabled={!edit} onChange={(e) => { setGenero(e.target.value) }}>
                                    <option selected>Escolha uma opção...</option>
                                    <option>Macho</option>
                                    <option>Fêmea</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">Tipo de Pet: {pet.tipo}</label>
                                <select id="inputState" className="form-select" disabled={!edit} onChange={(e) => { setTipo(e.target.value) }}>
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
                                <a href=""><button className="input-group-text" title="Clique aqui para excluir o pet" style={{ background: red }}><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                                <a href=""><button className="input-group-text" title="Clique aqui para editar ou salvar edições" data-bs-trigger="hover focus" data-bs-content="Clique aqui para editar" style={{ background: green }} value={pets.indexOf(pet)} onClick={() => handleEdit(pets.indexOf(pet), { nome: pet.nome, raca: pet.raca, genero: pet.genero, tipo: pet.tipo })}><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    });

    function handleSubmit(e) {
        e.preventDefault();
        axios.get(`http://localhost:3001/clientes`).then((response) => {
            const cliente = response.data.find((cliente) => cliente.cpf.valor === cpf);
            if (cliente) {
                setPets(cliente.pets);
                console.log("Pets buscar:", pets)
            } else {
                alert("Cliente não encontrado!");
            };
        });
    };

    return (
        <div className="container-fluid">
            <br />
            <form className="row g-3" onSubmit={(e) => handleSubmit(e)}>
                <div className="container text-center">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF do Responsável pelo Pet" aria-label="CPF do Responsável pelo Pet" aria-describedby="basic-addon1" onChange={(e) => setCPF(e.target.value)} />
                    </div>
                </div>
                <div className="container text-center">
                    <div className="input-group mb-5">
                        <button className="btn btn-outline" type="submit" style={{ background: tema }}>Buscar</button>
                    </div>
                </div>
            </form>
            <h5>Lista com todos os Pets do Cliente</h5>
            <div className="list-group">
                <div className="accordion" id="accordionExample">
                    {lista}
                </div>
            </div>
        </div>
    );
}
