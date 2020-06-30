class TelaInicial {
  constructor() {

  }

  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }

  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }

  _texto() {
    textFont(fonteTelaInicial);
    fill('#FFF');
    textAlign(CENTER);
    textSize(45);
    text('As aventuras de', width / 2, height / 3);
    textSize(120);
    text('Sabrina', width / 2, height / 5 * 3);
  }
  
  _botao(){
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
}