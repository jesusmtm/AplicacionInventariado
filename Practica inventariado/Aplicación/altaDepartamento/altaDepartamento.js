"use strict"
//# sourceURL=altaDepartamento.js

$(document).ready(function() {
    document.querySelector("#btnAceptarAltaDepartamento").addEventListener("click", validarAltaDepartamento, false);
});

function validarAltaDepartamento(){
    let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    let nombre = frmAltaDepartamento.txtNombreDepartamento.value.trim();
    let oExpReg = /^[A-Z\s]{1}[a-zA-Z\s]{1,29}$/;

    if (oExpReg.test(nombre) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaDepartamento.txtNombreDepartamento.focus();
            bValido = false;
        }
        frmAltaDepartamento.txtNombreDepartamento.classList.add("error");
        sErrores += "El nombre debe contener la primera letra mayuscula y tener entre 2 y 30 caracteres\n";
    }
    else{
        frmAltaDepartamento.txtNombreDepartamento.classList.remove("error");
    }
    if (bValido){
        altaDepartamento();
    }
    else{
        alert(sErrores);
    }
}
function altaDepartamento(oEvento){
    var departamento = {
        nombreDepartamento: frmAltaDepartamento.txtNombreDepartamento.value.trim(),
        descripcionDepartamento: frmAltaDepartamento.txtDescripcionDepartamento.value.trim()
    }
    var sParametros = "datosDepartamento=" + JSON.stringify(departamento);
    $.get("altaDepartamento/altaDepartamento.php", sParametros, procesoRespuestaAltaDepartamento, "json");
}
function procesoRespuestaAltaDepartamento(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmAltaDepartamento.reset();
        $('#frmAltaDepartamento').parent("div").hide("normal");
    }
}