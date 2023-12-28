saludar =  function(){
    // REcuperar el valor de la caja de texto
    let nombre = recuperarTexto("txtNombre")

    // REcuperar el valor de la caja de texto txtApellido
    let apellido = recuperarTexto("txtApellido")

    let edad = recuperarInt("txtEdad");

    let estatura = recuperarFloat("txtEstatura");

    let mensajeBienvenido = "Bienvenido " + nombre + " " + apellido;

    mostrarTexto("lblResultado", mensajeBienvenido);

    mostrarImagen("imgSaludo", "./imagenes/hola.gif" )

    mostrarTextoEnCaja("txtNombre", " ")
}
