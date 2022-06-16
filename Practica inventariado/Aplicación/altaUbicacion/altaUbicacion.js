"use strict"
//# sourceURL=altaUbicacion.js

document.querySelector("#btnAceptarAltaUbicacion").addEventListener("click", validarAltaUbicacion, false);

function validarAltaUbicacion(){
    let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    let nombre = frmAltaUbicacion.txtNombreUbicacion.value.trim();
    let oExpReg = /^[A-Z\s]{1}[a-zA-Z\s]{1,29}$/;

    if (oExpReg.test(nombre) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaUbicacion.txtNombreUbicacion.focus();
            bValido = false;
        }
        frmAltaUbicacion.txtNombreUbicacion.classList.add("error");
        sErrores += "El nombre debe contener la primera letra mayuscula y tener entre 2 y 30 caracteres\n";
    }
    else{
        frmAltaUbicacion.txtNombreUbicacion.classList.remove("error");
    }
    if (bValido){
        altaUbicacion();
    }
    else{
        alert(sErrores);
    }
}
function altaUbicacion(oEvento){
    var oUbicacion = {
        nombreUbicacion: frmAltaUbicacion.txtNombreUbicacion.value.trim(),
        descripcionUbicacion: frmAltaUbicacion.txtDescripcionUbicacion.value.trim()
    }
    var sParametros = "datosUbicacion=" + JSON.stringify(oUbicacion);
    $.get("altaUbicacion/altaUbicacion.php", sParametros, procesoRespuestaAltaUbicacion, "json");
}
function procesoRespuestaAltaUbicacion(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmAltaUbicacion.reset();
        $('#frmAltaUbicacion').parent("div").hide("normal");
    }
}