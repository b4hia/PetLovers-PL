import axios from "axios";

export default function alterarPet(pets, cpf) {
    axios.get("http://localhost:3001/clientes").then((res) => {
        const clientes = res.data;
        const cliente = clientes.find((cliente) => cliente.cpf.valor === cpf);
        console.log(clientes, cliente, cpf);
        if (cliente) {
            cliente.pets = pets;
            axios.patch("http://localhost:3001/clientes/" + cliente.id, { pets: pets });
        } else alert("Cliente não encontrado");
    });
};
