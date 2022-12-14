"use strict"
//# sourceURL=instalarSoftware.js

$(document).ready(function() {
    document.querySelector("#btnAceptarInstalarSoftware").addEventListener("click", validarInstalarSoftware, false);
});

function validarInstalarSoftware(){
    let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    let id = frmInstalarSoftware.txtIdEquipo.value.trim();
    let oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(id) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmInstalarSoftware.txtIdEquipo.focus();
            bValido = false;
        }
        frmInstalarSoftware.txtIdEquipo.classList.add("error");
        sErrores += "El id de equipo no pueda estar vacio o contener algo que no sea numeros de maximo 9 cifras.\n";
    }
    else{
        frmInstalarSoftware.txtIdEquipo.classList.remove("error");
    }

    id = frmInstalarSoftware.txtIdSoftware.value.trim();
    oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(id) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmInstalarSoftware.txtIdSoftware.focus();
            bValido = false;
        }
        frmInstalarSoftware.txtIdSoftware.classList.add("error");
        sErrores += "El id de software no pueda estar vacio o contener algo que no sea numeros de maximo 9 cifras.\n";
    }
    else{
        frmInstalarSoftware.txtIdSoftware.classList.remove("error");
    }

    let fecha = frmInstalarSoftware.txtFechaInstalacion.value.trim();

    if (fecha == "") {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmInstalarSoftware.txtFechaInstalacion.focus();
            bValido = false;
        }
        frmInstalarSoftware.txtFechaInstalacion.classList.add("error");
        sErrores += "La fecha de instalacion tiene que estar rellena.\n";
    }
    else{
        frmInstalarSoftware.txtFechaInstalacion.classList.remove("error");
    }

    if (bValido){
        instalarSoftware();
    }
    else{
        alert(sErrores);
    }
}

function instalarSoftware(oEvento){
    var instalacion = {
        idEquipo: frmInstalarSoftware.txtIdEquipo.value.trim(),
        idSoftware: frmInstalarSoftware.txtIdSoftware.value.trim(),
        fechaInstalacion: frmInstalarSoftware.txtFechaInstalacion.value.trim(),
    }
    var sParametros = "datosInstalacion=" + JSON.stringify(instalacion);
    $.get("instalarSoftware/instalarSoftware.php", sParametros, procesoRespuestaInstalarSoftware, "json");
}
function procesoRespuestaInstalarSoftware(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmInstalarSoftware.reset();
        $('#frmInstalarSoftware').parent("div").hide("normal");
    }
}