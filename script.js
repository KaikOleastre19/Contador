function contar() {
    var inicio = document.getElementById(`numeroinicio`)
    var final = document.getElementById(`numerofim`)
    var passo = document.getElementById(`passo`)
    var resultado = document.getElementById(`resultado`)
    var contador
   
    if(inicio.value.length==0 || passo.value.length==0 || final.value.length==0){
        window.alert("Preencha os dados corretamente!")
        resultado.innerHTML = "Impossível contar!"
    }
       
        
    
    else{
        resultado.innerHTML = "Contando:<br/>"
        var i = Number(inicio.value)
        var f = Number(final.value)
        var p = Number(passo.value)
        
        if(passo.value!=0){
             if(i<f){
                
                for(contador=i; contador<=f; contador+=p){
                    
                    resultado.innerHTML += ` ${contador} \u{1F449}` 
                }
                
                resultado.innerHTML+= "\u{1F3C1}"
            
            }

            else{
                
                for(contador=i; contador>=f; contador-=p){
                    
                    resultado.innerHTML+= ` ${contador} \u{1F449}` 
                }

                resultado.innerHTML+= "\u{1F3C1}"
            }
            

        }

        else{
            window.alert("Impossível contar com o valor do passo em zero!")
            resultado.innerHTML = "Impossível contar"
        }


    }
    
        }
    
    
    

    


