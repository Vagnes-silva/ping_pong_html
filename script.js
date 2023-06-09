const canvasEl = document.querySelector("canvas")
            const canvasCtx = canvasEl.getContext("2d")
            
            //largura da linha central
            gapX = 15

            const field = {
              w: window.innerWidth,
              h: window.innerHeight,
              draw: function(){
                //desenha o campo
                canvasCtx.fillStyle = "#286047"
                canvasCtx.fillRect(0, 0, this.w, this.h)
              },
            }

            const line ={
              w: 15,
              h: field.h,
              draw: function(){
              canvasCtx.fillStyle = "#ffffff"                      
              canvasCtx.fillRect(field.w / 2 - this.w / 2, 0, this.w, this.h)   
              },
            }

            const leftPaddle ={
              x: gapX,
              y: 100,
              w: line.w,
              h: 200,
              draw: function(){
                canvasCtx.fillStyle = "#ffffff" 
                canvasCtx.fillRect(this.x, this.y, this.w, this.h)  
              },
            }

            const rightPaddle ={
              x: field.w - line.w - gapX,
              y: 100,
              w: line.w,
              h: 200,
              draw: function(){
                canvasCtx.fillStyle = "#ffffff" 
                canvasCtx.fillRect(this.x, this.y, this.w, this.h)  
              },
            }

            const score = {
              human: 1,
              computer: 2,
              draw: function(){
                canvasCtx.font = "bold 72px Arial"
                canvasCtx.textAlign = "center"
                canvasCtx.textBaseline = "top"
                canvasCtx.fillStyle = "#01341d"
                canvasCtx.fillText(this.human, field.w / 4, 50)
                canvasCtx.fillText(this.computer, (field.w/ 4) * 3, 50)
              },
            }

            const ball ={
              x:300,
              y:200,
              r:20,
              draw: function(){
                canvasCtx.fillStyle = "#ffffff"
                canvasCtx.beginPath()
            canvasCtx.arc(this.x, this.y, this.r, 0, 2*Math.PI, false)
            canvasCtx.fill()

              }
            }

            function setup() {
            canvasEl.width = canvasCtx.width = field.w
            canvasEl.height = canvasCtx.height = field.h
            }

            //desenha os elementos do jogo: campo, divisão, raquete, placar e bolinha.
            function draw() { 
              field.draw() 
              line.draw()  
              leftPaddle.draw()  
              rightPaddle.draw()  
              score.draw()
              ball.draw()                             
            
            
                                
           

            
            

          


            }

            setup()
            draw()
     