"use strict"
//# sourceURL=frmBorrarUbicacion.js

var idUbicacion;
document.querySelector("#btnAceptarBusquedaUbicacion").addEventListener("click", validarBajaUbicacion, false);

function validarBajaUbicacion(){
    let bValido = true; // en principio el formulario es válido

    let id = frmBorrarUbicacion.txtIdBajaUbicacion.value.trim();
    let nombre = frmBorrarUbicacion.txtNombreBajaUbicacion.value.trim();

    if(id == "" && nombre == ""){
        frmBorrarUbicacion.txtIdBajaUbicacion.classList.add("error");
        frmBorrarUbicacion.txtNombreBajaUbicacion.classList.add("error");
        alert("Debe rellenar uno de los campo");
    }
    if(id.length>=1 && nombre.length>=1){
        frmBorrarUbicacion.txtNombreModificarUsuario.classList.add("error");
        frmBorrarUbicacion.txtIdModificarUsuario.classList.add("error");
        alert("Solo puede rellenar uno de los campos");
    }
    if (id.length>=1 && nombre.length==0){
        let oExpReg = /^[0-9\s]{1,9}$/;

        if (oExpReg.test(id) == false) {
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmBorrarUbicacion.txtIdBajaUbicacion.focus();
                bValido = false;
            }
      
            frmBorrarUbicacion.txtIdBajaUbicacion.classList.add("error");
            alert("El id debe estar estar relleno y ser un numero de entre 1 y 9 cifras.");
        }
        else{
            frmBorrarUbicacion.txtIdBajaUbicacion.classList.remove("error");
            busqueda();
        }
    }
    if (id.length==0 && nombre.length>=1){
        let oExpReg = /^[A-Z\s]{1}[a-zA-Z\s]{1,29}$/;

        if (oExpReg.test(nombre) == false) {
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmBorrarUbicacion.txtNombreBajaUbicacion.focus();
                bValido = false;
            }
            frmBorrarUbicacion.txtNombreBajaUbicacion.classList.add("error");
            alert("El nombre debe contener la primera letra mayuscula y tener entre 2 y 30 caracteres.");
        }
        else{
            frmBorrarUbicacion.txtNombreBajaUbicacion.classList.remove("error");
            busqueda();
        }
    }
}

function busqueda(oEvento){
    if(frmBorrarUbicacion.txtIdBajaUbicacion.value.length>=1){
        var busqueda = {
            idUbicacion: frmBorrarUbicacion.txtIdBajaUbicacion.value.trim(),
        }
    var sParametros = "busquedaId=" + JSON.stringify(busqueda);
    $.get("borrarUbicacion/busquedaUbicacion.php", sParametros, procesoRespuestaBusquedaUbicacion, "json");
    }else{
        var busqueda = {
            nombreUbicacion: frmBorrarUbicacion.txtNombreBajaUbicacion.value.trim(),
        }
    var sParametros = "busquedaNombre=" + JSON.stringify(busqueda);
    $.get("borrarUbicacion/busquedaUbicacion.php", sParametros, procesoRespuestaBusquedaUbicacion, "json");
    }
}

function procesoRespuestaBusquedaUbicacion(datos, textStatus, jqXHR){

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
    
    let thEncabezadoId = document.createElement("th");
    let thEncabezadoNombre = document.createElement("th");
    let thEncabezadoDescripcion = document.createElement("th");
    let thEncabezadoBorrado = document.createElement("th");

    thEncabezadoId.scope="col";
    thEncabezadoNombre.scope="col";
    thEncabezadoDescripcion.scope="col";
    thEncabezadoBorrado.scope="col";

    var textoEncabezadoId = document.createTextNode("ID");
    var textoEncabezadoNombre = document.createTextNode("Nombre"); 
    var textoEncabezadoDescripcion = document.createTextNode("Descripcion"); 
    var textoEncabezadoBorrado = document.createTextNode("Borrado"); 

    thEncabezadoId.appendChild(textoEncabezadoId);
    thEncabezadoNombre.appendChild(textoEncabezadoNombre);
    thEncabezadoDescripcion.appendChild(textoEncabezadoDescripcion);
    thEncabezadoBorrado.appendChild(textoEncabezadoBorrado);

    trEncabezado.appendChild(thEncabezadoId);
    trEncabezado.appendChild(thEncabezadoNombre);
    trEncabezado.appendChild(thEncabezadoDescripcion);
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

        var textoCeldaId = document.createTextNode(element[0]);
        var textoCeldaNombre = document.createTextNode(element[1]);
        var textoCeldaDescripcion = document.createTextNode(element[2]);
        var botonModificacion = document.createElement("button");
        botonModificacion.type = "button";
        botonModificacion.textContent = "Borrar";
        botonModificacion.className = "botonBorrarUbicacion";
        botonModificacion.value=autonum++;

        celda1.appendChild(textoCeldaId);
        celda2.appendChild(textoCeldaNombre);
        celda3.appendChild(textoCeldaDescripcion);
        celda4.appendChild(botonModificacion);

        tr.appendChild(celda1);
        tr.appendChild(celda2);
        tr.appendChild(celda3);
        tr.appendChild(celda4);

        tblBody.appendChild(tr);

        idUbicacion=element[0];
    });

    oTabla.appendChild(tblBody);
    divListados.appendChild(oTabla);

    let botonesModificar = document.querySelectorAll(".botonBorrarUbicacion");
    botonesModificar.forEach(element => {
        element.addEventListener("click", borrarUbicacion, false);
    });
}

function borrarUbicacion(oEvento){
    var confirmacion = confirm("Seguro que desea borrar la ubicacion con id: "+idUbicacion+".");
    if(confirmacion){
        var ubicacion = {
            id: idUbicacion
        }
    
        var sParametros = "idUbicacion=" + JSON.stringify(ubicacion);
        $.get("borrarUbicacion/borrarUbicacion.php", sParametros, procesoRespuestaBorrarUbicacion, "json");
    }
    else{
        alert("No se borrara la ubicacion.");
    }
}

function procesoRespuestaBorrarUbicacion(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmBorrarUbicacion.reset();
        $('#frmBorrarUbicacion').parent("div").hide("normal");
        let divListados = document.querySelector('#listados');
        let firstChild = listados.firstChild;

        // Se comprueba si hay algun listado cargado
        if(!(firstChild == null) || !(firstChild == undefined)){
        
            //Si lo hay, se limpia
            divListados.removeChild(firstChild);
        }
    }
}