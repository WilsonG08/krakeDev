saludar =  function(){
    // REcuperar el valor de la caja de texto
    let nombre = recuperarTexto("txtNombre")

    // REcuperar el valor de la caja de texto txtApellido
    let apellido = recuperarTexto("txtApellido")
}


recuperarTexto = function(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}