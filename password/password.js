// Función para validar la contraseña
function validarPassword(password) {
    let errores = "";

    if (password.length < 8 || password.length > 16) {
        errores += "La contraseña debe tener entre 8 y 16 caracteres. ";
    }

    let tieneMayuscula = false;
    let tieneDigito = false;
    let tieneCaracterEspecial = false;

    for (let i = 0; i < password.length; i++) {
        let caracter = password[i];

        if (esMayuscula(caracter)) {
            tieneMayuscula = true;
        }

        if (esDigito(caracter)) {
            tieneDigito = true;
        }

        if (esGuion(caracter)) {
            tieneCaracterEspecial = true;
        }
    }

    if (!tieneMayuscula) {
        errores += "La contraseña debe tener al menos una letra mayúscula. ";
    }

    if (!tieneDigito) {
        errores += "La contraseña debe tener al menos un dígito. ";
    }

    if (!tieneCaracterEspecial) {
        errores += "La contraseña debe tener al menos un carácter especial (*, -, _). ";
    }

    return errores;
}

// Función para ejecutar la validación
function ejecutarValidacion() {
    let password = document.getElementById('txtPassword').value; 
    let errores = validarPassword(password);

    if (errores === "") {
        mostrarTexto("lblMensaje", "Password Correcto");
    } else {
        mostrarTexto("lblMensaje", errores);
    }
}

