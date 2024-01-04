esMayuscula = function (caracter){
    let ascii = caracter.charCodeAt(0);
    if (ascii >= 65 && ascii <=90){
        return true;
    }else{
        return false;
    }
}

esDigito = function(caracter){
    let ascii = caracter.charCodeAt(0);
    if (ascii >= 48 && ascii <= 57){
        return true;
    }else{
        return false;
    }
}

esGuion = function(caracter){
    let ascii = caracter.charCodeAt(0);
    if(ascii === 45 ){
        return true;
    }else{
        return false;
    }
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}

mostrarPlacaValidaONo = function(idComponente,erroresEstructura){
    let resultado = document.getElementById(idComponente);
    if(erroresEstructura === null){
        resultado.innerHTML= "ESTRUCTURA VALIDA " ;
    }else{
        resultado.innerHTML = "ESTRUCTURA INVALIDA : " + erroresEstructura;
    }
}

mostrarProvincia = function(idComponente,provincias){
    let resultado = document.getElementById(idComponente);

    if(provincias !== null){
        resultado.innerHTML = "La placa pertenece a la provincia del : "+ provincias;
    }else{
        resultado.innerHTML = "No existe provincia para el caracter utilizado";
    }
}

mostrarTipoVehiculo= function(idComponente,tipoVehiculo){
    let resultado = document.getElementById(idComponente);
    if(tipoVehiculo !== null){
        resultado.innerHTML = "Tipo de Vehiculo : "+ tipoVehiculo;
    }else{
        resultado.innerHTML = "Tipo de vehiculo : Vehiculo Particular";
    }
}

mostrarDiaPicoYPlaca = function(idComponente, diaPicoYPlaca){
    let resultado = document.getElementById(idComponente);

    if(diaPicoYPlaca !== null){
        resultado.innerHTML = "Dia Pico y Placa : " + diaPicoYPlaca;
    }

}

mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}