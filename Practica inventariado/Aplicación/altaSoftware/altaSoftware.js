"use strict"
//# sourceURL=altaSoftware.js

document.querySelector("#btnAceptarAltaSoftware").addEventListener("click", validarAltaSoftware, false);

function validarAltaSoftware(){
    let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    let nombre = frmAltaSoftware.txtNombreSoftware.value.trim();
    let oExpReg = /^[A-Z\s]{1}[a-zA-Z\s]{1,29}$/;

    if (oExpReg.test(nombre) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmAltaSoftware.txtNombreSoftware.focus();
            bValido = false;
        }
        frmAltaSoftware.txtNombreSoftware.classList.add("error");
        sErrores += "El nombre debe contener la primera letra mayuscula y tener entre 2 y 30 caracteres\n";
    }
    else{
        frmAltaSoftware.txtNombreSoftware.classList.remove("error");
    }

    if (bValido){
        altaSoftware();
    }
    else{
        alert(sErrores);
    }
}
function altaSoftware(oEvento){
    let oE=oEvento || window.event;
    oE.preventDefault;

    //Post ajax sin jquery
    let oAjax = instanciarXHR();
    let sParametros = "nombreSoftware="+frmAltaSoftware.txtNombreSoftware.value;
    sParametros+= "&descripcionSoftware="+frmAltaSoftware.txtDescripcionSoftware.value;
    sParametros = encodeURI(sParametros);

    oAjax.open("POST",encodeURI("altaSoftware/altaSoftware.php"));

    oAjax.addEventListener("readystatechange", procesoRespuestaAltaSoftware, false);

    oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    oAjax.send(sParametros);

}
function procesoRespuestaAltaSoftware(){
    let oAjax=this;
    if (oAjax.readyState == 4 && oAjax.status == 200) {
        
        let oRespuesta = JSON.parse(oAjax.responseText);
        
        
        if (oRespuesta.error == 0) { 
            frmAltaSoftware.reset();
            $('#frmAltaSoftware').parent("div").hide("normal");

            let valido=document.querySelectorAll('#frmAltaSoftware div.valid-feedback');        
            for (const cosa of valido) {
                cosa.style.display="none";
            }
        }
        alert(oRespuesta.mensaje);
    }
}

function instanciarXHR() {
    var xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return xhttp;
}