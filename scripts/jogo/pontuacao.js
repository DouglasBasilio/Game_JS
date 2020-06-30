class Pontuacao {
  constructor(){
    this.pontos = 0;
  }
  
  exibe(){
    textAlign(RIGHT);
    fill('#FFF');
    //fill('#000');
    textSize(50);
    text("Score: " + parseInt(this.pontos), width - 30, 50);
  }
  
  adicionarPonto(){
    this.pontos = this.pontos + 0.2;
  }
}

