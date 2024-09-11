const canvasE = document.querySelector("canvas")
const canvasCtx = canvasE.getContext("2d")

function setup(){
   canvasE.width = canvasCtx.width = screen.width;
   canvasE.height = canvasCtx.height = screen.height
    
}
setup();