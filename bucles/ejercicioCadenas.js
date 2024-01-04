ejecutarPrueba1 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorarCadena(mensaje);
    let cadenaInvertida = invertirCadena(mensaje);
    mostrarTexto("lblCadena", cadenaInvertida);
}

recorarCadena = function(cadena){
    // 0123456
    // Juanito
    let caracter;

    for (let posicion = 0; posicion < cadena.length; posicion++) {        
        caracter = cadena.charAt(posicion);
        console.log("Caracter: " + caracter + "  posicion: " + posicion);
    }

    for (let posicion = 0; posicion < cadena.length-1; posicion++) {        
        caracter = cadena.charAt(posicion);
        console.log("CARACTER: " + caracter + "  posicion: " + posicion);
    }
}


invertirCadena = function(cadena){
    let caracter = "";

    for (let posicion = cadena.length -1; posicion >= 0; posicion--) {        
        caracter += cadena[posicion];
    }
    return caracter;
}


