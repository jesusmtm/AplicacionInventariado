"use strict"
//# sourceURL=desasignarSoftware.js

var idEquipo;
var idSoftware;
document.querySelector("#btnAceptarBusquedaDesasignarSoftware").addEventListener("click", validarDesasignarSoftware, false);

function validarDesasignarSoftware(){
    let bValido = true; // en principio el formulario es válido

    let idEquipo = frmDesasignarSoftware.txtIdEquipo.value.trim();
    let idSoftware = frmDesasignarSoftware.txtIdSoftware.value.trim();

    if(idEquipo == "" && idSoftware == ""){
        frmDesasignarSoftware.txtIdEquipo.classList.add("error");
        frmDesasignarSoftware.txtIdSoftware.classList.add("error");
        alert("Debe rellenar uno de los campo");
    }
    if(idEquipo.length>=1 && idSoftware.length>=1){
        frmDesasignarSoftware.txtIdEquipo.classList.add("error");
        frmDesasignarSoftware.txtIdSoftware.classList.add("error");
        alert("Solo puede rellenar uno de los campos");
    }
    if (idEquipo.length>=1 && idSoftware.length==0){
        let oExpReg = /^[0-9\s]{1,9}$/;

        if (oExpReg.test(idEquipo) == false) {
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmDesasignarSoftware.txtIdEquipo.focus();
                bValido = false;
            }
      
            frmDesasignarSoftware.txtIdEquipo.classList.add("error");
            alert("El id debe estar estar relleno y ser un numero de entre 1 y 9 cifras.");
        }
        else{
            frmDesasignarSoftware.txtIdEquipo.classList.remove("error");
            busqueda();
        }
    }
    if (idEquipo.length==0 && idSoftware.length>=1){
        let oExpReg = /^[0-9\s]{1,9}$/;

        if (oExpReg.test(idSoftware) == false) {
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmDesasignarSoftware.txtIdSoftware.focus();
                bValido = false;
            }
            frmDesasignarSoftware.txtIdSoftware.classList.add("error");
            alert("El id debe estar estar relleno y ser un numero de entre 1 y 9 cifras.");
        }
        else{
            frmDesasignarSoftware.txtIdSoftware.classList.remove("error");
            busqueda();
        }
    }
}

function busqueda(oEvento){
    if(frmDesasignarSoftware.txtIdEquipo.value.length>=1){
        var busqueda = {
            idEquipo: frmDesasignarSoftware.txtIdEquipo.value.trim(),
        }
    var sParametros = "busquedaIdEquipo=" + JSON.stringify(busqueda);
    $.get("desasignarSoftware/busquedaAsignacion.php", sParametros, procesoRespuestaBusquedaAsignacion, "json");
    }else{
        var busqueda = {
            idSoftware: frmDesasignarSoftware.txtIdSoftware.value.trim(),
        }
    var sParametros = "busquedaIdSoftware=" + JSON.stringify(busqueda);
    $.get("desasignarSoftware/busquedaAsignacion.php", sParametros, procesoRespuestaBusquedaAsignacion, "json");
    }
}

function procesoRespuestaBusquedaAsignacion(datos, textStatus, jqXHR){

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
        botonModificacion.className = "botonBorrarAsignacion";
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
    divListados.appendChild(oTabla);

    let botonesModificar = document.querySelectorAll(".botonBorrarAsignacion");
    botonesModificar.forEach(element => {
        element.addEventListener("click", desasignarSoftware, false);
    });
}

function desasignarSoftware(oEvento){
    var confirmacion = confirm("Seguro que desea borrar la asignacion con id de equipo: "+idEquipo+" y el id de software: "+idSoftware+".");
    if(confirmacion){
        var asignacion = {
            idEq: idEquipo,
            idSof: idSoftware
        }
        var sParametros = "datosAsignacion=" + JSON.stringify(asignacion);
        $.get("desasignarSoftware/desasignarSoftware.php", sParametros, procesoRespuestaDesasignacion, "json");
    }
    else{
        alert("No se borrara la asignacion.");
    }
}

function procesoRespuestaDesasignacion(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmDesasignarSoftware.reset();
        $('#frmDesasignarSoftware').parent("div").hide("normal");
        let divListados = document.querySelector('#listados');
        let firstChild = listados.firstChild;

        // Se comprueba si hay algun listado cargado
        if(!(firstChild == null) || !(firstChild == undefined)){
        
            //Si lo hay, se limpia
            divListados.removeChild(firstChild);
        }
    }
}