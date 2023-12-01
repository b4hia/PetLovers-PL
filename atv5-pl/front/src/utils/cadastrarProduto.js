import axios from "axios";

export default function cadastrarProduto(product) {
    axios.get("http://localhost:3001/produtos").then((response) => {
        const produtos = response.data;
        const produto = produtos.find((produto) => produto.nome === product.nome);
        if (produto) {
            alert("Produto já cadastrado");
        } else {
            axios.post("http://localhost:3001/produtos", product).then((response) => {
                console.log(response.data);
            });
            alert("Produto cadastrado com sucesso");
        };
    });
};