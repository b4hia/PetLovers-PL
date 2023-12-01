import axios from "axios";

export default function cadastrarServico(servic) {
    axios.get("http://localhost:3001/servicos").then((response) => {
        const servicos = response.data;
        const servico = servicos.find((servico) => servico.nome === servic.nome);
        if (servico) {
            alert("Serviço já cadastrado");
        } else {
            axios.post("http://localhost:3001/servicos", servic).then((response) => {
                console.log(response.data);
            });
            alert("Serviço cadastrado com sucesso");
        };
    });
};