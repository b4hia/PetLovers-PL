import React, { useState } from 'react'
export default function Pagamento(props) {
    let tema = props.tema

    const [cpf, setCPF] = useState("")
    return (
        <div className="container-fluid">
            <br />
            <form className="row g-3">
                <div className="container text-center">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF do Cliente" value="000.000.000-00" aria-label="CPF do Cliente" aria-describedby="basic-addon1" onChange={(e) => { setCPF(e.target.value) }} />
                    </div>
                </div>
                <div className="container text-center">
                    <div className="input-group mb-5">
                        <button className="btn btn-outline" type="button" style={{ background: tema }}>Buscar Cliente</button>
                    </div>
                </div>
            </form>
            <h5>Produtos e Serviços Consumidos por Cliente</h5>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Nome do serviço</th>
                        <th scope="col">Preço do serviço por unidade</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Pet</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">***</th>
                        <td>***</td>
                        <td>***</td>
                        <td>***</td>
                    </tr>
                    <tr>
                        <th scope="row">***</th>
                        <td>***</td>
                        <td>***</td>
                        <td>***</td>
                    </tr>
                </tbody>
            </table>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Nome do produto</th>
                        <th scope="col">Preço do produto por unidade</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Pet</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">***</th>
                        <td>***</td>
                        <td>***</td>
                        <td>***</td>
                    </tr>
                    <tr>
                        <th scope="row">***</th>
                        <td>***</td>
                        <td>***</td>
                        <td>***</td>
                    </tr>
                </tbody>
            </table>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Total à pagar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">R$00,00</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

