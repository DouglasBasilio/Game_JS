function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop();
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();
  fimDeJogo = false;
  cenas = {
    //instancia do jogo
    jogo,
    //reset,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('Play', width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}

function gameOver() {
  somDoJogo.stop();
  somGameOver.play();
  textAlign(CENTER);
  fill('#000');
  textSize(30);
  text("Pressione ENTER para jogar novamente.", width / 2, height - 250);
  fimDeJogo = true;
}