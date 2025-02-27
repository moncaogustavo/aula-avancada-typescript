export class GerenciadorVeiculos<T> {
    private veiculos: T[] = [];
    adicionar(veiculo: T): void {
        this.veiculos.push(veiculo);
    }
    remover(veiculo: T): void{
        this.veiculos = this.veiculos.filter(v => v !== veiculo);
    }
    listarVeiculos(): T[] {
        return this.veiculos;
    }
}