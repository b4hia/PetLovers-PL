import axios from "axios";

export default function cadastrarPet(pet, cpf) {
    axios.get("http://localhost:3001/clientes").then((response) => {
        const clientes = response.data;
        console.log(clientes);
        const cliente = clientes.find((cliente) => cliente.cpf.valor === cpf);
        if (cliente) {
            let pets = cliente.pets;
            pets.push(pet);
            axios.patch("http://localhost:3001/clientes/"+cliente.id, {
                pets: pets
            }).then((response) => {
                console.log(response.data);
            });
            alert("Pet cadastrado com sucesso");
        } else {
            alert("Cliente não encontrado");
        };
    });
};