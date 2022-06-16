"use strict"
//# sourceURL=altaUsuario.js

document.querySelector("#btnAceptarAltaUsuario").addEventListener("click", validarAltaUsuario, false);

function validarAltaUsuario(){
    let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    let nombre = frmAltaUsuario.txtNombreUsuario.value.trim();
    let oExpReg = /^[A-Z\s]{1}[a-zA-Z\s]{1,29}$/;

    if (oExpReg.test(nombre) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaUsuario.txtNombreUsuario.focus();
            bValido = false;
        }
        frmAltaUsuario.txtNombreUsuario.classList.add("error");
        sErrores += "El nombre debe contener la primera letra mayuscula y tener entre 2 y 30 caracteres.\n";
    }
    else{
        frmAltaUsuario.txtNombreUsuario.classList.remove("error");
    }
    

    let apellidos = frmAltaUsuario.txtApellidosUsuario.value.trim();
    oExpReg = /^[A-Z\s]{1}[a-zA-Z\s]{1,59}$/;

    if (oExpReg.test(apellidos) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaUsuario.txtApellidosUsuario.focus();
            bValido = false;
        }
        frmAltaUsuario.txtApellidosUsuario.classList.add("error");
        sErrores += "El apellido debe contener la primera letra mayuscula y tener entre 2 y 60 caracteres.\n";
    }
    else{
        frmAltaUsuario.txtApellidosUsuario.classList.remove("error");
    }

    let correo = frmAltaUsuario.txtCorreoUsuario.value.trim();
    //oExpReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    oExpReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (oExpReg.test(correo) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaUsuario.txtCorreoUsuario.focus();
            bValido = false;
        }
        frmAltaUsuario.txtCorreoUsuario.classList.add("error");
        sErrores += "El correo tiene que tener el formato correcto.\n";
    }
    else{
        frmAltaUsuario.txtCorreoUsuario.classList.remove("error");
    }

    let telefono = frmAltaUsuario.txtTelefonoUsuario.value.trim();
    oExpReg = /^[6\s]{1}[0-9\s]{8}$/;
  
    if (oExpReg.test(telefono) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaUsuario.txtTelefonoUsuario.focus();
            bValido = false;
        }
  
        frmAltaUsuario.txtTelefonoUsuario.classList.add("error");
        sErrores += "El telefono debe tener 9 numeros y empezar por 6.\n";
    }
    else{
        frmAltaUsuario.txtTelefonoUsuario.classList.remove("error");
    }

    if (frmAltaUsuario.comboDepartamento.value == "none"){
        bValido=false;
        sErrores += "Debe seleccionar un departamento.";
    }

    if (bValido){
        altaUsuario();
    }
    else{
        alert(sErrores);
    }
}
function altaUsuario(oEvento){
    var usuario = {
        nombreUsuario: frmAltaUsuario.txtNombreUsuario.value.trim(),
        apellidosUsuario: frmAltaUsuario.txtApellidosUsuario.value.trim(),
        correoUsuario: frmAltaUsuario.txtCorreoUsuario.value.trim(),
        telefonoUsuario: frmAltaUsuario.txtTelefonoUsuario.value.trim(),
        departamentoUsuario: frmAltaUsuario.comboDepartamento.value,
        anotacionesUsuario: frmAltaUsuario.txtAnotacionesUsuario.value.trim()
    }
    var sParametros = "datosUsuario=" + JSON.stringify(usuario);
    $.get("altaUsuario/altaUsuario.php", sParametros, procesoRespuestaAltaUsuario, "json");
}
function procesoRespuestaAltaUsuario(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmAltaUsuario.reset();
        $('#frmAltaUsuario').parent("div").hide("normal");
    }
}

