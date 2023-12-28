calcularValorDescuento = function(monto, porcentajeDescuento){
    let valorDescuento = (monto * porcentajeDescuento)/100;
    return valorDescuento;
}

calcularIva = function(monto){
    let IVA = 0.12; 
    return monto * IVA;
}


calcularSubtotal = function(precio, cantidad){
    let subtotal = precio * cantidad;
    return subtotal;
}

calcularTotal = function(subtotal, descuento, iva){
    let valorTotal = ((subtotal - descuento) + iva);
    return valorTotal;
}
