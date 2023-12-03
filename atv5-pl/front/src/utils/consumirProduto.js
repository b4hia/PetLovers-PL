import axios from "axios";

export default function consumirProduto(idProduto, idCliente, idPet, quantidade) {
    axios.get("http://localhost:3001/produtos").then((res) => {
        const produtos = res.data;
        const produto = produtos.find((produto) => produto.id === Number(idProduto));
        if (produto) {
            axios.get("http://localhost:3001/clientes/" + idCliente).then((res) => {
                const cliente = res.data;
                if (cliente) {
                    axios.post("http://localhost:3001/vendas_produtos", {
                        idCliente: Number(idCliente),
                        idProduto: Number(idProduto),
                        idPet: Number(idPet),
                        quantidade: Number(quantidade)
                    });
                    alert("Produto comprado com sucesso!");
                } else alert("Cliente não encontrado!");
            });
        };
    });
};
