calcularSubtotal = function(precio, cantidad){
    let subtotal = precio * cantidad;
    return subtotal;
}
calcularValorDescuento = function(monto, porcentajeDescuento){
    let valorDescuento = (monto * porcentajeDescuento)/100;
    return valorDescuento;
}

calcularIva = function(monto,descuento){
    let valorIva = ((monto-descuento)*0.12);
    return valorIva;
}


calcularTotal = function(subtotal, descuento, iva){
    let valorTotalTemporal = subtotal - descuento;
    let valorTotal = valorTotalTemporal + iva;
    return valorTotal;
}

calcularDescuentoPorVolumen = function(monto, cantidad){
    let valorDescuento;
    if(cantidad < 3){
        console.log("No tiene descuento");
        valorDescuento = 0;
    }else if(cantidad >=3 && cantidad <= 5){
        console.log("Recibe 3% de descuento");
        valorDescuento = monto * 0.03;

    }else if(cantidad >=6 && cantidad <=11){
        console.log("Recibe 4% de descuento");
        valorDescuento = monto * 0.04;
    }else if(cantidad >= 12){
        console.log("Recibe 5% de descuento");
        valorDescuento = monto * 0.05;
    }
    return valorDescuento
}

/*
esProductoValido = function(producto,idComponenteError){
    let hayErrores = false;
    if(producto == null){
        mostarTexto(idComponenteError,"*CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if (producto.lenght > 10) {
        mostrarTexto(idComponenteError, "El producto no puede tener mas de 10 caracteres");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
}

esCantidadValida = function(cantidad, idComponenteError){
    let hayErrores = false;
    if (isNaN(cantidad)) {
        mostrarTexto(idComponenteError, "DEBES INGRESAR UN NUMERO");
        hayErrores = true;
    }
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idComponenteError, "EL NUMERO DEBE ESTAR ENTRE 0 Y 100");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
}

esPrecioValido = function(precio, idComponenteError){
    let hayErrores = false;
    if (isNaN(nota)) {
        mostrarTexto(idComponenteError, "DEBES INGRESAR UN NUMERO");
        hayErrores = true;
    }
    if (precio < 0 || precio > 650) {
        mostrarTexto(idComponenteError, "EL NUMERO DEBE ESTAR ENTRE 0 Y 50");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
}*/