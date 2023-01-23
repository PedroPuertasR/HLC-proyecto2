document.getElementById("nombre").addEventListener("blur", pasarNombreAMayus);
document.getElementById("apellidos").addEventListener("blur", pasarApellidosAMayus);
document.getElementById("email").addEventListener("blur", comprobarEmail);
document.getElementById("telefono").addEventListener("blur", comprobarTelefono);

function revisarformularioCita() {
    let resultado = false;

    resultado = pasarNombreAMayus() &&
        pasarApellidosAMayus &&
        comprobarEmail() &&
        comprobarTelefono();

    formularioCita.enviar.className = resultado ? "btn btn-success mb-2" : "btn btn-danger mb-2";

    return resultado;
}

function pasarNombreAMayus(){

    let campoNombre = formularioCita.nombre;

    let resultado = campoNombre.value !== "";

    if(resultado){
        campoNombre.value = campoNombre.value.toUpperCase();
    }

    cambiarApariencia(campoNombre, resultado);

    return resultado;

}

function pasarApellidosAMayus() {

    let campoApellidos = formularioCita.apellidos;

    let resultado = campoApellidos.value !== "";

    if (resultado) {
        campoApellidos.value = campoApellidos.value.toUpperCase();
    }

    cambiarApariencia(campoApellidos, resultado);

    return resultado;

}

function comprobarEmail() {
    let email = formularioCita.email;
    let resultado = email.value !== "";

    if (resultado) {

        let emailSeparado = email.value.split('@');
        resultado = emailSeparado.length == 2;

        if (resultado) {
            let partesDominio = emailSeparado[1].split('.');
            resultado = partesDominio.length > 1;
        }
    }

    cambiarApariencia(email, resultado);

    return resultado;
}

function comprobarTelefono() {
    let telefono = formularioCita.telefono;

    let resultado = (telefono.value.length == 9) && (!isNaN(telefono.value));

    cambiarApariencia(telefono, resultado);

    return resultado;
}

function cambiarApariencia(campo, estado) {
    if (estado) {
        campo.classList.remove("border-danger");
        campo.classList.add("border-success");
        campo.parentNode.nextElementSibling.style.visibility = 'hidden';
    }
    else {
        campo.classList.remove("border-success");
        campo.classList.add("border-danger");
        campo.parentNode.nextElementSibling.style.visibility = 'visible';
    }

}