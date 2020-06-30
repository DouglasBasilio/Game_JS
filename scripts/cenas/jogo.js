class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    cenario = new Cenario(imagemCenario, 5);
    cenarioParallax = new Cenario(imagemCenarioParallax, 3.5);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 20, 50, 110, 135, 220, 270);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 50, 52, 52, 104, 104, 10);

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 100, 100, 75, 200, 150, 10);

    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 15, 200, 200, 400, 400, 15);

    inimigos.push(inimigo);
    inimigos.push(inimigoVoador);
    inimigos.push(inimigoGrande);
  }

  keyPressed(key) {
    if (!fimDeJogo && key === 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
    } else if (fimDeJogo && key === 'Enter') {
      window.location.reload();
    }
  }


  draw() {
    cenario.exibe();
    cenario.move();

    cenarioParallax.exibe();
    cenarioParallax.move();

    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];

    //pegar um inimigo dentro da variável inimigos
    const inimigo = inimigos[linhaAtual.inimigo];
    //verifica se o inimigo passou inteiro
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    //variação velocidade inimigo
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornarInvencivel();
      if (vida.vidas === 0) {
        vida.draw();
        image(imagemGameOver, width / 2 - 200, height / 4);
        noLoop();
        gameOver();
      }
    }             
  }
}