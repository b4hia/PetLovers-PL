import axios from "axios";

export default function consumirProduto(idProduto, idCliente, idPet, quantidade) {
    axios.get("http://localhost:3001/produtos").then((res) => {
        const produtos = res.data;
        const produto = produtos.find((produto) => produto.id === Number(idProduto));
        if (produto) {
            axios.get("http://localhost:3001/clientes/" + idCliente).then((res) => {
                const cliente = res.data;
                let pet = cliente.pets.find((pet) => cliente.pets.indexOf(pet) === Number(idPet));
                if (cliente) {
                    axios.post("http://localhost:3001/vendas_produtos", {
                        idCliente: idCliente,
                        idProduto: idProduto,
                        pet: pet,
                        quantidade: quantidade
                    });
                    alert("Produto comprado com sucesso!");
                } else alert("Cliente não encontrado!");
            });
        };
    });
};
