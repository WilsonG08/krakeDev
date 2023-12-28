// Variables globales
let puntos = 0;
let lanzamientos = 5;
let mensaje;


jugar = function () {
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos(resultado);
}

limpiar = function () {
    // Colocar puntaje en 0 y lanzamiento en 5
    mostrarTexto("lblPuntos", 0);
    mostrarTexto("lblLanzamientos", 5);

    // en las variables y en pantalla
    mostrarTexto("lblRespuesta", "Resultado"); 0

    // Quitar la imagen ""
    mostrarImagen("imgDado", "")

    puntos = 0;
    lanzamientos = 5;
    mensaje = "Resultado"
}


modificarPuntos = function (numero) {
    puntos = puntos + numero;
    cambiarTexto("lblPuntos", puntos);
    // si el jugador obtiene > 20 puntos
    if (puntos > 20) {
        // mostrar mensasje de GANASTE
        mensaje = "Ganaste";
        cambiarTexto("lblRespuesta", mensaje);
        // Invocar a limpiar
        //limpiar();
    }
    
}

// No recibe parametros
// resta 1 a la varible lanzamientos, guarda el resultado en la misma variable
// y muestra en pantalla
modificarLanzamientos = function () {
    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblLanzamientos", lanzamientos)

    // Si lanzamientos llega a 0 
    if (lanzamientos == 0 && puntos <= 20) {
        // mostrar en pantalla el mensaja de GAME OVER
        mensaje = "Game Over";
        cambiarTexto("lblRespuesta", mensaje);
        // invoca a limpiar
        //limpiar();
    }
}



// Funcion mostrar cara, recive el numero que quiere mostrar
// Muestra la imagen correspondiente al numero que recibe
// No retorna nada
mostrarCara = function (numero) {
    if (numero == 1) { // con == se compara, con = se asigna
        cambiarImagen("imgDado", "dados1.png");
    } else if (numero == 2) {
        cambiarImagen("imgDado", "dados2.png");
    } else if (numero == 3) {
        cambiarImagen("imgDado", "dados3.png");
    } else if (numero == 4) {
        cambiarImagen("imgDado", "dados4.png");
    } else if (numero == 5) {
        cambiarImagen("imgDado", "dados5.png");
    } else if (numero == 6) {
        cambiarImagen("imgDado", "dados6.png");
    }
}


lanzarDado = function () {
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio = Math.random();
    aleatorioMultiplicado = aleatorio * 6;
    aleatorioEntero = parseInt(aleatorioMultiplicado);
    valorDado = aleatorioEntero + 1;
    return valorDado;
}