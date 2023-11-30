import { useState } from 'react'
export default function Serviço(props) {
    let tema = props.tema
    let red = props.red
    let green = props.green
    
    class Servico {
        constructor(nome, preco) {
            this.nome = nome;
            this.preco = preco;
        }
    }

    const [edit, setEdit] = useState(false);
    const [serviços, setServiços] = useState([new Servico("Servico1", "25"), new Servico("Servico2", "25")]);
    const [editingServiço, setEditingServiço] = useState(0);
    const [editingServiçoIndex, setEditingServiçoIndex] = useState(0);

    const handleInputChange = (e, field) => {
        let edServiço = editingServiço;
        edServiço[field] = e.target.value;
        setEditingServiço(edServiço);
    };

    const handleEdit = (e) => {
        if (edit) {
            setEdit(false);
            let service = serviços;
            service[editingServiçoIndex] = editingServiço;
        } else {
            setEdit(true);
            setEditingServiçoIndex(e.target.value);
            setEditingServiço(serviços[e.target.value]);
            console.log(editingServiço);
        };
        e.preventDefault();
    };
    let c = 0;
    console.log(serviços);

    let lista = serviços.map((produto) => {
        c += 1;
        return (
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${c}`} aria-expanded="true" aria-controls={`collapseOne${c}`}>
                        {produto.nome}
                    </button>
                </h2>
                <div id={`collapseOne${c}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="input-group mt-3">
                            <span className="input-group-text">R$</span>
                            <input type="text" className="form-control" value={produto.preco} aria-label="Amount (to the nearest dollar)" disabled={!edit} onChange={(e) => handleInputChange(e, 'preco')}/>
                            <span className="input-group-text">.00</span>
                        </div>
                        <div className="input-group mb-3">
                            <a href="!!"><button className="input-group-text" style={{ background: red }}><i className="bi bi-trash" style={{ fontSize: 20 }}></i></button></a>
                            <a href="!!"><button className="input-group-text" style={{ background: green }} value={serviços.indexOf(produto)} onClick={handleEdit}><i className="bi bi-pencil" style={{ fontSize: 20 }}></i></button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
});
return (
    <div className="container-fluid">
        <h5>Cadastro de Serviço</h5>
        <hr />
        <form>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nome do Serviço" aria-label="Nome do Serviço" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">R$</span>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                <span className="input-group-text">.00</span>
            </div>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar novo Serviço</button>
            </div>
        </form>
        <div className="list-group">
            <div className="accordion" id="accordionExample">
                {lista}
            </div>
        </div>
        <br />
                    <h5>Serviços mais Consumidos em Quantidade</h5>
                    <ul className="list-group">
                        <li className="list-group-item"><i className="bi bi-award-fill" style={{ fontSize: 20 }}></i> Serviço1</li>
                        <li className="list-group-item"><i className="bi bi-award-fill" style={{ fontSize: 20 }}></i> Serviço2</li>
                        <li className="list-group-item"><i className="bi bi-award-fill" style={{ fontSize: 20 }}></i> Serviço3</li>
                        <li className="list-group-item">Serviço4</li>
                        <li className="list-group-item">Serviço5</li>
                    </ul>
        <br />

    </div>
        )
    }