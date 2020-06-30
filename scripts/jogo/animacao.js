class Animacao{
 constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
   this.variacaoY = variacaoY;
   this.matriz = matriz;
   this.imagem = imagem;
   this.largura = largura; //do personagem
   this.altura = altura; //do personagem
   this.x = x; //posição da imagem na tela
   this.y = height - this.altura - this.variacaoY; //altura na tela
   this.larguraSprite = larguraSprite; //tamanho na imagem
   this.alturaSprite = alturaSprite; //tamanho na imagem
   
   this.frameAtual = 0;
 }

  exibe(){
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite );
    
    this.anima();
  }  
  
  anima(){
      this.frameAtual++ ;
      
      if(this.frameAtual >= this.matriz.length -1){
        this.frameAtual = 0;
      }
    }
}
