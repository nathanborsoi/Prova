import { ControleVelocidade } from './controle';

const velocidadeMaxima = 120;
const controleVelocidade = new ControleVelocidade(velocidadeMaxima);

controleVelocidade.ativarTurbo();

controleVelocidade.setVelocidadeManual(100);
