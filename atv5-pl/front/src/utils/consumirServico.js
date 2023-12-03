import axios from "axios";

export default function consumirServico(idServico, idCliente, idPet, quantidade) {
    axios.get("http://localhost:3001/servicos").then((res) => {
        const servicos = res.data;
        const servico = servicos.find((servico) => servico.id === Number(idServico));
        if (servico) {
            axios.get("http://localhost:3001/clientes/" + idCliente).then((res) => {
                const cliente = res.data;
                let pet = cliente.pets.find((pet) => cliente.pets.indexOf(pet) === Number(idPet));
                if (cliente) {
                    axios.post("http://localhost:3001/vendas_servicos", {
                        idCliente: idCliente,
                        idServico: idServico,
                        pet: pet,
                        quantidade: quantidade
                    });
                    alert("Serviço comprado com sucesso!");
                } else alert("Cliente não encontrado!");
            });
        };
    });
};
