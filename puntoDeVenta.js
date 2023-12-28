calcularValorTotal = function () {
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

    //4. Recuperar el porcentaje de descuento como int
    porcentajeDescuento = recuperarInt("txtPorcentajeDescuento");

    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    valorSubtotal = calcularSubtotal(precioProducto, cantidad);

    //5. Mostrar valorSubtotal en el componente lblSubtotal
    mostrarTexto("lblSubtotal", valorSubtotal);

    /*
        Caso de prueba: 
            precioProducto: 5.4  cantidad: 10
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */

    //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento
    
}
limpiar = function () {

    /*Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
    Dejar todos los textos de los montos con el valor 0.0
    Si funciona, hacer un commit
    */

}
/* SI TODO FUNCIONA, HACER UN PUSH */