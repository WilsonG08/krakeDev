//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

esMayuscula = function(caracter) {
    const ascii = caracter.charCodeAt(0);
    return ascii >= 65 && ascii <= 90;
}


let palabraSecreta = '';

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