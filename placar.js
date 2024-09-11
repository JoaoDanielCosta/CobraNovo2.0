const placar = {
    largura:800,
    altura:60,
    corFundo:"black",
    corTexto:"white",
    nomeJogo:"BAH GAME",
    pontos:0,
    desenhar(){
      
      canvasCtx.fillStyle=this.corFundo;
      canvasCtx.fillRect(0,0,
              this.largura,
              this.altura
              
              
        
        
        
        
        )   
         canvasCtx.fillStyle=this.corTexto;
         canvasCtx.font="26px Fantasy";
         canvasCtx.textAlign="center";
         canvasCtx.textBaseline="middle";
         canvasCtx .fillText(this.nomeJogo,400,30); 
         canvasCtx.font="16px Fantasy";
         canvasCtx.testAlign="right";
         canvasCtx.fillText(this.pontos+" pts ",780,45);
         canvasCtx .fillText(cobra.vida+"vidas ",780,15);
     }

}
placar.desenhar();