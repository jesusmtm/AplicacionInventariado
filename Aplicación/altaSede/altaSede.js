"use strict"
//# sourceURL=altaSede.js

$(document).ready(function() {
    document.querySelector("#btnAceptarAltaSede").addEventListener("click", validarAltaSede, false);
});

function validarAltaSede(){
    let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    let nombre = frmAltaSede.txtNombreSede.value.trim();
    let oExpReg = /^[A-Z\s]{1}[a-zA-Z\s]{1,29}$/;

    if (oExpReg.test(nombre) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaSede.txtNombreSede.focus();
            bValido = false;
        }
        frmAltaSede.txtNombreSede.classList.add("error");
        sErrores += "El nombre debe contener la primera letra mayuscula y tener entre 2 y 30 caracteres\n";
    }
    else{
        frmAltaSede.txtNombreSede.classList.remove("error");
    }
    if (bValido){
        altaSede();
    }
    else{
        alert(sErrores);
    }
}
function altaSede(oEvento){
    var oSede = {
        nombreSede: frmAltaSede.txtNombreSede.value.trim(),
        descripcionSede: frmAltaSede.txtDescripcionSede.value.trim()
    }
    var sParametros = "datosSede=" + JSON.stringify(oSede);
    $.get("altaSede/altaSede.php", sParametros, procesoRespuestaAltaSede, "json");
}
function procesoRespuestaAltaSede(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmAltaSede.reset();
        $('#frmAltaSede').parent("div").hide("normal");
    }
}