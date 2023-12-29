validarPlaca = function(){
    //obtener el valor ingresado por el usuario en la caja de texto
    let placa = recuperarTexto("txtPlaca");
    
    //invocar a validarEstructura y guardar en una variable
    let erroresEstructura = validarEstructura(placa);

    //mostrarTexto("lblError1",erroresEstructura)
    mostrarPlacaValidaONo("lblError1",erroresEstructura)
    if(erroresEstructura ==null){
        let provinciaObtenida = obtenerProvincia(placa);
        let tipoVehiculo = obtenerTipoVehiculo(placa);
        let diaPicoYPlaca = obtenerDiaPicoYPlaca(placa)

        mostrarProvincia("lblError2", provinciaObtenida);
        mostrarTipoVehiculo("lblError3", tipoVehiculo);
        mostrarDiaPicoYPlaca("lblError4", diaPicoYPlaca);

    }else{
        mostrarTexto("lblError2", "Provincia Incorrecta");
        mostrarTexto("lblError3", "Tipo de Vehiculo Incorrecto");
        mostrarTexto("lblError4", "Dia Pico y Placa Incorrecto");
    }

}

