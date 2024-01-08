//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta = '';

esMayuscula = function(caracter) {
    const ascii = caracter.charCodeAt(0);
    return ascii >= 65 && ascii <= 90;
}




guardarPalabra = function () {
    let input = document.getElementById('txtSecreta');
    let palabra = input.value;

    if (palabra.length === 5 && palabra === palabra.toUpperCase()) {
        palabraSecreta = palabra;
        console.log(palabraSecreta);
    } else {
        alert('Debe ingresar una palabra de 5 letras mayúsculas');
    }
}

mostrarLetra = function(letra, posicion) {
    const div = document.getElementById('div' + posicion);
    div.textContent = letra;
}


validar = function(letra) {
    let letrasEncontradas = 0;

    for(let i = 0; i < palabraSecreta.length; i++) {
        if(palabraSecreta[i] === letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }
    }
}

ingresarLetra = function() {
    let letra = recuperarTexto('txtLetra');
    
    if (esMayuscula(letra)) {
        validar(letra);
    } else {
        alert('SOLO SE ACEPTAN MAYUSCULAS');
    }
}
