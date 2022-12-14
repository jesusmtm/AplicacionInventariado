"use strict"
//# sourceURL=listadoInstalar.js

$(document).ready(function() {
    getListaInstalar();
});

function getListaInstalar(){
    $.get("listadoInstalar/listadoInstalar.php", null, procesoRespuesta, "html");
}

function procesoRespuesta(datos, textStatus, jqXHR){
    console.log(datos);
    datos=JSON.parse(datos);

    // Se limpia el div de listados
    listados.innerHTML = "";

    let legend = document.createElement("legend");
    let titulo = document.createElement("h2");
    let textoTitulo = document.createTextNode("Listado instalaciones");

    titulo.appendChild(textoTitulo);
    legend.appendChild(titulo);
    listados.appendChild(legend);
        
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
    listados.appendChild(oTabla);
}

document.querySelector("#mnuListaAsignaciones").addEventListener("click", getListaInstalar, false);