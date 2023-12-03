import axios from "axios";

export default function consumirServico(idServico, idCliente, idPet, quantidade) {
    axios.get("http://localhost:3001/servicos").then((res) => {
        const servicos = res.data;
        const servico = servicos.find((servico) => servico.id === Number(idServico));
        if (servico) {
            axios.get("http://localhost:3001/clientes/" + idCliente).then((res) => {
                const cliente = res.data;
                if (cliente) {
                    axios.post("http://localhost:3001/vendas_servicos", {
                        idCliente: Number(idCliente),
                        idServico: Number(idServico),
                        idPet: Number(idPet),
                        quantidade: Number(quantidade),
                        valor: Number(servico.preco)
                    });
                    alert("Serviço comprado com sucesso!");
                } else alert("Cliente não encontrado!");
            });
        };
    });
};
