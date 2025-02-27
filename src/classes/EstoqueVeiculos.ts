export class EstoqueVeiculos<T> {
    private estoque: Record<string, number> = {};

    adicionarEstoque(modelo: string, quantidade: number): void {
        if(this.estoque[modelo]) {
            this.estoque[modelo] += quantidade;
        } else {
            this.estoque[modelo] = quantidade;
        }
        console.log(`${quantidade} unidade(s) do modelo ${modelo} adicionada(s) ao estoque.`);
    }
    removerEstoque(modelo: string): void {
        if(this.estoque[modelo]) {
            delete this.estoque[modelo];
            console.log(`Modelo ${modelo} removido do estoque.`);
        } else {
            console.log(`Modelo ${modelo} não encontrado no estoque.`);
        }
    }
    consultarEstoque(modelo: string): void {
        const quantidade = this.estoque[modelo] ?? 0;
        console.log(`Estoque do modelo ${modelo}: ${quantidade} unidade(s).`);
    }
    listarEstoque(): void {
        console.log("--- Estoque Atual ---");
        for(const [modelo, quantidade] of Object.entries(this.estoque)) {
            console.log(`${modelo}: ${quantidade} unidade(s)`);
        }
        console.log("--------------------");
    }
}