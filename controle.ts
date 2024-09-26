export class ControleVelocidade {
    private velocidadeAtual: number = 0;
    private velocidadeMaxima: number;

    constructor(velocidadeMaxima: number) {
        this.velocidadeMaxima = velocidadeMaxima;
    }

    public ativarTurbo(): void {
        const velocidadeGerada = Math.floor(Math.random() * 200) + 1;
        this.velocidadeAtual = velocidadeGerada;

        console.log(`Turbo ativado! Velocidade gerada: ${this.velocidadeAtual} km/h`);
        this.verificarMulta();
    }

    private verificarMulta(): void {
        if (this.velocidadeAtual > this.velocidadeMaxima) {
            console.log(`⚠️ Multa aplicada! Você ultrapassou a velocidade máxima de ${this.velocidadeMaxima} km/h.`);
        } else {
            console.log(`Você está dentro do limite de velocidade de ${this.velocidadeMaxima} km/h.`);
        }
    }

    public setVelocidadeManual(velocidade: number): void {
        this.velocidadeAtual = velocidade;
        console.log(`Velocidade ajustada manualmente para: ${this.velocidadeAtual} km/h`);
        this.verificarMulta();
    }
}
