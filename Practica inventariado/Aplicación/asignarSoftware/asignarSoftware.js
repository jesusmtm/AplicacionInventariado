"use strict"
//# sourceURL=asignarSoftware.js

document.querySelector("#btnAceptarAsignarSoftware").addEventListener("click", validarAsignarSoftware, false);

function validarAsignarSoftware(){
    let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    let id = frmAsignarSoftware.txtIdEquipo.value.trim();
    let oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(id) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAsignarSoftware.txtIdEquipo.focus();
            bValido = false;
        }
        frmAsignarSoftware.txtIdEquipo.classList.add("error");
        sErrores += "El id de equipo no pueda estar vacio o contener algo que no sea numeros de maximo 9 cifras.\n";
    }
    else{
        frmAsignarSoftware.txtIdEquipo.classList.remove("error");
    }

    id = frmAsignarSoftware.txtIdSoftware.value.trim();
    oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(id) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAsignarSoftware.txtIdSoftware.focus();
            bValido = false;
        }
        frmAsignarSoftware.txtIdSoftware.classList.add("error");
        sErrores += "El id de software no pueda estar vacio o contener algo que no sea numeros de maximo 9 cifras.\n";
    }
    else{
        frmAsignarSoftware.txtIdSoftware.classList.remove("error");
    }

    let fecha = frmAsignarSoftware.txtFechaInstalacion.value.trim();

    if (fecha == "") {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAsignarSoftware.txtFechaInstalacion.focus();
            bValido = false;
        }
        frmAsignarSoftware.txtFechaInstalacion.classList.add("error");
        sErrores += "La fecha de instalacion tiene que estar rellena.\n";
    }
    else{
        frmAsignarSoftware.txtFechaInstalacion.classList.remove("error");
    }

    if (bValido){
        asignarSoftware();
    }
    else{
        alert(sErrores);
    }
}

function asignarSoftware(oEvento){
    var asignacion = {
        idEquipo: frmAsignarSoftware.txtIdEquipo.value.trim(),
        idSoftware: frmAsignarSoftware.txtIdSoftware.value.trim(),
        fechaInstalacion: frmAsignarSoftware.txtFechaInstalacion.value.trim(),
    }
    var sParametros = "datosAsignacion=" + JSON.stringify(asignacion);
    $.get("asignarSoftware/asignarSoftware.php", sParametros, procesoRespuestaAsignarSoftware, "json");
}
function procesoRespuestaAsignarSoftware(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmAsignarSoftware.reset();
        $('#frmAsignarSoftware').parent("div").hide("normal");
    }
}