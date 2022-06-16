"use strict"
//# sourceURL=listadoAsignaciones.js

getListaAsignaciones();

function getListaAsignaciones(){
    $.get("listadoAsignaciones/listadoAsignaciones.php", null, procesoRespuesta, "html");
}

function procesoRespuesta(datos, textStatus, jqXHR){
    datos=JSON.parse(datos);

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

    thEncabezadoIdEquipo.scope="col";
    thEncabezadoIdSoftware.scope="col";
    thEncabezadoFechaInstalacion.scope="col";

    var textoEncabezadoIdEquipo = document.createTextNode("ID equipo"); 
    var textoEncabezadoIdSoftware = document.createTextNode("ID software"); 
    var textoEncabezadoFechaInstalacion = document.createTextNode("Fecha Instalacion"); 

    thEncabezadoIdEquipo.appendChild(textoEncabezadoIdEquipo);
    thEncabezadoIdSoftware.appendChild(textoEncabezadoIdSoftware);
    thEncabezadoFechaInstalacion.appendChild(textoEncabezadoFechaInstalacion);

    trEncabezado.appendChild(thEncabezadoIdEquipo);
    trEncabezado.appendChild(thEncabezadoIdSoftware);
    trEncabezado.appendChild(thEncabezadoFechaInstalacion);

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

        celda1.scope="row";
        celda2.scope="row";
        celda3.scope="row";

        var textoCeldaIdEquipo = document.createTextNode(element[0]);
        var textoCeldaIdSoftware = document.createTextNode(element[1]); 
        var textoCeldaFechaInstalacion = document.createTextNode(element[2]);

        celda1.appendChild(textoCeldaIdEquipo);
        celda2.appendChild(textoCeldaIdSoftware);
        celda3.appendChild(textoCeldaFechaInstalacion);

        tr.appendChild(celda1);
        tr.appendChild(celda2);
        tr.appendChild(celda3);

        tblBody.appendChild(tr);
    });

    oTabla.appendChild(tblBody);
    divListados.appendChild(oTabla);
}

document.querySelector("#mnuListaAsignaciones").addEventListener("click", getListaAsignaciones, false);