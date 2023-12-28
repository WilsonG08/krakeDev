calcularPromedioNotas = function () {
    let nota1 = recuperarFloat("txtN1");
    let nota2 = recuperarFloat("txtN2");
    let nota3 = recuperarFloat("txtN3");

    // Invocacion de la funcion calcular Promedio
    let promedio = calcularPromedio(nota1, nota2, nota3);

    mostrarTexto("txtResultado",promedio);

    if(promedio > 7){
        mostrarImagen("imagen", "./imagenes/exito.gif");
    }else{
        mostrarImagen("imagen", "./imagenes/fracaso.gif");
    }
}
