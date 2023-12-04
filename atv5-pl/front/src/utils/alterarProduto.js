import axios from "axios";

export default function alterarProduto(product) {
    if (product) {
        axios.patch("http://localhost:3001/produtos/" + product.id, { preco: product.preco }).then((response) => {
            console.log(response.data);
        });
        alert("Produto alterado com sucesso");
    } else {
        alert("Produto não encontrado");
    };
};