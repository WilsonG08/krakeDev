calcularTasaInteres= function(ingresoAnual){
    if(ingresoAnual < 300000){
        console.log("Tasa de interes es de 16%");
    }else if(ingresoAnual >= 300000 && ingresoAnual  < 500000 ){
        console.log("Tasa de intees es de 15%");
    }else if(ingresoAnual >=500000 && ingresoAnual < 1000000){
        console.log("Tasa de inteeres es de 14%");
    }else if(ingresoAnual >= 1000000 && ingresoAnual < 2000000){
        console.log("Tasa de interes es de 13%");
    }else if(ingresoAnual >= 2000000){
        console.log("Tasa de interes es de 12%");
    }
    return ingresoAnual;
}


calcularCapacidadPago = function(edad, ingresos, egresos){
    let subtotal;
    let capacidadPago;

    if(edad > 50 ){
        console.log("Tiene  un 30% de descuento...");
        subtotal = ingresos - egresos;
        capacidadPago = subtotal * 0.3;
        return capacidadPago;

    }else if(edad<=50 ){
        console.log("Tiene  un 40% de descuento...");
        subtotal= ingresos-egresos;
        capacidadPago = subtotal * 0.4;
        return capacidadPago;
    }
}

calcularDescuento = function(precio, cantidad){
    let descuento;
    let subtotal;
    let  valorPagar;

    if(cantidad < 3){

        console.log("No tiene descuento")

    }else if(cantidad >=3 && cantidad <= 5){

        console.log("Recibe 2% de descuento");
        subtotal = cantidad * precio;
        descuento = subtotal * 0.02;
        valorPagar = subtotal - descuento;

    }else if(cantidad >=6 && cantidad <=11){

        console.log("Recibe 3% de descuento");
        subtotal = cantidad * precio;
        descuento = subtotal * 0.03;
        valorPagar= subtotal - descuento;

    }else if(cantidad >= 12){
        
        console.log("Recibe 4% de descuento");
        subtotal = cantidad * precio;
        descuento = subtotal * 0.04;
        valorPagar = subtotal - descuento;
    }
    return valorPagar;

}

determinarColesterolLDL =  function(nivelColesterol){
    let mensaje;

    if(nivelColesterol < 100){
        mensaje = console.log("Óptimo");
    }else if(nivelColesterol >=100 && nivelColesterol < 130){
        mensaje = console.log("Casi óptimo");
    }else if(nivelColesterol >=130 && nivelColesterol<160){
        mensaje = console.log("Limite superior del rango normal");
    }else if(nivelColesterol >=160 && nivelColesterol <190){
        mensaje = console.log("Alto");
    }else if(nivelColesterol >=190){
        mensaje = console.log("Muy Alto");
    }

    return mensaje;
}

validarClave = function (clave){
    if(clave.length >=8 && clave.length <=16){
        return true;
    }else{
        return false;
    }
}

esMayuscula = function (caracter){
    let ascii = caracter.charCodeAt(0);
    
    if (ascii > 64 && ascii <91){
        return true;
    }else{
        return false;
    }
}

esMinuscula = function (caracter){
    let ascii = caracter.charCodeAt(0);
    if (ascii > 96 && ascii <123){
        return true;
    }else{
        return false;
    }
}

esDigito = function(caracter){
    let ascii = caracter.charCodeAt(0);
    if (ascii > 47 && ascii <58){
        return true;
    }else{
        return false;
    }
}

darPermiso = function(notaMatematicas, notaFisica, notaGeometria){
    if(notaMatematicas > 90 || notaFisica > 90 || notaGeometria > 90 ){
        return true;
    }else{
        return false;
    }

}

otorgarPermiso = function(notaMatematicas, notaFisica, notaGeometria){
    if((notaMatematicas > 90 || notaFisica > 90) && notaGeometria > 80){
        return true;
    }else{
        return false;
    }
}

dejarSalir = function(notaMatematicas,notaFisica,notaGeometria){
    if((notaMatematicas > 90 || notaFisica > 90 || notaGeometria > 90) && notaFisica > notaMatematicas){
        return true;
    }else{
        return false;
    }
}