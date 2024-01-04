
validarPassword = function(cadena){
    let tieneMayuscula = false;
    let tieneDigito = false;

    if(cadena.length < 8 || cadena.length  > 16){
        return true;
    }

    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] >= "A" && cadena[i] <= "Z"){
            
        }
    }

    


}

/* 

function verificarCadena(cadena) {
  if (cadena.length < 8 || cadena.length > 16) {
    return false;
  }
  let tieneMayuscula = false;
  let tieneDigito = false;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] >= "A" && cadena[i] <= "Z") {
      tieneMayuscula = true;
    } else if (cadena[i] >= "0" && cadena[i] <= "9") {
      tieneDigito = true;
    }
  }
  return tieneMayuscula && tieneDigito;
}


*/