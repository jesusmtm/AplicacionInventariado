"use strict"
//# sourceURL=ModificacionEquipo.js

let datosJSON;
var idEquipo;
$(document).ready(function() {
    document.querySelector("#btnBusquedaModificacionEquipo").addEventListener("click", validarModificacionEquipo, false);
});

function validarModificacionEquipo(){
    let bValido = true; // en principio el formulario es válido

    let id = frmModificarEquipo.txtIdModificarEquipo.value.trim();
    let ip = frmModificarEquipo.txtIpModificarEquipo.value.trim();
    
    if(id == "" && ip == ""){
        frmModificarEquipo.txtIpModificarEquipo.classList.add("error");
        frmModificarEquipo.txtIdModificarEquipo.classList.add("error");
        alert("Debe rellenar uno de los campo");
    }
    if(id.length>=1 && ip.length>=1){
        frmModificarEquipo.txtIpModificarEquipo.classList.add("error");
        frmModificarEquipo.txtIdModificarEquipo.classList.add("error");
        alert("Solo puede rellenar uno de los campos");
    }
    if (id.length>=1 && ip.length==0){
        let oExpReg = /^[0-9\s]{1,9}$/;

        if (oExpReg.test(id) == false) {
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmModificarEquipo.txtIdModificarEquipo.focus();
                bValido = false;
            }
      
            frmModificarEquipo.txtIdModificarEquipo.classList.add("error");
            alert("El id debe estar estar relleno y ser un numero de entre 1 y 9 cifras.");
        }
        else{
            frmModificarEquipo.txtIdModificarEquipo.classList.remove("error");
            busqueda();
        }
    }
    if (id.length==0 && ip.length>=1){
        let oExpReg = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

        if (oExpReg.test(ip) == false) {
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmModificarEquipo.txtIpModificarEquipo.focus();
                bValido = false;
            }
            frmModificarEquipo.txtIpModificarEquipo.classList.add("error");
            alert("La ip tiene que tener un formato correcto.");
        }
        else{
            frmModificarEquipo.txtIpModificarEquipo.classList.remove("error");
            busqueda();
        }
    }
}

function busqueda(oEvento){
    if(frmModificarEquipo.txtIdModificarEquipo.value.length>=1){
        var busqueda = {
            idEquipo: frmModificarEquipo.txtIdModificarEquipo.value.trim(),
        }
    var sParametros = "busquedaId=" + JSON.stringify(busqueda);
    $.get("modificarEquipo/busquedaEquipo.php", sParametros, procesoRespuestaBusquedaEquipo, "json");
    }
    else{
        var busqueda = {
            ipEquipo: frmModificarEquipo.txtIpModificarEquipo.value.trim(),
        }
    var sParametros = "busquedaIp=" + JSON.stringify(busqueda);
    $.get("modificarEquipo/busquedaEquipo.php", sParametros, procesoRespuestaBusquedaEquipo, "json");
    }
}

function procesoRespuestaBusquedaEquipo(datos, sStatus, oXHR){
    datosJSON=datos;
    let autonumMod = 0;
    let autonumBor = 0;

    listados.innerHTML = "";

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
    let thEncabezadoModificar = document.createElement("th");
    let thEncabezadoBorrado = document.createElement("th");

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
    thEncabezadoModificar.scope="col";
    thEncabezadoBorrado.scope="col";

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
    var textoEncabezadoModificar = document.createTextNode("Modificar");
    var textoEncabezadoBorrar = document.createTextNode("Borrar");

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
    thEncabezadoModificar.appendChild(textoEncabezadoModificar);
    thEncabezadoBorrado.appendChild(textoEncabezadoBorrar);

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
    trEncabezado.appendChild(thEncabezadoModificar);
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
        var celda6 = document.createElement("td"); 
        var celda7 = document.createElement("td");
        var celda8 = document.createElement("td");
        var celda9 = document.createElement("td"); 
        var celda10 = document.createElement("td");
        var celda11 = document.createElement("td");
        var celda12 = document.createElement("td");

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
        celda11.scope="row";
        celda12.scope="row";

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
        var botonModificacion = document.createElement("button");
        botonModificacion.type = "button";
        botonModificacion.textContent = "Modificar";
        botonModificacion.id = "botonModificarEquipo";
        botonModificacion.value=autonumMod++;
        var botonBorrado = document.createElement("button");
        botonBorrado.type = "button";
        botonBorrado.textContent = "Borrar";
        botonBorrado.id = "botonBorrarEquipo";
        botonBorrado.value=autonumBor++;

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
        celda11.appendChild(botonModificacion);
        celda12.appendChild(botonBorrado);

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
        tr.appendChild(celda11);
        tr.appendChild(celda12);

        tblBody.appendChild(tr);

        idEquipo = element[0];
    });

    oTabla.appendChild(tblBody);
    listados.appendChild(oTabla);

    let botonesModificar = document.querySelectorAll("#botonModificarEquipo");
    botonesModificar.forEach(element => {
        element.addEventListener("click", modificarEquipo, false);
    });

    let botonesBorrado = document.querySelectorAll("#botonBorrarEquipo");
    botonesBorrado.forEach(element => {
        element.addEventListener("click", borrarEquipo, false);
    });
}

function modificarEquipo(evento){
    abrirFormModificacion(datosJSON[evento.currentTarget.value]);
    frmModificarEquipo.txtIdModificarEquipo.value = "";
    frmModificarEquipo.txtIpModificarEquipo.value = "";
}

function abrirFormModificacion(datos){
    listados.innerHTML = "";

    // Oculto todos los formularios menos este
    $("form:not('#formModificarEquipo')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#formModificarEquipo').size() == 0) {
    if (document.querySelector("#formModificarEquipo") == null){
        $("<div>").appendTo('#formularios').load("modificarEquipo/formModificarEquipo.html", 
            function() {
                if(datos){
                    document.querySelector("#btnAceptarModificarEquipo").addEventListener("click", validarUpdate, false);
                    rellenarAltaEquipo(datos);
                }
            });

    } else {
        // Lo muestro si está oculto
        $('#formModificarEquipo').parent().show("normal");
        if(datos){
            document.querySelector("#btnAceptarModificarEquipo").addEventListener("click", validarUpdate, false);
            rellenarAltaEquipo(datos);
        }
    }
}

function rellenarAltaEquipo(datos){
    let idUsuarioEquipo = formModificarEquipo.txtIdUsuario.value = datos[8];
    let idSedeEquipo = formModificarEquipo.txtIdSede.value = datos[9];
    let ipEquipo = formModificarEquipo.txtIp.value = datos[1];
    let macEquipo = formModificarEquipo.txtMac.value = datos[2];
    let procesadorEquipo = formModificarEquipo.txtProcesador.value = datos[3];
    let ramEquipo = formModificarEquipo.txtRam.value = datos[4];
    let AlmacenamientoEquipo = formModificarEquipo.txtAlmacenamiento.value = datos[5];
    let servidorEquipo = formModificarEquipo.rbtServidor.value = datos[6];
    let descripcionEquipo = formModificarEquipo.txtDescripcionEquipo.value = datos[7];
}

function borrarEquipo(){
    var confirmacion = confirm("Seguro que desea borrar el equipo con id: "+idEquipo+".");
    if(confirmacion){
        var equipo = {
            id: idEquipo
        }
    
        var sParametros = "idEquipo=" + JSON.stringify(equipo);
        $.get("modificarEquipo/borrarEquipo.php", sParametros, procesoRespuestaBorrarEquipo, "json");
    }
    else{
        alert("No se borrara el equipo.");
    }
}

function procesoRespuestaBorrarEquipo(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
    }
}

function validarUpdate(){
    let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    let id = formModificarEquipo.txtIdUsuario.value.trim();
    let oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(id) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            formModificarEquipo.txtIdUsuario.focus();
            bValido = false;
        }
        formModificarEquipo.txtIdUsuario.classList.add("error");
        sErrores += "El id de usuario tiene que estar relleno y contener solo numeros.\n";
    }
    else{
        formModificarEquipo.txtIdUsuario.classList.remove("error");
    }

    id = formModificarEquipo.txtIdUbicacion.value.trim();
    oExpReg = /^[0-9\s]{1,9}$/;

    if (oExpReg.test(id) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            formModificarEquipo.txtIdUbicacion.focus();
            bValido = false;
        }
        formModificarEquipo.txtIdUbicacion.classList.add("error");
        sErrores += "El id de ubicacion tiene que estar relleno y contener solo numeros.\n";
    }
    else{
        formModificarEquipo.txtIdUbicacion.classList.remove("error");
    }
    
    let ip = formModificarEquipo.txtIp.value.trim();
    oExpReg = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (oExpReg.test(ip) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            formModificarEquipo.txtIp.focus();
            bValido = false;
        }
        formModificarEquipo.txtIp.classList.add("error");
        sErrores += "La ip tiene que tener un formato correcto.\n";
    }
    else{
        formModificarEquipo.txtIp.classList.remove("error");
    }
    

    let mac = formModificarEquipo.txtMac.value.trim();
    oExpReg = /^([0-9A-Fa-f]{2}[:-]){1}([0-9A-Fa-f]{2}[:-]){1}([0-9A-Fa-f]{2}[:-]){1}([0-9A-Fa-f]{2}[:-]){1}([0-9A-Fa-f]{2}[:-]){1}([0-9A-Fa-f]{2})$/;

    if (oExpReg.test(mac) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            formModificarEquipo.txtMac.focus();
            bValido = false;
        }
        formModificarEquipo.txtMac.classList.add("error");
        sErrores += "La mac tiene que tener un formato correcto.\n";
    }
    else{
        formModificarEquipo.txtMac.classList.remove("error");
    }

    let procesador = formModificarEquipo.txtProcesador.value.trim();
    oExpReg = /^[A-Z0-9\s]{1}[a-zA-Z0-9\s]{1,59}$/;

    if (oExpReg.test(procesador) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            formModificarEquipo.txtProcesador.focus();
            bValido = false;
        }
        formModificarEquipo.txtProcesador.classList.add("error");
        sErrores += "El modelo de procesador tiene que empezar por mayuscula y no exceder los 60 caracteres.\n";
    }
    else{
        formModificarEquipo.txtProcesador.classList.remove("error");
    }

    let ram = formModificarEquipo.txtRam.value.trim();
    oExpReg = /^[A-Z0-9\s]{1}[a-zA-Z0-9\s]{1,59}$/;
  
    if (oExpReg.test(ram) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            formModificarEquipo.txtRam.focus();
            bValido = false;
        }
  
        formModificarEquipo.txtRam.classList.add("error");
        sErrores += "El modelo de ram tiene que empezar por mayuscula y no exceder los 60 caracteres.\n";
    }
    else{
        formModificarEquipo.txtRam.classList.remove("error");
    }

    let almacenamiento = formModificarEquipo.txtAlmacenamiento.value.trim();
    oExpReg = /^[A-Z0-9\s]{1}[a-zA-Z0-9\s]{1,59}$/;
  
    if (oExpReg.test(almacenamiento) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            formModificarEquipo.txtAlmacenamiento.focus();
            bValido = false;
        }
  
        formModificarEquipo.txtAlmacenamiento.classList.add("error");
        sErrores += "El modelo de almacenamiento tiene que empezar por mayuscula y no exceder los 60 caracteres.\n";
    }
    else{
        formModificarEquipo.txtAlmacenamiento.classList.remove("error");
    }
    
    if(!document.querySelector('input[name="rbtServidor"]:checked')) {
        sErrores += "Tiene que marcar si es un servidor o no.";
        bValido = false;
    }

    if (bValido){
        update();
    }
    else{
        alert(sErrores);
    }
}

function update(){
    var equipo = {
        id: idEquipo,
        idUsuario: formModificarEquipo.txtIdUsuario.value.trim(),
        idSede: formModificarEquipo.txtIdSede.value.trim(),
        ip: formModificarEquipo.txtIp.value.trim(),
        mac: formModificarEquipo.txtMac.value.trim(),
        procesador: formModificarEquipo.txtProcesador.value.trim(),
        ram: formModificarEquipo.txtRam.value.trim(),
        almacenamiento: formModificarEquipo.txtAlmacenamiento.value.trim(),
        servidor: document.querySelector('input[name="rbtServidor"]:checked').value,
        anotaciones: formModificarEquipo.txtDescripcionEquipo.value.trim()
    }
    var sParametros = "datosEquipo=" + JSON.stringify(equipo);
    $.get("modificarEquipo/modificarEquipo.php", sParametros, procesoRespuestaUpdateEquipo, "json");
}

function procesoRespuestaUpdateEquipo(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        formModificarEquipo.reset();
        $('#formModificarEquipo').parent("div").hide("normal");
    }
}