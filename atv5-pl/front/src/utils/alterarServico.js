import axios from "axios";

export default function alterarServico(servic) {
    if (servic) {
        axios.patch("http://localhost:3001/servicos/" + servic.id, { preco: servic.preco }).then((response) => {
            console.log(response.data);
        });
        alert("Serviço alterado com sucesso");
    } else {
        alert("Serviço não encontrado");
    };
};