class Alimento {
    imagemArq="image.png";
    constructor(tamanho){
         this.tamanho = tamanho;
         this.x = Math.random()*(tela.largura-tamanho);
         this.y = Math.random()*(tela.altura-tamanho)+placar.altura; 
        this.imagem = new Image()
        this.imagem.src = this.imagemArq;

    } 
    desenhar(){
        canvasCtx.drawImage(this.imagem,this.x,this.y,this.tamanho,this.tamanho)  

    }      


}
