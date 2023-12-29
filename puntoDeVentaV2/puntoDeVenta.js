calcularValorTotal = function(){ 
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");

    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");

    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");

    if(esProductoValido("lblError1", nombreProducto)&
        esCantidadValida("lblError2", cantidad) &
        esPrecioValido("lblError3", precioProducto)
    ){
    
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    valorSubtotal = calcularSubtotal(precioProducto,cantidad);
    
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    mostrarTexto("lblSubtotal",valorSubtotal);
    
    //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento
    //valorDescuento = calcularValorDescuento(valorSubtotal,porcentajeDescuento);
    valorDescuento =  calcularDescuentoPorVolumen(precioProducto, cantidad)
    
    //7. Mostrar el resultado en el componente lblDescuento
    mostrarTexto("lblDescuento",valorDescuento);

    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    valorIVA = calcularIva(valorSubtotal,valorDescuento);

    //9. Mostrar el resultado en el componente lblValorIVA    
    mostrarTexto("lblValorIVA",valorIVA);
    
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal = calcularTotal(valorSubtotal,valorDescuento,valorIVA);

    //11. Mostrar el resultado en el componente lblTotal
    mostrarTexto("lblTotal",valorTotal);
    }else{
        mostrarTexto("lblSubtotal","0.0");
        mostrarTexto("lblDescuento","0.0");
        mostrarTexto("lblValorIVA","0.0");
        mostrarTexto("lblTotal","0.0");
    }
   /*
    //4. Recuperar el porcentaje de descuento como int
    //porcentajeDescuento = recuperarInt("txtPorcentajeDescuento");
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    valorSubtotal = calcularSubtotal(precioProducto,cantidad);
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    mostrarTexto("lblSubtotal",valorSubtotal);
    //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento
    //valorDescuento = calcularValorDescuento(valorSubtotal,porcentajeDescuento);
    valorDescuento =  calcularDescuentoPorVolumen(precioProducto, cantidad)
    //7. Mostrar el resultado en el componente lblDescuento
    mostrarTexto("lblDescuento",valorDescuento);
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    valorIVA = calcularIva(valorSubtotal,valorDescuento);
    //9. Mostrar el resultado en el componente lblValorIVA    
    mostrarTexto("lblValorIVA",valorIVA);
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal = calcularTotal(valorSubtotal,valorDescuento,valorIVA); 
    //11. Mostrar el resultado en el componente lblTotal
    mostrarTexto("lblTotal",valorTotal);
    //12. Mostrar un resumen en el componente lblResumen
   // let mensaje = "Valor a pagar por "+ cantidad+" "+nombreProducto+" con "+valorDescuento+" % de descuento : "+"USD "+valorTotal;
    //console.log(mensaje);
    //mostrarTexto("lblResumen",mensaje);    
    */
}   

limpiar=function(){
    
        /*Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
        */
        mostrarTextoEnCaja("txtProducto","");
        mostrarTextoEnCaja("txtCantidad", "");
        mostrarTextoEnCaja("txtPrecio","");
        //mostrarTextoEnCaja("txtPorcentajeDescuento","0");
        mostrarTexto("lblSubtotal","0.0");
        mostrarTexto("lblDescuento","0.0");
        mostrarTexto("lblValorIVA","0.0");
        mostrarTexto("lblTotal","0.0");
        //mostrarTexto("lblResumen","");
}

esProductoValido = function(idComponenteError,producto){
    let hayErrores = false;

    if(!isNaN(producto)){
        mostrarTexto(idComponenteError,"*CAMPO OBLIGATORIO");
        hayErrores = true;
    }

    if (producto.length > 10) {
        mostrarTexto(idComponenteError, "Máximo 10 caracteres");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
}

esCantidadValida = function(idComponenteError, cantidad){
    let hayErrores = false;

    if (isNaN(cantidad)) {
        mostrarTexto(idComponenteError, "*CAMPO OBLIGATORIO");
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

esPrecioValido = function(idComponenteError, precio){
    let hayErrores = false;

    if (isNaN(precio)) {
        mostrarTexto(idComponenteError, "*CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if (precio < 0 || precio > 50) {
        mostrarTexto(idComponenteError, "EL NUMERO DEBE ESTAR ENTRE 0 Y 50");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
}
/* SI TODO FUNCIONA, HACER UN PUSH */