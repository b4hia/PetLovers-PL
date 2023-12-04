import { useEffect, useState } from 'react';
import axios from "axios";

export default function MaisConsumidos(props) {
    const [pets, setPets] = useState([]);
    const [vendasServicos, setVendasServicos] = useState([]);
    const [vendasProdutos, setVendasProdutos] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [servicos, setServicos] = useState([]);

    let tema = props.tema

    class Produto {
        constructor(id, quantidade) {
            this.id = id;
            this.quantidade = quantidade;
        };

        buscarNomeProduto() {
            produtos.find((produto) => {
                if (produto.id === this.id) {
                    return produto.nome;
                };
            });
        };
    };

    class Servico {
        constructor(id, quantidade) {
            this.id = id;
            this.quantidade = quantidade;
        };

        buscarNomeServico() {
            servicos.find((servico) => {
                if (servico.id === this.id) {
                    return servico.nome;
                };
            });
        };
    };

    class Tipo {
        constructor(nome) {
            this.nome = nome;
            this.produtos = [];
            this.servicos = [];
        }

        adicionarProduto(id, quantidade) {
            if (this.verificarProdutoExiste(id)) {
                this.produtos.forEach((produto) => {
                    if (produto.id === id) {
                        produto.quantidade += quantidade;
                    };
                });
            } else { this.produtos.push(new Produto(id, quantidade)); };
        };

        adicionarServico(id, quantidade) {
            if (this.verificarServicoExiste(id)) {
                this.servicos.forEach((servico) => {
                    if (servico.id === id) {
                        servico.quantidade += quantidade;
                    };
                });
            } else { this.servicos.push(new Servico(id, quantidade)); };
        };

        verificarProdutoExiste(id) {
            let existe = false;
            this.produtos.forEach((produto) => {
                if (produto.id === id) {
                    existe = true;
                };
            });
            return existe;
        };

        verificarServicoExiste(id) {
            let existe = false;
            this.servicos.forEach((servico) => {
                if (servico.id === id) {
                    existe = true;
                };
            });
            return existe;
        };

        ordenarProdutosServicos() {
            this.produtos.sort((a, b) => {
                return b.quantidade - a.quantidade;
            });
            this.servicos.sort((a, b) => {
                return b.quantidade - a.quantidade;
            });
        };

        maisConsumidoProduto() {
            this.ordenarProdutosServicos();
            let maisConsumido = this.produtos[0];
            console.log("maisConsumido:", maisConsumido);
            if (maisConsumido === undefined) {
                return "Nenhum produto consumido";
            };
            return maisConsumido.id;

        };

        maisConsumidoServico() {
            this.ordenarProdutosServicos();
            let maisConsumido = this.servicos[0];
            if (maisConsumido === undefined) {
                return "Nenhum serviço consumido";
            };
            return maisConsumido.id;
        };
    };

    function getPets() {
        let pets = [];
        axios.get('http://localhost:3001/clientes').then((res) => {
            const clientes = res.data;
            clientes.forEach((cliente) => {
                cliente.pets.forEach((pet) => {
                    pets.push(pet);
                });
            });
            setPets(pets);
        });
    };

    function getProdutos() {
        axios.get('http://localhost:3001/produtos').then((res) => {
            setProdutos(res.data);
        });
    };

    function getServicos() {
        axios.get('http://localhost:3001/servicos').then((res) => {
            setServicos(res.data);
        });
    };

    function getVendasServicos() {
        let vendasServicos = [];
        axios.get('http://localhost:3001/vendas_servicos').then((res) => {
            const vendas = res.data;
            vendas.forEach((venda) => {
                vendasServicos.push(venda);
            });
            setVendasServicos(vendasServicos);
        });
    };

    function getVendasProdutos() {
        let vendasProdutos = [];
        axios.get('http://localhost:3001/vendas_produtos').then((res) => {
            const vendas = res.data;
            vendas.forEach((venda) => {
                vendasProdutos.push(venda);
            });
            setVendasProdutos(vendasProdutos);
        });
    };

    function getProdutosServicosMaisConsumidosPorTipoPet() {
        let tipos = [new Tipo("Cachorro"), new Tipo("Gato"), new Tipo("Ave"), new Tipo("Roedor"), new Tipo("Peixe"), new Tipo("Réptil"), new Tipo("Outros")];

        tipos.forEach((tipo) => {
            vendasProdutos.forEach((venda) => {
                pets.forEach((pet) => {
                    if (pet.tipo === tipo.nome && pet.id === venda.idPet) {
                        tipo.adicionarProduto(venda.idProduto, venda.quantidade);
                    };
                });
            });
        });

        tipos.forEach((tipo) => {
            vendasServicos.forEach((venda) => {
                pets.forEach((pet) => {
                    if (pet.tipo === tipo.nome && pet.id === venda.idPet) {
                        tipo.adicionarServico(venda.idServico, venda.quantidade);
                    };
                });
            });
        });
        return tipos;
    };

    useEffect(() => {
        getPets();
        getVendasServicos();
        getVendasProdutos();
        getProdutos();
        getServicos();
    }, []);

    let tipos = getProdutosServicosMaisConsumidosPorTipoPet();
    let produtosMaisConsumidosTipo = tipos.map((tipo) => {
        return (
            <tr>
                <th scope="row">{tipo.nome}</th>
                <td>{tipo.maisConsumidoProduto()}</td>
                <td>{tipo.maisConsumidoServico()}</td>
            </tr>
        )
    });

    return (
        <div className="container-fluid">
            <br />
            <h5>Produtos e serviços mais consumidos por tipo de Pet</h5>
            <br />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Tipo</th>
                        <th scope="col">ID Produto</th>
                        <th scope="col">ID Servico</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosMaisConsumidosTipo}
                </tbody>
            </table>
        </div>
    )
}