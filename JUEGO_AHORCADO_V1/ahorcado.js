//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta = '';
let intentos = 0;
let coincidencias = 0;
let errores = 0;


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

    if (letrasEncontradas > 0) {
        coincidencias += letrasEncontradas;
    } else {
        errores++;
        alert('LA LETRA NO ES PARTE DE LA PALABRA');
        mostrarAhorcado();
    }
}


ingresarLetra = function() {
    let letra = recuperarTexto('txtLetra');
    
    if (esMayuscula(letra)) {
        intentos++;
        validar(letra);
    } else {
        alert('SOLO SE ACEPTAN MAYUSCULAS');
    }

    if (coincidencias === 5) {
        mostrarImagen('ahorcadoImagen', 'ganador.gif');
    } else if (intentos === 10) {
        mostrarImagen('ahorcadoImagen', 'gameOver.gif');
    }
}

mostrarAhorcado = function() {
    let rutaImagen = 'Ahorcado_0' + errores + '.png';
    mostrarImagen('ahorcadoImagen', rutaImagen);
}
