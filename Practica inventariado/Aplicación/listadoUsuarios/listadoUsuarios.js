"use strict"
//# sourceURL=listadoUsuarios.js


getListaUsuarios();

function getListaUsuarios(){
    $.get("listadoUsuarios/listadoUsuarios.php", null, procesoRespuesta, "html");
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
    divListados.appendChild(oTabla);
}

document.querySelector("#mnuListaUsuarios").addEventListener("click", getListaUsuarios, false);