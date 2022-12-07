"use strict"
//# sourceURL=altaEquipo.js
$(document).ready(function() {
    document.querySelector("#btnAceptarAltaEquipo").addEventListener("click", validarAltaEquipo, false);
});

function validarAltaEquipo(){
    let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    let id = frmAltaEquipo.txtIdUsuario.value.trim();
    let oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(id) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaEquipo.txtIdUsuario.focus();
            bValido = false;
        }
        frmAltaEquipo.txtIdUsuario.classList.add("error");
        sErrores += "El id de usuario tiene que estar relleno y contener solo numeros.\n";
    }
    else{
        frmAltaEquipo.txtIdUsuario.classList.remove("error");
    }

    id = frmAltaEquipo.txtIdUbicacion.value.trim();
    oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(id) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaEquipo.txtIdUbicacion.focus();
            bValido = false;
        }
        frmAltaEquipo.txtIdUbicacion.classList.add("error");
        sErrores += "El id de ubicacion tiene que estar relleno y contener solo numeros.\n";
    }
    else{
        frmAltaEquipo.txtIdUbicacion.classList.remove("error");
    }
    
    let ip = frmAltaEquipo.txtIp.value.trim();
    oExpReg = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (oExpReg.test(ip) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaEquipo.txtIp.focus();
            bValido = false;
        }
        frmAltaEquipo.txtIp.classList.add("error");
        sErrores += "La ip tiene que tener un formato correcto.\n";
    }
    else{
        frmAltaEquipo.txtIp.classList.remove("error");
    }
    

    let mac = frmAltaEquipo.txtMac.value.trim();
    oExpReg = /^([0-9A-Fa-f]{2}[:-]){1}([0-9A-Fa-f]{2}[:-]){1}([0-9A-Fa-f]{2}[:-]){1}([0-9A-Fa-f]{2}[:-]){1}([0-9A-Fa-f]{2}[:-]){1}([0-9A-Fa-f]{2})$/;

    if (oExpReg.test(mac) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaEquipo.txtMac.focus();
            bValido = false;
        }
        frmAltaEquipo.txtMac.classList.add("error");
        sErrores += "La mac tiene que tener un formato correcto.\n";
    }
    else{
        frmAltaEquipo.txtMac.classList.remove("error");
    }

    let procesador = frmAltaEquipo.txtProcesador.value.trim();
    oExpReg = /^[A-Z0-9\s]{1}[a-zA-Z0-9\s]{1,59}$/;

    if (oExpReg.test(procesador) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaEquipo.txtProcesador.focus();
            bValido = false;
        }
        frmAltaEquipo.txtProcesador.classList.add("error");
        sErrores += "El modelo de procesador tiene que empezar por mayuscula y no exceder los 60 caracteres.\n";
    }
    else{
        frmAltaEquipo.txtProcesador.classList.remove("error");
    }

    let ram = frmAltaEquipo.txtRam.value.trim();
    oExpReg = /^[A-Z0-9\s]{1}[a-zA-Z0-9\s]{1,59}$/;
  
    if (oExpReg.test(ram) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaEquipo.txtRam.focus();
            bValido = false;
        }
  
        frmAltaEquipo.txtRam.classList.add("error");
        sErrores += "El modelo de ram tiene que empezar por mayuscula y no exceder los 60 caracteres.\n";
    }
    else{
        frmAltaEquipo.txtRam.classList.remove("error");
    }

    let almacenamiento = frmAltaEquipo.txtAlmacenamiento.value.trim();
    oExpReg = /^[A-Z0-9\s]{1}[a-zA-Z0-9\s]{1,59}$/;
  
    if (oExpReg.test(almacenamiento) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaEquipo.txtAlmacenamiento.focus();
            bValido = false;
        }
  
        frmAltaEquipo.txtAlmacenamiento.classList.add("error");
        sErrores += "El modelo de almacenamiento tiene que empezar por mayuscula y no exceder los 60 caracteres.\n";
    }
    else{
        frmAltaEquipo.txtAlmacenamiento.classList.remove("error");
    }
    
    if(!document.querySelector('input[name="rbtServidor"]:checked')) {
        sErrores += "Tiene que marcar si es un servidor o no.";
        bValido = false;
    }

    if (bValido){
        altaEquipo();
    }
    else{
        alert(sErrores);
    }
}

function altaEquipo(oEvento){
    var equipo = {
        idUsuario: frmAltaEquipo.txtIdUsuario.value.trim(),
        idUbicacion: frmAltaEquipo.txtIdUbicacion.value.trim(),
        ip: frmAltaEquipo.txtIp.value.trim(),
        mac: frmAltaEquipo.txtMac.value.trim(),
        procesador: frmAltaEquipo.txtProcesador.value.trim(),
        ram: frmAltaEquipo.txtRam.value.trim(),
        almacenamiento: frmAltaEquipo.txtAlmacenamiento.value.trim(),
        servidor: document.querySelector('input[name="rbtServidor"]:checked').value,
        descripcion: frmAltaEquipo.txtDescripcionEquipo.value.trim()
    }
    var sParametros = "datosEquipo=" + JSON.stringify(equipo);
    $.get("altaEquipo/altaEquipo.php", sParametros, procesoRespuestaAltaEquipo, "json");
}

function procesoRespuestaAltaEquipo(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmAltaEquipo.reset();
        $('#frmAltaEquipo').parent("div").hide("normal");
    }
}