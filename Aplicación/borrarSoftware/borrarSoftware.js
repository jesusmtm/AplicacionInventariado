"use strict"
//# sourceURL=frmBorrarSoftware.js

var idSoftware;
$(document).ready(function() {
    frmBorrarSoftware.reset();
    document.querySelector("#btnBusquedaBajaSoftware").addEventListener("click", validarBajaSoftware, false);
});

function validarBajaSoftware(){
    let bValido = true; // en principio el formulario es válido

    let id = frmBorrarSoftware.txtIdBajaSoftware.value.trim();
    let nombre = frmBorrarSoftware.txtNombreBajaSoftware.value.trim();

    if(id == "" && nombre == ""){
        frmBorrarSoftware.txtIdBajaSoftware.classList.add("error");
        frmBorrarSoftware.txtNombreBajaSoftware.classList.add("error");
        alert("Debe rellenar uno de los campo");
    }
    if(id.length>=1 && nombre.length>=1){
        frmBorrarSoftware.txtNombreModificarUsuario.classList.add("error");
        frmBorrarSoftware.txtIdModificarUsuario.classList.add("error");
        alert("Solo puede rellenar uno de los campos");
    }
    if (id.length>=1 && nombre.length==0){
        let oExpReg = /^[0-9\s]{1,9}$/;

        if (oExpReg.test(id) == false) {
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmBorrarSoftware.txtIdBajaSoftware.focus();
                bValido = false;
            }
      
            frmBorrarSoftware.txtIdBajaSoftware.classList.add("error");
            alert("El id debe estar estar relleno y ser un numero de entre 1 y 9 cifras.");
        }
        else{
            frmBorrarSoftware.txtIdBajaSoftware.classList.remove("error");
            busqueda();
        }
    }
    if (id.length==0 && nombre.length>=1){
        let oExpReg = /^[A-Z\s]{1}[a-zA-Z\s]{1,29}$/;

        if (oExpReg.test(nombre) == false) {
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmBorrarSoftware.txtNombreBajaSoftware.focus();
                bValido = false;
            }
            frmBorrarSoftware.txtNombreBajaSoftware.classList.add("error");
            alert("El nombre debe contener la primera letra mayuscula y tener entre 2 y 30 caracteres.");
        }
        else{
            frmBorrarSoftware.txtNombreBajaSoftware.classList.remove("error");
            busqueda();
        }
    }
}

function busqueda(oEvento){
    if(frmBorrarSoftware.txtIdBajaSoftware.value.length>=1){
        var busqueda = {
            idSoftware: frmBorrarSoftware.txtIdBajaSoftware.value.trim(),
        }
    var sParametros = "busquedaId=" + JSON.stringify(busqueda);
    $.get("borrarSoftware/busquedaSoftware.php", sParametros, procesoRespuestaBusquedaSoftware, "json");
    }else{
        var busqueda = {
            nombreSoftware: frmBorrarSoftware.txtNombreBajaSoftware.value.trim(),
        }
    var sParametros = "busquedaNombre=" + JSON.stringify(busqueda);
    $.get("borrarSoftware/busquedaSoftware.php", sParametros, procesoRespuestaBusquedaSoftware, "json");
    }
}

function procesoRespuestaBusquedaSoftware(datos, textStatus, jqXHR){
    
    let autonum=0;
    let divListados = document.querySelector('#listados');
    let firstChild = listados.firstChild;

    // Se comprueba si hay algun listado cargado
    if(!(firstChild == null) || !(firstChild == undefined)){
        
        //Si lo hay, se limpia
        divListados.removeChild(firstChild);
    }

    var tbThead = document.createElement("thead");
    let trEncabezado = document.createElement("tr");
    
    let thEncabezadoId = document.createElement("th");
    let thEncabezadoNombre = document.createElement("th");
    let thEncabezadoVersion = document.createElement("th");
    let thEncabezadoDescripcion = document.createElement("th");
    let thEncabezadoBorrado = document.createElement("th");

    thEncabezadoId.scope="col";
    thEncabezadoNombre.scope="col";
    thEncabezadoVersion.scope="col";
    thEncabezadoDescripcion.scope="col";
    thEncabezadoBorrado.scope="col";

    var textoEncabezadoId = document.createTextNode("ID");
    var textoEncabezadoNombre = document.createTextNode("Nombre");
    var textoEncabezadoVersion = document.createTextNode("Version");
    var textoEncabezadoDescripcion = document.createTextNode("Descripcion");
    var textoEncabezadoBorrado = document.createTextNode("Borrado"); 

    thEncabezadoId.appendChild(textoEncabezadoId);
    thEncabezadoNombre.appendChild(textoEncabezadoNombre);
    thEncabezadoVersion.appendChild(textoEncabezadoVersion);
    thEncabezadoDescripcion.appendChild(textoEncabezadoDescripcion);
    thEncabezadoBorrado.appendChild(textoEncabezadoBorrado);

    trEncabezado.appendChild(thEncabezadoId);
    trEncabezado.appendChild(thEncabezadoNombre);
    trEncabezado.appendChild(thEncabezadoVersion);
    trEncabezado.appendChild(thEncabezadoDescripcion);
    trEncabezado.appendChild(thEncabezadoBorrado);

    var oTabla = document.createElement("table");
    oTabla.className = "table table-dark";
    var tblBody = document.createElement("tbody");

    oTabla.appendChild(tblBody);
    tbThead.appendChild(trEncabezado);
    oTabla.appendChild(tbThead);

    datos.forEach(element => {
        let tr = document.createElement("tr");

        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        var celda3 = document.createElement("td");
        var celda4 = document.createElement("td");
        var celda5 = document.createElement("td"); 

        celda1.scope="row";
        celda2.scope="row";
        celda3.scope="row";
        celda4.scope="row";
        celda5.scope="row";

        var textoCeldaId = document.createTextNode(element[0])
        var textoCeldaNombre = document.createTextNode(element[1]);
        var textoCeldaVersion = document.createTextNode(element[3]);
        var textoCeldaDescripcion = document.createTextNode(element[2]);
        var botonBorrado = document.createElement("button");
        botonBorrado.type = "button";
        botonBorrado.textContent = "Borrar";
        botonBorrado.className = "botonBorrarSoftware";
        botonBorrado.value=autonum++;

        celda1.appendChild(textoCeldaId);
        celda2.appendChild(textoCeldaNombre);
        celda3.appendChild(textoCeldaVersion);
        celda4.appendChild(textoCeldaDescripcion);
        celda5.appendChild(botonBorrado);

        tr.appendChild(celda1);
        tr.appendChild(celda2);
        tr.appendChild(celda3);
        tr.appendChild(celda4);
        tr.appendChild(celda5);

        tblBody.appendChild(tr);

        idSoftware=element[0];
    });

    oTabla.appendChild(tblBody);
    listados.appendChild(oTabla);

    let botonesBorrado = document.querySelectorAll(".botonBorrarSoftware");
    botonesBorrado.forEach(element => {
        element.addEventListener("click", borrarSoftware, false);
    });
}

function borrarSoftware(oEvento){
    var confirmacion = confirm("Seguro que desea borrar el software con id: "+idSoftware+".");
    if(confirmacion){
        var software = {
            id: idSoftware
        }
    
        var sParametros = "idSoftware=" + JSON.stringify(software);
        $.get("borrarSoftware/borrarSoftware.php", sParametros, procesoRespuestaBorrarSoftware, "json");
    }
    else{
        alert("No se borrara el software.");
    }
}

function procesoRespuestaBorrarSoftware(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmBorrarSoftware.reset();
        $('#frmBorrarSoftware').parent("div").hide("normal");
        listados.innerHTML = "";
    }
}