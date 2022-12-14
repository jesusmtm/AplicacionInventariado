"use strict"
//# sourceURL=listadoXML.js

$(document).ready(function() {
    getListaXML();
});

function cargarXML(filename) {
    if (window.XMLHttpRequest){
        var xhttp = new XMLHttpRequest();
    } else {// code for IE5 and IE6
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);

    xhttp.send();

    return xhttp.responseXML;
}

function getListaXML(){
    var oXML = cargarXML("datos.xml");
    var oDatos = oXML.getElementsByTagName("Usuario");
    
    // Se se limpia el div de listados
    listados.innerHTML = "";

    let legend = document.createElement("legend");
    let titulo = document.createElement("h2");
    let textoTitulo = document.createTextNode("Listado XML");

    titulo.appendChild(textoTitulo);
    legend.appendChild(titulo);
    listados.appendChild(legend);

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

    var datos = Array.prototype.slice.call(oDatos);

    datos.forEach(element => {
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
        
        var textoCeldaId = document.createTextNode(element.getAttribute("id"));
        var textoCeldaNombre = document.createTextNode(element.getElementsByTagName("nombre")[0].textContent); 
        var textoCeldaApellido = document.createTextNode(element.getElementsByTagName("apellido")[0].textContent); 
        var textoCeldaCorreo = document.createTextNode(element.getElementsByTagName("correo")[0].textContent); 
        var textoCeldaTelefono = document.createTextNode(element.getElementsByTagName("telefono")[0].textContent);
        var textoCeldaDepartamento = document.createTextNode(element.getElementsByTagName("departamento")[0].textContent); 
        var textoCeldaAnotaciones = document.createTextNode(element.getElementsByTagName("anotaciones")[0].textContent);
        
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

document.querySelector("#mnuListaXML").addEventListener("click", getListaXML, false);