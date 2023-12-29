calcularPromedioNotas = function () {
    let nota1 = recuperarFloat("txtN1");
    let nota2 = recuperarFloat("txtN2");
    let nota3 = recuperarFloat("txtN3");
    let img;

    // Invocacion de la funcion calcular Promedio
    let promedio = calcularPromedio(nota1, nota2, nota3);

    mostrarTexto("txtResultado",promedio);

    /* if(promedio > 7){
        mostrarImagen("imagen", "./imagenes/exito.gif");
    }else{
        mostrarImagen("imagen", "./imagenes/fracaso.gif");
    } */

    if (promedio < 5 && promedio > 0) {
        mostrarTexto("txtResultado","Reprobado");
        mostrarImagen("imagen", "./imagenes/fracaso.gif");
    } else if (promedio >= 5 && promedio <= 8) {
        mostrarTexto("txtResultado", "Buen Trabajo");
        mostrarImagen("imagen", "./imagenes/buenTrabajo.gif");
    } else if (promedio > 8 && promedio <= 10) {
        mostrarTexto("txtResultado", "Excelente");
        mostrarImagen("imagen", "./imagenes/exito.gif");
    }

}
