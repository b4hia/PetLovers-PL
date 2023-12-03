import axios from "axios";

export default function cadastrarPet(pet, cpf) {
    axios.get("http://localhost:3001/clientes").then((response) => {
        const clientes = response.data;
        const cliente = clientes.find((cliente) => cliente.cpf.valor === cpf);
        if (cliente) {
            let pets = cliente.pets;
            let ids = []
            pets.forEach((pet) => {
                ids.push(pet.id);
            });
            console.log(ids);
            if (ids.length === 0) {
                pet.id = 1;
            } else {
                ids.sort();
                pet.id = ids[ids.length - 1] + 1;
            };
            pets.push(pet);
            axios.patch("http://localhost:3001/clientes/" + cliente.id, {
                pets: pets
            });
            alert("Pet cadastrado com sucesso");
        } else {
            alert("Cliente não encontrado");
        };
    });
};