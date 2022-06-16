"use strict"
//# sourceURL=listadoEquiposSoftware.js

document.querySelector("#btnAceptarListadoEquiposSoftware").addEventListener("click", validarListadoEquiposSoftware, false);

function validarListadoEquiposSoftware(){
    let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    let nombre = frmListadoEquiposSoftware.txtIdSoftware.value.trim();
    let oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(nombre) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            frmListadoEquiposSoftware.txtIdSoftware.focus();
            bValido = false;
        }
        frmListadoEquiposSoftware.txtIdSoftware.classList.add("error");
        sErrores += "El Id de software debe de estar relleno y solo contener numeros de hasta 9 cifras.\n";
    }
    else{
        frmListadoEquiposSoftware.txtIdSoftware.classList.remove("error");
    }

    if (bValido){
        mostrarListadoEquiposSoftware();
    }
    else{
        alert(sErrores);
    }
}

function mostrarListadoEquiposSoftware(oEvento){
    var nombre = {
        idSoftware: frmListadoEquiposSoftware.txtIdSoftware.value.trim(),
    }
    var sParametros = "datosListadoSoftware=" + JSON.stringify(nombre);
    $.get("listadoEquiposSoftware/listadoEquiposSoftware.php", sParametros, procesoRespuestaMostrarListadoEquiposSoftware, "json");
}
function procesoRespuestaMostrarListadoEquiposSoftware(oDatos, sStatus, oXHR){
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
    let thEncabezadoIdUsuario = document.createElement("th");
    let thEncabezadoIdUbicacion = document.createElement("th");
    let thEncabezadoIp = document.createElement("th");
    let thEncabezadoMac = document.createElement("th");
    let thEncabezadoProcesador = document.createElement("th");
    let thEncabezadoRam = document.createElement("th");
    let thEncabezadoAlmacenamiento = document.createElement("th");
    let thEncabezadoServidor = document.createElement("th");
    let thEncabezadoDescripcion = document.createElement("th");

    thEncabezadoIdEquipo.scope="col";
    thEncabezadoIdUsuario.scope="col";
    thEncabezadoIdUbicacion.scope="col";
    thEncabezadoIp.scope="col";
    thEncabezadoMac.scope="col";
    thEncabezadoProcesador.scope="col";
    thEncabezadoRam.scope="col";
    thEncabezadoAlmacenamiento.scope="col";
    thEncabezadoServidor.scope="col";
    thEncabezadoDescripcion.scope="col";

    var textoEncabezadoIdEquipo = document.createTextNode("ID Equipo");
    var textoEncabezadoIdUsuario = document.createTextNode("ID Usu"); 
    var textoEncabezadoIdUbicacion = document.createTextNode("ID Ubi"); 
    var textoEncabezadoIp = document.createTextNode("Ip"); 
    var textoEncabezadoMac = document.createTextNode("Mac");
    var textoEncabezadoProcesador = document.createTextNode("Procesador"); 
    var textoEncabezadoRam = document.createTextNode("Ram");
    var textoEncabezadoAlmacenamiento = document.createTextNode("Almacenamiento");
    var textoEncabezadoServidor = document.createTextNode("Servidor"); 
    var textoEncabezadoDescripcion = document.createTextNode("Descripcion");

    thEncabezadoIdEquipo.appendChild(textoEncabezadoIdEquipo);
    thEncabezadoIdUsuario.appendChild(textoEncabezadoIdUsuario);
    thEncabezadoIdUbicacion.appendChild(textoEncabezadoIdUbicacion);
    thEncabezadoIp.appendChild(textoEncabezadoIp);
    thEncabezadoMac.appendChild(textoEncabezadoMac);
    thEncabezadoProcesador.appendChild(textoEncabezadoProcesador);
    thEncabezadoRam.appendChild(textoEncabezadoRam);
    thEncabezadoAlmacenamiento.appendChild(textoEncabezadoAlmacenamiento);
    thEncabezadoServidor.appendChild(textoEncabezadoServidor);
    thEncabezadoDescripcion.appendChild(textoEncabezadoDescripcion);

    trEncabezado.appendChild(thEncabezadoIdEquipo);
    trEncabezado.appendChild(thEncabezadoIdUsuario);
    trEncabezado.appendChild(thEncabezadoIdUbicacion);
    trEncabezado.appendChild(thEncabezadoIp);
    trEncabezado.appendChild(thEncabezadoMac);
    trEncabezado.appendChild(thEncabezadoProcesador);
    trEncabezado.appendChild(thEncabezadoRam);
    trEncabezado.appendChild(thEncabezadoAlmacenamiento);
    trEncabezado.appendChild(thEncabezadoServidor);
    trEncabezado.appendChild(thEncabezadoDescripcion);

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
        var celda8 = document.createElement("td");
        var celda9 = document.createElement("td"); 
        var celda10 = document.createElement("td");

        celda1.scope="row";
        celda2.scope="row";
        celda3.scope="row";
        celda4.scope="row";
        celda5.scope="row";
        celda6.scope="row";
        celda7.scope="row";
        celda8.scope="row";
        celda9.scope="row";
        celda10.scope="row";

        var textoCeldaIdEquipo = document.createTextNode(element[0]);
        var textoCeldaIdUsuario = document.createTextNode(element[8]); 
        var textoCeldaIdUbicacion = document.createTextNode(element[9]); 
        var textoCeldaIp = document.createTextNode(element[1]); 
        var textoCeldaMac = document.createTextNode(element[2]);
        var textoCeldaProcesador = document.createTextNode(element[3]); 
        var textoCeldaRam = document.createTextNode(element[4]);
        var textoCeldaAlmacenamiento = document.createTextNode(element[5]);
        var textoCeldaServidor = document.createTextNode(element[6]); 
        var textoCeldaDescripcion = document.createTextNode(element[7]);

        celda1.appendChild(textoCeldaIdEquipo);
        celda2.appendChild(textoCeldaIdUsuario);
        celda3.appendChild(textoCeldaIdUbicacion);
        celda4.appendChild(textoCeldaIp);
        celda5.appendChild(textoCeldaMac);
        celda6.appendChild(textoCeldaProcesador);
        celda7.appendChild(textoCeldaRam);
        celda8.appendChild(textoCeldaAlmacenamiento);
        celda9.appendChild(textoCeldaServidor);
        celda10.appendChild(textoCeldaDescripcion);

        tr.appendChild(celda1);
        tr.appendChild(celda2);
        tr.appendChild(celda3);
        tr.appendChild(celda4);
        tr.appendChild(celda5);
        tr.appendChild(celda6);
        tr.appendChild(celda7);
        tr.appendChild(celda8);
        tr.appendChild(celda9);
        tr.appendChild(celda10);

        tblBody.appendChild(tr);
    });

    oTabla.appendChild(tblBody);
    divListados.appendChild(oTabla);
}