jugar = function(){
    let aleatorio;
    let mensaje1;

    aleatorio = lanzarDado();
    //cambiarTexto("lblNumero", aleatorio);
    

    if(aleatorio > 3){
        mensaje1 = "Numero mayor a 3, GANASTE!";
        //console.log("Es maoyr a 3");
        //console.log("GANASTE");
        cambiarTexto("lblNumero", mensaje1);
        
    }else{
        mensaje1 = " Numero menor a 3, PERDISTE!"
        //console.log("ES MENOR A 3");
        //console.log("PERDISTE!!")
        cambiarTexto("lblNumero", mensaje1);
    }

    
}


// Definicion
// Crear una funcion lanzar dado
// No recibe parametros
// Retorna un numero aeaorio entre 1 y 6

lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    
    aleatorio = Math.random(); // entre 0 y 1
    numeroMultiplicado = aleatorio * 6; //
    numeroEntero = parseInt(numeroMultiplicado); // entre 0 y 5 
    valorDado =  numeroEntero + 1; // entre 0 y 6

    return valorDado;
}