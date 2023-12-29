
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    // Para que muestre con dos decimales
    //mensaje = parseFloat(mensaje).toFixed(2);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}



recuperarFloat = function(idComponente){
    let valor;
    let valorFloat;
    valor=recuperarTexto(idComponente);
    valorFloat=parseFloat(valor);
    return valorFloat;
}


