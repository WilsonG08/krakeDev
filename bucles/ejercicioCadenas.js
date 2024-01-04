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
    let resultado = "";

    for (let posicion = cadena.length -1; posicion >= 0; posicion--) {        
        resultado += cadena[posicion];
    }
    return resultado;
}


buscarLetra = function(cadena, letra){
    let letraIterada;
    let existeletra = false;

    for (let i = 0; i < cadena.length; i++) {
        letraIterada = cadena.charAt(i);
        if (letraIterada == letra) {
            existeletra = true;
        }
    }
    
    if (existeletra == true) {
        console.log("Existe");
        return true;
    }else{
        console.log("No existe");
        return false;
    }
}

contarMAyusculas = function(cadena){
    let letra;
    let contadorMAyusculas = 0;

    for (let i = 0; i < cadena.length; i++) {
        letraIterada = cadena.charAt(i);
        if (esMayuscula(letra)) {
            contadorMAyusculas++;
        }
    }
    console.log(contadorMAyusculas);
}