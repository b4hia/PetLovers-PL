import { useState } from 'react';
import axios from "axios";

export default function MaisConsumidos(props) {

        let tema = props.tema
        return (
            <div className="container-fluid">
                <br />
            <h5>Produtos mais consumidos por tipo de Pet</h5>
            <br />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Cachorro</th>
                        <th scope="col" style={{background: tema}}>Raça</th>
                        <th scope="col">Gato</th>
                        <th scope="col" style={{background: tema}}>Raça</th>
                        <th scope="col">Ave</th>
                        <th scope="col" style={{background: tema}}>Raça</th>
                        <th scope="col">Roedor</th>
                        <th scope="col" style={{background: tema}}>Raça</th>
                        <th scope="col">Peixe</th>
                        <th scope="col" style={{background: tema}}>Raça</th>
                        <th scope="col">Réptil</th>
                        <th scope="col" style={{background: tema}}>Raça</th>
                        <th scope="col">Outros</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th scope="row">NomeProduto</th>
                        <td style={{background: tema}}>***</td>
                        <td>NomeProduto</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeProduto</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeProduto</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeProduto</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeProduto</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeProduto</td>
                    </tr>
                    <tr>
                        <th scope="row">NomeProduto</th>
                        <td style={{background: tema}}>***</td>
                        <td>NomeProduto</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeProduto</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeProduto</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeProduto</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeProduto</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeProduto</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <h5>Serviços mais consumidos por tipo de Pet</h5>
            <br />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Cachorro</th>
                        <th scope="col" style={{background: tema}}>Raça</th>
                        <th scope="col">Gato</th>
                        <th scope="col" style={{background: tema}}>Raça</th>
                        <th scope="col">Ave</th>
                        <th scope="col" style={{background: tema}}>Raça</th>
                        <th scope="col">Roedor</th>
                        <th scope="col" style={{background: tema}}>Raça</th>
                        <th scope="col">Peixe</th>
                        <th scope="col" style={{background: tema}}>Raça</th>
                        <th scope="col">Réptil</th>
                        <th scope="col" style={{background: tema}}>Raça</th>
                        <th scope="col">Outros</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">NomeServiço</th>
                        <td style={{background: tema}}>***</td>
                        <td>NomeServiço</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeServiço</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeServiço</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeServiço</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeServiço</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeServiço</td>
                    </tr>
                    <tr>
                        <th scope="row">NomeServiço</th>
                        <td style={{background: tema}}>***</td>
                        <td>NomeServiço</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeServiço</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeServiço</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeServiço</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeServiço</td>
                        <td style={{background: tema}}>***</td>
                        <td>NomeServiço</td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }