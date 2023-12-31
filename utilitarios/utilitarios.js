
mostrarImagen = function(idComponente, rutaImagen){
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}


recuperarTexto = function(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

mostrarTextoEnCaja = function(idComponente, mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarInt = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

mostrarTexto =  function (idComponente, mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

recuperarFloat = function(idComponente){
    let valorCaja = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorCaja);
    return valorFloat;
}