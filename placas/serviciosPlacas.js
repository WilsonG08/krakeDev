validarEstructura = function(placa){
    let errores = "";

    
    if(placa.length != 7 && placa.length!=8){
        errores += " La placa debe tener 7 u 8 cacateres  ."
    }

    
    for (var i = 0; i < 3; i++) {
        if (!esMayuscula(placa[i])) {
          errores += "  El " + (i + 1) + "º caracter debe ser Mayuscula. ";
        }
      }

    if(placa.charAt(3)!='-'){
        errores += " El cuarto caracter debe ser un guion."
    }

    for (var i = 4; i < placa.length; i++) {
        if (!esDigito(placa[i])) {
          errores += " El " + (i + 1) + "º caracter debe ser un dígito. ";
        }
      }


      if (errores !== "") {
        return errores.trim(); // Eliminar espacios en blanco al principio y al final
      } else {
        return null;
      }

}

obtenerProvincia = function(placa){
  let provincias = {
    'A':'Azuay',
    'B':'Bolivar',
    'U':'Cañar',
    'C':'Carchi',
    'X':'Cotopaxi',
    'H':'Chimborazo',
    'O':'El Oro',
    'E':'Esmeraldas',
    'W':'Galapagos',
    'G':'Guayas',
    'I':'Imbabura',
    'L':'Loja',
    'R':'Los Rios',
    'M':'Manabi',
    'V':'Morona Santiago',
    'N':'Napo',
    'S':'Pastaza',
    'P':'Pichincha',
    'K':'Sucumbios',
    'Q':'Orellana',
    'T':'Tungurahua',
    'Z':'Zamora Chinchipe',
    'Y':'Santa Elena'
  };

  let primeraLetra = placa.charAt(0);

  if(provincias.hasOwnProperty(primeraLetra)){
    return provincias[primeraLetra];
  }else{
    return null;
  }

}

obtenerTipoVehiculo = function(placa){
  let segundoCaracter = placa.charAt(1);

  let tipoVehiculo = {
    "A":"Vehiculo Comercial",
    "Z":"Vehiculo Comercial",
    "E":"Vehiculo Gubernamental",
    "X":"Vehiculo de Uso Oficial",
    "S":"Vehiculo del Gobierno Provincial",
    "M":"Vehiculo municipal"
  };
  
  if(tipoVehiculo.hasOwnProperty(segundoCaracter)){
    return tipoVehiculo[segundoCaracter];
  }else{
    return null;
  }


}

obtenerDiaPicoYPlaca = function(placa){
  let ultimoCaracter = placa.charAt(placa.length - 1);

    let DiaPicoYPlaca = {
      "1":"Lunes",
      "2":"Lunes",
      "3":"Martes",
      "4":"Martes",
      "5":"Miercoles",
      "6":"Miercoles",
      "7":"Jueves",
      "8":"Jueves",
      "9":"Viernes",
      "0":"Viernes",
    }

    if(DiaPicoYPlaca.hasOwnProperty(ultimoCaracter)){
      return DiaPicoYPlaca[ultimoCaracter]
    }else{
      return null;
    }

}

limpiar = function(){
    
    mostrarTextoEnCaja("txtPlaca","");
    mostrarTexto("lblError1","");
    mostrarTexto("lblError2","");
    mostrarTexto("lblError3","");
    mostrarTexto("lblError4","");

}