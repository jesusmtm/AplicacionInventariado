"use strict"

$(document).ready(function() {
    getListaSoftware();
});

function getListaSoftware(){
    $.get("listadoSoftware/listadoSoftware.php", null, procesoRespuesta, "html");
}

function procesoRespuesta(datos, textStatus, jqXHR){
    datos=JSON.parse(datos);

    // Se se limpia el div de listados
    listados.innerHTML = "";

    let legend = document.createElement("legend");
    let titulo = document.createElement("h2");
    let textoTitulo = document.createTextNode("Listado Sedes");

    titulo.appendChild(textoTitulo);
    legend.appendChild(titulo);
    listados.appendChild(legend);

    var tbThead = document.createElement("thead");
    let trEncabezado = document.createElement("tr");
    
    let thEncabezadoId = document.createElement("th");
    let thEncabezadoNombre = document.createElement("th");
    let thEncabezadoVersion = document.createElement("th");
    let thEncabezadoDescripcion = document.createElement("th");

    thEncabezadoId.scope="col";
    thEncabezadoNombre.scope="col";
    thEncabezadoVersion.scope="col";
    thEncabezadoDescripcion.scope="col";

    var textoEncabezadoId = document.createTextNode("ID");
    var textoEncabezadoNombre = document.createTextNode("Nombre");
    var textoEncabezadoVersion = document.createTextNode("Version");
    var textoEncabezadoDescripcion = document.createTextNode("Descripcion");

    thEncabezadoId.appendChild(textoEncabezadoId);
    thEncabezadoNombre.appendChild(textoEncabezadoNombre);
    thEncabezadoVersion.appendChild(textoEncabezadoVersion);
    thEncabezadoDescripcion.appendChild(textoEncabezadoDescripcion);

    trEncabezado.appendChild(thEncabezadoId);
    trEncabezado.appendChild(thEncabezadoNombre);
    trEncabezado.appendChild(thEncabezadoVersion);
    trEncabezado.appendChild(thEncabezadoDescripcion);

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

        var textoCeldaId = document.createTextNode(element[0]);
        var textoCeldaNombre = document.createTextNode(element[1]);
        var textoCeldaVersion = document.createTextNode(element[3]);
        var textoCeldaDescripcion = document.createTextNode(element[2]); 

        celda1.appendChild(textoCeldaId);
        celda2.appendChild(textoCeldaNombre);
        celda3.appendChild(textoCeldaVersion);
        celda4.appendChild(textoCeldaDescripcion);

        tr.appendChild(celda1);
        tr.appendChild(celda2);
        tr.appendChild(celda3);
        tr.appendChild(celda4);

        tblBody.appendChild(tr);
    });

    oTabla.appendChild(tblBody);
    listados.appendChild(oTabla);
}

document.querySelector("#mnuListaSoftware").addEventListener("click", getListaSoftware, false);