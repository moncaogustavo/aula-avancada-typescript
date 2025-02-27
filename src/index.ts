import { Carro } from "./interface/Carro";
import { Moto } from './interface/Moto';
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";
import { EstoqueVeiculos } from "./classes/EstoqueVeiculos";
import { FiltroVeiculos } from './utils/FiltroVeiculo';

const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
const gerenciadorMotos = new GerenciadorVeiculos<Moto>();

const estoqueCarros = new EstoqueVeiculos<Carro>();
const estoqueMotos = new EstoqueVeiculos<Moto>();

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

gerenciadorCarros.adicionar(meuCarro);
gerenciadorMotos.adicionar(minhaMoto);

estoqueCarros.adicionarEstoque(meuCarro.modelo, 10);
estoqueMotos.adicionarEstoque(minhaMoto.modelo, 5);

estoqueCarros.consultarEstoque("Corolla");
estoqueMotos.consultarEstoque("CB 500");

estoqueCarros.removerEstoque("Corolla");
estoqueMotos.removerEstoque("CB 500");

estoqueCarros.listarEstoque();
estoqueMotos.listarEstoque();

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

gerenciadorCarros.listarVeiculos().forEach(exibirDetalhesVeiculo);
gerenciadorMotos.listarVeiculos().forEach(exibirDetalhesVeiculo);

const todosVeiculos = [...gerenciadorCarros.listarVeiculos(), ...gerenciadorMotos.listarVeiculos()];

console.log("--- Veículos do ano 2022 ---");
console.log(FiltroVeiculos.filtrarPorAno(todosVeiculos, 2022));

console.log("--- Veículos da marca Honda ---");
console.log(FiltroVeiculos.filtrarPorMarca(todosVeiculos, "Honda"));

console.log("--- Veículos do modelo Corolla ---");
console.log(FiltroVeiculos.filtrarPorModelo(todosVeiculos, "Corolla"));