
probarAtributos = function(){
    let persona ={
        nombre : "Pedro",
        apellido : "Morales",
        edad : 24,
        estaVivo : true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if(persona.estaVivo == false){
        console.log("No esta vivo!");
    }else{
        console.log("Si esta vivo");
    }
}

crearProducto = function(){
    let producto1 = {
        nombre : "Papitas",
        precio : 1.25,
        stock : 15,
    }

    let producto2 = {
        nombre : "Leche Toni",
        precio : 1.10,
        stock  : 20
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);

    if(producto1.stock === producto2.stock){
        console.log("Ambos productos tienen el mismo stock");
    }else if(producto1.stock > producto2.stock){
        console.log("Producto 1 tiene mayor stock");
    }else{
        console.log("Producto 2 tiene mayor stock");
    }
}

modificarAtributos = function(){
    let cuenta = {
        numero : "342567385",
        saldo : 0.0,
    }

    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCliente = function(){
    let cliente = {
        cedula : "1234567890",
        nombre : "Juan"
    }

    //cliente.nombre = "Juanito";
    // cliente.nombr = "xxxx"

    let cliente1 = {}
    cliente1.nombre = "ROmero";
    cliente1.apellido = "Salcedo";
    cliente1.cedula = "256358906";
}


probarIncrementoSaldo = function(){
    let cta={
        numero : "22333232",
        saldo : 34.00
    };
    incrementarSaldo(cta, 100);
    console.log(cta.saldo);
}

probarDeterminarMayor = function(){
    let mayor;

    let per1 = {
        nombre : "Daniel",
        edad : 45
    }
    let per2 = {
        nombre : "Luis",
        edad : 18
    }

    mayor = determinarMayor(per1, per2);

    if(mayor != null){
        console.log("El mayor es: " + mayor.nombre);
    }
}

incrementarSaldo = function(cuenta, monto){
    cuenta.saldo += monto;
}

determinarMayor = function(persona1, persona2){
    
    if (persona1.edad > persona2.edad) {
        return persona1;
    }else if (persona2.edad > persona1.edad) {
        return persona2;
    }else{
        return null;
    }
}