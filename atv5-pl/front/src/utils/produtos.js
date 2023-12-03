import axios from "axios";

export function getProdutos() {
    return axios.get("http://localhost:3001/produtos");
};

export function getProduto(idProduto) {
    return axios.get("http://localhost:3001/produtos/" + idProduto);
};

export function getProdutoPorNome(nome) {
    return axios.get("http://localhost:3001/produtos").then((res) => {
        const produtos = res.data;
        return produtos.find((produto) => produto.nome === nome);
    });
};