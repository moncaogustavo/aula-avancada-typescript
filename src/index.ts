import { Carro } from "./interface/Carro";
import { Moto } from './interface/Moto';

const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    portas: 4,
    acelerar: () => "O carro está acelerando!"
};

const minhaMoto: Moto = {
    marca: "Honda",
    modelo: "CB 500",
    ano: 2021,
    cilindradas: 500,
    acelerar: () => "A moto está acelerando!"
};

function exibirDetalhesVeiculo(veiculo: Carro | Moto) {
    console.log("--- Detalhes do Veiculo ---");
    console.log(`Marca: ${veiculo.marca}`);
    console.log(`Modelo: ${veiculo.modelo}`);
    console.log(`Ano: ${veiculo.ano}`);

    if ("portas" in veiculo) {
        console.log(`Portas: ${veiculo.portas}`);
    } else if ("cilindradas" in veiculo) {
        console.log(`Cilindradas: ${veiculo.cilindradas}`);
    }

    console.log(veiculo.acelerar());
    console.log("-----------------------");
}

exibirDetalhesVeiculo(meuCarro);
exibirDetalhesVeiculo(minhaMoto);