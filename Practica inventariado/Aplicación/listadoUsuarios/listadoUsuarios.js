"use strict"
//# sourceURL=listadoUsuarios.js

$(document).ready(function() {
    getListaUsuarios();
});

function getListaUsuarios(){
    $.get("listadoUsuarios/listadoUsuarios.php", null, procesoRespuesta, "html");
}

function procesoRespuesta(datos, textStatus, jqXHR){
    datos=JSON.parse(datos);

    // Se se limpia el div de listados
    listados.innerHTML = "";

    let legend = document.createElement("legend");
    let titulo = document.createElement("h2");
    let textoTitulo = document.createTextNode("Listado Usuarios");

    titulo.appendChild(textoTitulo);
    legend.appendChild(titulo);
    listados.appendChild(legend);

    let tbThead = document.createElement("thead");
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

    let textoEncabezadoId = document.createTextNode("ID");
    let textoEncabezadoNombre = document.createTextNode("Nombre"); 
    let textoEncabezadoApellido = document.createTextNode("Apellido"); 
    let textoEncabezadoCorreo = document.createTextNode("Correo"); 
    let textoEncabezadoTelefono = document.createTextNode("Telefono");
    let textoEncabezadoDepartamento = document.createTextNode("Departamento"); 
    let textoEncabezadoAnotaciones = document.createTextNode("Anotaciones");

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

    let oTabla = document.createElement("table");
    oTabla.className = "table table-dark";
    let tblBody = document.createElement("tbody");

    oTabla.appendChild(tblBody);
    tbThead.appendChild(trEncabezado);
    oTabla.appendChild(tbThead);

    datos.forEach(element => {
        let tr = document.createElement("tr");

        let celda1 = document.createElement("td"); 
        let celda2 = document.createElement("td"); 
        let celda3 = document.createElement("td"); 
        let celda4 = document.createElement("td"); 
        let celda5 = document.createElement("td");
        let celda6 = document.createElement("td"); 
        let celda7 = document.createElement("td");

        celda1.scope="row";
        celda2.scope="row";
        celda3.scope="row";
        celda4.scope="row";
        celda5.scope="row";
        celda6.scope="row";
        celda7.scope="row";

        let textoCeldaId = document.createTextNode(element[0]);
        let textoCeldaNombre = document.createTextNode(element[1]); 
        let textoCeldaApellido = document.createTextNode(element[2]); 
        let textoCeldaCorreo = document.createTextNode(element[3]); 
        let textoCeldaTelefono = document.createTextNode(element[4]);
        let textoCeldaDepartamento = document.createTextNode(element[7]); 
        let textoCeldaAnotaciones = document.createTextNode(element[6]);

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

document.querySelector("#mnuListaUsuarios").addEventListener("click", getListaUsuarios, false);