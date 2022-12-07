"use strict"
//# sourceURL=listadoUsuariosSede.js

$(document).ready(function() {
    frmListadoUsuariosSede.txtIdSede.value = "";
    document.querySelector("#btnAceptarListadoUsuariosSede").addEventListener("click", validarListadoUsuariosSede, false);
});

function validarListadoUsuariosSede(){
    let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    let id = frmListadoUsuariosSede.txtIdSede.value.trim();
    let oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(id) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmListadoUsuariosSede.txtIdSede.focus();
            bValido = false;
        }
        frmListadoUsuariosSede.txtIdSede.classList.add("error");
        sErrores += "El id solo puede tener numeros de como maximo 9 cifras.\n";
    }
    else{
        frmListadoUsuariosSede.txtIdSede.classList.remove("error");
    }

    if (bValido){
        mostrarListadoUsuariosSede();
    }
    else{
        alert(sErrores);
    }
}

function mostrarListadoUsuariosSede(oEvento){
    var id = {
        idSede: frmListadoUsuariosSede.txtIdSede.value.trim(),
    }
    var sParametros = "datosListadoSede=" + JSON.stringify(id);
    $.get("listadoUsuariosSede/listadoUsuariosSede.php", sParametros, procesoRespuestaMostrarListadoUsuariosSede, "html");
}
function procesoRespuestaMostrarListadoUsuariosSede(oDatos, sStatus, oXHR){
    oDatos=JSON.parse(oDatos);

    // Se se limpia el div de listados
    listados.innerHTML = "";

    var tbThead = document.createElement("thead");
    let trEncabezado = document.createElement("tr");
    
    let thEncabezadoId = document.createElement("th");
    let thEncabezadoNombre = document.createElement("th");
    let thEncabezadoApellido = document.createElement("th");
    let thEncabezadoCorreo = document.createElement("th");
    let thEncabezadoTelefono = document.createElement("th");
    let thEncabezadoDepartamento = document.createElement("th");
    let thEncabezadoAnotaciones = document.createElement("th");

    thEncabezadoId.scope="col";
    thEncabezadoNombre.scope="col";
    thEncabezadoApellido.scope="col";
    thEncabezadoCorreo.scope="col";
    thEncabezadoTelefono.scope="col";
    thEncabezadoDepartamento.scope="col";
    thEncabezadoAnotaciones.scope="col";

    var textoEncabezadoId = document.createTextNode("ID");
    var textoEncabezadoNombre = document.createTextNode("Nombre"); 
    var textoEncabezadoApellido = document.createTextNode("Apellido"); 
    var textoEncabezadoCorreo = document.createTextNode("Correo"); 
    var textoEncabezadoTelefono = document.createTextNode("Telefono");
    var textoEncabezadoDepartamento = document.createTextNode("Departamento"); 
    var textoEncabezadoAnotaciones = document.createTextNode("Anotaciones");

    thEncabezadoId.appendChild(textoEncabezadoId);
    thEncabezadoNombre.appendChild(textoEncabezadoNombre);
    thEncabezadoApellido.appendChild(textoEncabezadoApellido);
    thEncabezadoCorreo.appendChild(textoEncabezadoCorreo);
    thEncabezadoTelefono.appendChild(textoEncabezadoTelefono);
    thEncabezadoDepartamento.appendChild(textoEncabezadoDepartamento);
    thEncabezadoAnotaciones.appendChild(textoEncabezadoAnotaciones);

    trEncabezado.appendChild(thEncabezadoId);
    trEncabezado.appendChild(thEncabezadoNombre);
    trEncabezado.appendChild(thEncabezadoApellido);
    trEncabezado.appendChild(thEncabezadoCorreo);
    trEncabezado.appendChild(thEncabezadoTelefono);
    trEncabezado.appendChild(thEncabezadoDepartamento);
    trEncabezado.appendChild(thEncabezadoAnotaciones);

    var oTabla = document.createElement("table");
    oTabla.className = "table table-dark";
    var tblBody = document.createElement("tbody");

    oTabla.appendChild(tblBody);
    tbThead.appendChild(trEncabezado);
    oTabla.appendChild(tbThead);

    oDatos.forEach(element => {
        let tr = document.createElement("tr");

        var celda1 = document.createElement("td"); 
        var celda2 = document.createElement("td"); 
        var celda3 = document.createElement("td"); 
        var celda4 = document.createElement("td"); 
        var celda5 = document.createElement("td");
        var celda6 = document.createElement("td"); 
        var celda7 = document.createElement("td");

        celda1.scope="row";
        celda2.scope="row";
        celda3.scope="row";
        celda4.scope="row";
        celda5.scope="row";
        celda6.scope="row";
        celda7.scope="row";

        var textoCeldaId = document.createTextNode(element[0]);
        var textoCeldaNombre = document.createTextNode(element[1]); 
        var textoCeldaApellido = document.createTextNode(element[2]); 
        var textoCeldaCorreo = document.createTextNode(element[3]); 
        var textoCeldaTelefono = document.createTextNode(element[4]);
        var textoCeldaDepartamento = document.createTextNode(element[5]); 
        var textoCeldaAnotaciones = document.createTextNode(element[6]);

        celda1.appendChild(textoCeldaId);
        celda2.appendChild(textoCeldaNombre);
        celda3.appendChild(textoCeldaApellido);
        celda4.appendChild(textoCeldaCorreo);
        celda5.appendChild(textoCeldaTelefono);
        celda6.appendChild(textoCeldaDepartamento);
        celda7.appendChild(textoCeldaAnotaciones);

        tr.appendChild(celda1);
        tr.appendChild(celda2);
        tr.appendChild(celda3);
        tr.appendChild(celda4);
        tr.appendChild(celda5);
        tr.appendChild(celda6);
        tr.appendChild(celda7);

        tblBody.appendChild(tr);
    });

    oTabla.appendChild(tblBody);
    listados.appendChild(oTabla);
}