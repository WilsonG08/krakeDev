let puntosUsuario = 0;
let puntosComputador = 0;
jugar = function(seleccionado){
    const eleccionComputador = generarElemento();

    const rutaImagenComputador =  generarRuta(eleccionComputador);
    //mostrar imagen con la ruta 
    mostrarImagen("imagenComputador",rutaImagenComputador);

    const ganador = determinarGanador(seleccionado,eleccionComputador );

    if (ganador === 0) {
        mostrarTexto("lblMensaje","EMPATE");
      } else if (ganador === 1) {
        mostrarTexto("lblMensaje","GANANSTE LA PARTIDA");
        puntosUsuario++;
        mostrarTexto("puntosUsuario",`Puntos Usuario: ${puntosUsuario}`)
      } else if (ganador === 2) {
        mostrarTexto("lblMensaje","PERDISTE LA PARTDIDA");
        puntosComputador++;
        mostrarTexto("puntosComputador",`Puntos Computador: ${puntosComputador}`)
      } else {
        console.log("Selecciones inválidas");
      }

      if (puntosUsuario === 5) {
        mostrarTexto("lblResultadoGanador", "HAS GANADO EL JUEGO");
        
    } else if (puntosComputador === 5) {
        mostrarTexto("lblResultadoGanador", "EL COMPUTADOR TE HA VENCIDO");
    }
}

limpiar=function(){
    
    mostrarImagen("imagenComputador",src="" );
    mostrarTexto("lblMensaje","")
    mostrarTexto("puntosUsuario","");
    mostrarTexto("puntosComputador","");
    mostrarTexto("lblResultadoGanador","");


    puntosUsuario = 0;
    puntosComputador = 0;
    
}
