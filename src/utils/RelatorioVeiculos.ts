import { Carro } from "../interface/Carro";
import { Moto } from "../interface/Moto";

type Veiculo = Carro | Moto;

export class RelatorioVeiculos {
    static gerarRelatorio(veiculos: Veiculo[]): string {
        let relatorio = "Relatório de Veículos:\n";

        veiculos.forEach(veiculo => {
            relatorio += `Marca: ${veiculo.marca}\n`;
            relatorio += `Modelo: ${veiculo.modelo}\n`;
            relatorio += `Ano: ${veiculo.ano}\n`;

            if ('portas' in veiculo) {
                relatorio += `Portas: ${veiculo.portas}\n`;
            } else if ('cilindradas' in veiculo) {
                relatorio += `Cilindradas: ${veiculo.cilindradas}\n`;
            }

            relatorio += '-----------------------------\n';
        });

        return relatorio;
    }
}
