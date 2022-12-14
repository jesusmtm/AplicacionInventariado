"use strict"
//# sourceURL=frmBorrarSede.js

var idSede;
$(document).ready(function() {
    frmBorrarSede.reset();
    document.querySelector("#btnAceptarBusquedaSede").addEventListener("click", validarBajaSede, false);
});

function validarBajaSede(){
    let bValido = true; // en principio el formulario es válido

    let id = frmBorrarSede.txtIdBajaSede.value.trim();
    let nombre = frmBorrarSede.txtNombreBajaSede.value.trim();

    if(id == "" && nombre == ""){
        frmBorrarSede.txtIdBajaSede.classList.add("error");
        frmBorrarSede.txtNombreBajaSede.classList.add("error");
        alert("Debe rellenar uno de los campo");
    }
    if(id.length>=1 && nombre.length>=1){
        frmBorrarSede.txtNombreModificarUsuario.classList.add("error");
        frmBorrarSede.txtIdModificarUsuario.classList.add("error");
        alert("Solo puede rellenar uno de los campos");
    }
    if (id.length>=1 && nombre.length==0){
        let oExpReg = /^[0-9\s]{1,9}$/;

        if (oExpReg.test(id) == false) {
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmBorrarSede.txtIdBajaSede.focus();
                bValido = false;
            }
      
            frmBorrarSede.txtIdBajaSede.classList.add("error");
            alert("El id debe estar estar relleno y ser un numero de entre 1 y 9 cifras.");
        }
        else{
            frmBorrarSede.txtIdBajaSede.classList.remove("error");
            busqueda();
        }
    }
    if (id.length==0 && nombre.length>=1){
        let oExpReg = /^[A-Z\s]{1}[a-zA-Z\s]{1,29}$/;

        if (oExpReg.test(nombre) == false) {
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmBorrarSede.txtNombreBajaSede.focus();
                bValido = false;
            }
            frmBorrarSede.txtNombreBajaSede.classList.add("error");
            alert("El nombre debe contener la primera letra mayuscula y tener entre 2 y 30 caracteres.");
        }
        else{
            frmBorrarSede.txtNombreBajaSede.classList.remove("error");
            busqueda();
        }
    }
}

function busqueda(oEvento){
    if(frmBorrarSede.txtIdBajaSede.value.length>=1){
        var busqueda = {
            idSede: frmBorrarSede.txtIdBajaSede.value.trim(),
        }
    var sParametros = "busquedaId=" + JSON.stringify(busqueda);
    $.get("borrarSede/busquedaSede.php", sParametros, procesoRespuestaBusquedaSede, "json");
    }else{
        var busqueda = {
            nombreSede: frmBorrarSede.txtNombreBajaSede.value.trim(),
        }
    var sParametros = "busquedaNombre=" + JSON.stringify(busqueda);
    $.get("borrarSede/busquedaSede.php", sParametros, procesoRespuestaBusquedaSede, "json");
    }
}

function procesoRespuestaBusquedaSede(datos, textStatus, jqXHR){

    let autonum=0;
    listados.innerHTML = "";
        
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
        var botonBorrado = document.createElement("button");
        botonBorrado.type = "button";
        botonBorrado.textContent = "Borrar";
        botonBorrado.className = "botonBorrarSede";
        botonBorrado.value=autonum++;

        celda1.appendChild(textoCeldaId);
        celda2.appendChild(textoCeldaNombre);
        celda3.appendChild(textoCeldaDescripcion);
        celda4.appendChild(botonBorrado);

        tr.appendChild(celda1);
        tr.appendChild(celda2);
        tr.appendChild(celda3);
        tr.appendChild(celda4);

        tblBody.appendChild(tr);

        idSede=element[0];
    });

    oTabla.appendChild(tblBody);
    listados.appendChild(oTabla);

    let botonesBorrado = document.querySelectorAll(".botonBorrarSede");
    botonesBorrado.forEach(element => {
        element.addEventListener("click", borrarSede, false);
    });
}

function borrarSede(oEvento){
    var confirmacion = confirm("Seguro que desea borrar la Sede con id: "+idSede+".");
    if(confirmacion){
        var Sede = {
            id: idSede
        }
    
        var sParametros = "idSede=" + JSON.stringify(Sede);
        $.get("borrarSede/borrarSede.php", sParametros, procesoRespuestaBorrarSede, "json");
    }
    else{
        alert("No se borrara la Sede.");
    }
}

function procesoRespuestaBorrarSede(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        frmBorrarSede.reset();
        $('#frmBorrarSede').parent("div").hide("normal");
        listados.innerHTML = "";
    }
}