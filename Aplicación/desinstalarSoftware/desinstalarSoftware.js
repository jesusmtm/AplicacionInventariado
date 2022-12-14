"use strict"
//# sourceURL=desinstalarSoftware.js

var idEquipo;
var idSoftware;
$(document).ready(function() {
    frmDesinstalarSoftware.reset();
    document.querySelector("#btnAceptarBusquedaDesinstalarSoftware").addEventListener("click", validarDesinstalarSoftware, false);
});

function validarDesinstalarSoftware(){
    let bValido = true; // en principio el formulario es válido

    let idEquipo = frmDesinstalarSoftware.txtIdEquipo.value.trim();
    let idSoftware = frmDesinstalarSoftware.txtIdSoftware.value.trim();

    if(idEquipo == "" && idSoftware == ""){
        frmDesinstalarSoftware.txtIdEquipo.classList.add("error");
        frmDesinstalarSoftware.txtIdSoftware.classList.add("error");
        alert("Debe rellenar uno de los campo");
    }
    if(idEquipo.length>=1 && idSoftware.length>=1){
        frmDesinstalarSoftware.txtIdEquipo.classList.add("error");
        frmDesinstalarSoftware.txtIdSoftware.classList.add("error");
        alert("Solo puede rellenar uno de los campos");
    }
    if (idEquipo.length>=1 && idSoftware.length==0){
        let oExpReg = /^[0-9\s]{1,9}$/;

        if (oExpReg.test(idEquipo) == false) {
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmDesinstalarSoftware.txtIdEquipo.focus();
                bValido = false;
            }
      
            frmDesinstalarSoftware.txtIdEquipo.classList.add("error");
            alert("El id debe estar estar relleno y ser un numero de entre 1 y 9 cifras.");
        }
        else{
            frmDesinstalarSoftware.txtIdEquipo.classList.remove("error");
            busqueda();
        }
    }
    if (idEquipo.length==0 && idSoftware.length>=1){
        let oExpReg = /^[0-9\s]{1,9}$/;

        if (oExpReg.test(idSoftware) == false) {
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmDesinstalarSoftware.txtIdSoftware.focus();
                bValido = false;
            }
            frmDesinstalarSoftware.txtIdSoftware.classList.add("error");
            alert("El id debe estar estar relleno y ser un numero de entre 1 y 9 cifras.");
        }
        else{
            frmDesinstalarSoftware.txtIdSoftware.classList.remove("error");
            busqueda();
        }
    }
}

function busqueda(oEvento){
    if(frmDesinstalarSoftware.txtIdEquipo.value.length>=1){
        var busqueda = {
            idEquipo: frmDesinstalarSoftware.txtIdEquipo.value.trim(),
        }
    var sParametros = "busquedaIdEquipo=" + JSON.stringify(busqueda);
    $.get("desinstalarSoftware/busquedaInstalacion.php", sParametros, procesoRespuestaBusquedaInstalacion, "json");
    }else{
        var busqueda = {
            idSoftware: frmDesinstalarSoftware.txtIdSoftware.value.trim(),
        }
    var sParametros = "busquedaIdSoftware=" + JSON.stringify(busqueda);
    $.get("desinstalarSoftware/busquedaInstalacion.php", sParametros, procesoRespuestaBusquedaInstalacion, "json");
    }
}

function procesoRespuestaBusquedaInstalacion(datos, textStatus, jqXHR){

    let autonum=0;
    // Se se limpia el div de listados
    listados.innerHTML = "";
        
    var tbThead = document.createElement("thead");
    let trEncabezado = document.createElement("tr");
    
    let thEncabezadoIdEquipo = document.createElement("th");
    let thEncabezadoIdSoftware = document.createElement("th");
    let thEncabezadoFechaInstalacion = document.createElement("th");
    let thEncabezadoBorrado = document.createElement("th");

    thEncabezadoIdEquipo.scope="col";
    thEncabezadoIdSoftware.scope="col";
    thEncabezadoFechaInstalacion.scope="col";
    thEncabezadoBorrado.scope="col";

    var textoEncabezadoIdEquipo = document.createTextNode("ID equipo"); 
    var textoEncabezadoIdSoftware = document.createTextNode("ID software"); 
    var textoEncabezadoFechaInstalacion = document.createTextNode("Fecha Instalacion"); 
    var textoEncabezadoBorrado = document.createTextNode("Borrado"); 

    thEncabezadoIdEquipo.appendChild(textoEncabezadoIdEquipo);
    thEncabezadoIdSoftware.appendChild(textoEncabezadoIdSoftware);
    thEncabezadoFechaInstalacion.appendChild(textoEncabezadoFechaInstalacion);
    thEncabezadoBorrado.appendChild(textoEncabezadoBorrado);

    trEncabezado.appendChild(thEncabezadoIdEquipo);
    trEncabezado.appendChild(thEncabezadoIdSoftware);
    trEncabezado.appendChild(thEncabezadoFechaInstalacion);
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

        celda1.scope="row";
        celda2.scope="row";
        celda3.scope="row";
        celda4.scope="row";

        var textoCeldaIdEquipo = document.createTextNode(element[0]);
        var textoCeldaIdSoftware = document.createTextNode(element[1]); 
        var textoCeldaFechaInstalacion = document.createTextNode(element[2]);
        var botonModificacion = document.createElement("button");
        botonModificacion.type = "button";
        botonModificacion.textContent = "Borrar";
        botonModificacion.className = "botonBorrarInstalacion";
        botonModificacion.value=autonum++;

        celda1.appendChild(textoCeldaIdEquipo);
        celda2.appendChild(textoCeldaIdSoftware);
        celda3.appendChild(textoCeldaFechaInstalacion);
        celda4.appendChild(botonModificacion);

        tr.appendChild(celda1);
        tr.appendChild(celda2);
        tr.appendChild(celda3);
        tr.appendChild(celda4);

        tblBody.appendChild(tr);

        idEquipo=element[0];
        idSoftware=element[1];
    });

    oTabla.appendChild(tblBody);
    listados.appendChild(oTabla);

    let botonesModificar = document.querySelectorAll(".botonBorrarInstalacion");
    botonesModificar.forEach(element => {
        element.addEventListener("click", desinstalarSoftware, false);
    });
}

function desinstalarSoftware(oEvento){
    var confirmacion = confirm("Seguro que desea borrar la instalacion con id de equipo: "+idEquipo+" y el id de software: "+idSoftware+".");
    if(confirmacion){
        var instalacion = {
            idEq: idEquipo,
            idSof: idSoftware
        }
        var sParametros = "datosInstalacion=" + JSON.stringify(instalacion);
        $.get("desinstalarSoftware/desinstalarSoftware.php", sParametros, procesoRespuestaDesinstalar, "json");
    }
    else{
        alert("No se borrara la instalacion.");
    }
}

function procesoRespuestaDesinstalar(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmDesinstalarSoftware.reset();
        $('#frmDesinstalarSoftware').parent("div").hide("normal");
        listados.innerHTML = "";
    }
}