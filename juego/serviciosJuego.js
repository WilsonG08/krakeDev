//obtiene un numero aleatorio entre 1 y 3 
obtenerAleatorio = function(){
    let valorDado = (Math.ceil(Math.random()*3));
    console.log(valorDado);
    return valorDado;
}

//obtiene una cadena ya sea piedra, papel o  tijera dependiendo del numero aleatorio obtenido
generarElemento = function(){
    const numeroAletorio = obtenerAleatorio();

    switch (numeroAletorio){
        case 1:
            return "piedra";
        case 2:
            return "papel";
        case 3:
            return "tijera";
        default:
            return "Error";

    }
}

determinarGanador = function(eleccionJugador1, eleccionJugador2){
    if(eleccionJugador1 === eleccionJugador2){
        //empate
        return 0;
    }else if(
        (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijera") ||
        (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra") ||
        (eleccionJugador1 === "tijera" && eleccionJugador2 === "papel")
    ){
        //jugador 1 gana
        return 1;
    }else{
        //jugador 2 gana
        return 2;
    }
}

generarRuta = function(nombre){
    const ruta = `./imagenes/${nombre}.png`;
    return ruta;
}