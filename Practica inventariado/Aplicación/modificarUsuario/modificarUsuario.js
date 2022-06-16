"use strict"
//# sourceURL=ModificacionUsuario.js

let datosJSON;
var idUsuario;
document.querySelector("#btnBusquedaModificacionUsuario").addEventListener("click", validarModificacionUsuario, false);

function validarModificacionUsuario(){
    let bValido = true; // en principio el formulario es válido

    let id = frmModificarUsuario.txtIdModificarUsuario.value.trim();
    let nombre = frmModificarUsuario.txtNombreModificarUsuario.value.trim();
    
    if(id == "" && nombre == ""){
        frmModificarUsuario.txtNombreModificarUsuario.classList.add("error");
        frmModificarUsuario.txtIdModificarUsuario.classList.add("error");
        alert("Debe rellenar uno de los campo");
    }
    if(id.length>=1 && nombre.length>=1){
        frmModificarUsuario.txtNombreModificarUsuario.classList.add("error");
        frmModificarUsuario.txtIdModificarUsuario.classList.add("error");
        alert("Solo puede rellenar uno de los campos");
    }
    if (id.length>=1 && nombre.length==0){
        let oExpReg = /^[0-9\s]{1,9}$/;

        if (oExpReg.test(id) == false) {
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmModificarUsuario.txtIdModificarUsuario.focus();
                bValido = false;
            }
      
            frmModificarUsuario.txtIdModificarUsuario.classList.add("error");
            alert("El id debe estar estar relleno y ser un numero de entre 1 y 9 cifras.");
        }
        else{
            frmModificarUsuario.txtIdModificarUsuario.classList.remove("error");
            busqueda();
        }
    }
    if (id.length==0 && nombre.length>=1){
        let oExpReg = /^[A-Z\s]{1}[a-z\s]{1,29}$/;

        if (oExpReg.test(nombre) == false) {
            if (bValido == true) { // ==> Primer error detectado en este campo
                frmModificarUsuario.txtNombreModificarUsuario.focus();
                bValido = false;
            }
            frmModificarUsuario.txtNombreModificarUsuario.classList.add("error");
            alert("El nombre debe contener la primera letra mayuscula y tener entre 2 y 30 caracteres.");
        }
        else{
            frmModificarUsuario.txtNombreModificarUsuario.classList.remove("error");
            busqueda();
        }
    }
}

function busqueda(oEvento){
    if(frmModificarUsuario.txtIdModificarUsuario.value.length>=1){
        var busqueda = {
            idUsuario: frmModificarUsuario.txtIdModificarUsuario.value.trim(),
        }
    var sParametros = "busquedaId=" + JSON.stringify(busqueda);
    $.get("modificarUsuario/busquedaUsuario.php", sParametros, procesoRespuestaBusquedaUsuario, "json");
    }else{
        var busqueda = {
            nombreUsuario: frmModificarUsuario.txtNombreModificarUsuario.value.trim(),
        }
    var sParametros = "busquedaNombre=" + JSON.stringify(busqueda);
    $.get("modificarUsuario/busquedaUsuario.php", sParametros, procesoRespuestaBusquedaUsuario, "json");
    }
}

function procesoRespuestaBusquedaUsuario(datos, sStatus, oXHR){

    datosJSON=datos;
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
    let thEncabezadoApellido = document.createElement("th");
    let thEncabezadoCorreo = document.createElement("th");
    let thEncabezadoTelefono = document.createElement("th");
    let thEncabezadoDepartamento = document.createElement("th");
    let thEncabezadoAnotaciones = document.createElement("th");
    let thEncabezadoModificacion = document.createElement("th");

    thEncabezadoId.scope="col";
    thEncabezadoNombre.scope="col";
    thEncabezadoApellido.scope="col";
    thEncabezadoCorreo.scope="col";
    thEncabezadoTelefono.scope="col";
    thEncabezadoDepartamento.scope="col";
    thEncabezadoAnotaciones.scope="col";
    thEncabezadoModificacion.scope="col";

    var textoEncabezadoId = document.createTextNode("ID");
    var textoEncabezadoNombre = document.createTextNode("Nombre"); 
    var textoEncabezadoApellido = document.createTextNode("Apellido"); 
    var textoEncabezadoCorreo = document.createTextNode("Correo"); 
    var textoEncabezadoTelefono = document.createTextNode("Telefono");
    var textoEncabezadoDepartamento = document.createTextNode("Departamento"); 
    var textoEncabezadoAnotaciones = document.createTextNode("Anotaciones");
    var textoEncabezadoModificar = document.createTextNode("Modificar");

    thEncabezadoId.appendChild(textoEncabezadoId);
    thEncabezadoNombre.appendChild(textoEncabezadoNombre);
    thEncabezadoApellido.appendChild(textoEncabezadoApellido);
    thEncabezadoCorreo.appendChild(textoEncabezadoCorreo);
    thEncabezadoTelefono.appendChild(textoEncabezadoTelefono);
    thEncabezadoDepartamento.appendChild(textoEncabezadoDepartamento);
    thEncabezadoAnotaciones.appendChild(textoEncabezadoAnotaciones);
    thEncabezadoModificacion.appendChild(textoEncabezadoModificar);

    trEncabezado.appendChild(thEncabezadoId);
    trEncabezado.appendChild(thEncabezadoNombre);
    trEncabezado.appendChild(thEncabezadoApellido);
    trEncabezado.appendChild(thEncabezadoCorreo);
    trEncabezado.appendChild(thEncabezadoTelefono);
    trEncabezado.appendChild(thEncabezadoDepartamento);
    trEncabezado.appendChild(thEncabezadoAnotaciones);
    trEncabezado.appendChild(thEncabezadoModificacion);

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

        celda1.scope="row";
        celda2.scope="row";
        celda3.scope="row";
        celda4.scope="row";
        celda5.scope="row";
        celda6.scope="row";
        celda7.scope="row";
        celda8.scope="row";

        var textoCeldaId = document.createTextNode(element[0]);
        var textoCeldaNombre = document.createTextNode(element[1]); 
        var textoCeldaApellido = document.createTextNode(element[2]); 
        var textoCeldaCorreo = document.createTextNode(element[3]); 
        var textoCeldaTelefono = document.createTextNode(element[4]);
        var textoCeldaDepartamento = document.createTextNode(element[5]); 
        var textoCeldaAnotaciones = document.createTextNode(element[6]);
        var botonModificacion = document.createElement("button");
        botonModificacion.type = "button";
        botonModificacion.textContent = "Modificar";
        botonModificacion.className = "botonModificarUsuario";
        botonModificacion.value=autonum++;
        

        celda1.appendChild(textoCeldaId);
        celda2.appendChild(textoCeldaNombre);
        celda3.appendChild(textoCeldaApellido);
        celda4.appendChild(textoCeldaCorreo);
        celda5.appendChild(textoCeldaTelefono);
        celda6.appendChild(textoCeldaDepartamento);
        celda7.appendChild(textoCeldaAnotaciones);
        celda8.appendChild(botonModificacion);

        tr.appendChild(celda1);
        tr.appendChild(celda2);
        tr.appendChild(celda3);
        tr.appendChild(celda4);
        tr.appendChild(celda5);
        tr.appendChild(celda6);
        tr.appendChild(celda7);
        tr.appendChild(celda8);

        tblBody.appendChild(tr);

    });

    oTabla.appendChild(tblBody);
    divListados.appendChild(oTabla);

    let botonesModificar = document.querySelectorAll(".botonModificarUsuario");
    botonesModificar.forEach(element => {
        element.addEventListener("click", modificarUsuario, false);
    });
}

function modificarUsuario(evento){
    abrirFormModificacion(datosJSON[evento.currentTarget.value]);
    frmModificarUsuario.reset();
}

function abrirFormModificacion(datos){
    let divListados = document.getElementById('listados');
    let firstChild = listados.firstChild;
    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divListados.removeChild(firstChild);
    }
    // Oculto todos los formularios menos este
    $("form:not('#formModificarUsuario')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#formModificarUsuario').size() == 0) {
    if (document.querySelector("#formModificarUsuario") == null){
        $("<div>").appendTo('#formularios').load("modificarUsuario/formModificarUsuario.html", 
            function() {
                if(datos){
                    document.querySelector("#btnAceptarModificarUsuario").addEventListener("click", validarUpdate, false);
                    document.querySelector("#btnBorrarUsuario").addEventListener("click", borrar, false);
                    rellenarAltaUsuario(datos);
                }
            });

    } else {
        // Lo muestro si está oculto
        $('#formModificarUsuario').parent().show("normal");
        if(datos){
            document.querySelector("#btnAceptarModificarUsuario").addEventListener("click", validarUpdate, false);
            document.querySelector("#btnBorrarUsuario").addEventListener("click", borrar, false);
            rellenarAltaUsuario(datos);
        }
    }
}

function rellenarAltaUsuario(datos){
    idUsuario = datos[0];
    let nombreUsuario = formModificarUsuario.txtNombreUsuario.value = datos[1];
    let apellidoUsuario = formModificarUsuario.txtApellidosUsuario.value = datos[2];
    let correoUsuario = formModificarUsuario.txtCorreoUsuario.value = datos[3];
    let telefonoUsuario = formModificarUsuario.txtTelefonoUsuario.value = datos[4];
    let departamentoUsuario = formModificarUsuario.comboDepartamento.value = datos[5];
    let anotacionesUsuario = formModificarUsuario.txtAnotacionesUsuario.value = datos[6];
}

function borrar(){
    var confirmacion = confirm("Seguro que desea borrar el usuario con id: "+idUsuario+".");
    if(confirmacion){
        var usuario = {
            id: idUsuario
        }
    
        var sParametros = "idUsuario=" + JSON.stringify(usuario);
        $.get("modificarUsuario/borrarUsuario.php", sParametros, procesoRespuestaBorrarUsuario, "json");
    }
    else{
        alert("No se borrara el usuario.");
    }
}

function procesoRespuestaBorrarUsuario(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        formModificarUsuario.reset();
        $('#formModificarUsuario').parent("div").hide("normal");
    }
}

function validarUpdate(){
    let sErrores = "";
    let bValido = true; // en principio el formulario es válido

    let nombre = formModificarUsuario.txtNombreUsuario.value.trim();
    let oExpReg = /^[A-Z\s]{1}[a-zA-Z\s]{1,29}$/;

    if (oExpReg.test(nombre) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            formModificarUsuario.txtNombreUsuario.focus();
            bValido = false;
        }
        formModificarUsuario.txtNombreUsuario.classList.add("error");
        sErrores += "El nombre debe contener la primera letra mayuscula y tener entre 2 y 30 caracteres.\n";
    }
    else{
        formModificarUsuario.txtNombreUsuario.classList.remove("error");
    }
    

    let apellidos = formModificarUsuario.txtApellidosUsuario.value.trim();
    oExpReg = /^[A-Z\s]{1}[a-zA-Z\s]{1,59}$/;

    if (oExpReg.test(apellidos) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            formModificarUsuario.txtApellidosUsuario.focus();
            bValido = false;
        }
        formModificarUsuario.txtApellidosUsuario.classList.add("error");
        sErrores += "El apellido debe contener la primera letra mayuscula y tener entre 2 y 60 caracteres.\n";
    }
    else{
        formModificarUsuario.txtApellidosUsuario.classList.remove("error");
    }

    let correo = formModificarUsuario.txtCorreoUsuario.value.trim();
    //oExpReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    oExpReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (oExpReg.test(correo) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            formModificarUsuario.txtCorreoUsuario.focus();
            bValido = false;
        }
        formModificarUsuario.txtCorreoUsuario.classList.add("error");
        sErrores += "El correo tiene que tener el formato correcto.\n";
    }
    else{
        formModificarUsuario.txtCorreoUsuario.classList.remove("error");
    }

    let telefono = formModificarUsuario.txtTelefonoUsuario.value.trim();
    oExpReg = /^[6\s]{1}[0-9\s]{8}$/;
  
    if (oExpReg.test(telefono) == false) {
        if (bValido == true) { // ==> Primer error detectado en este campo
            formModificarUsuario.txtTelefonoUsuario.focus();
            bValido = false;
        }
  
        formModificarUsuario.txtTelefonoUsuario.classList.add("error");
        sErrores += "El telefono debe tener 9 numeros y empezar por 6.\n";
    }
    else{
        formModificarUsuario.txtTelefonoUsuario.classList.remove("error");
    }

    if (formModificarUsuario.comboDepartamento.value == "none"){
        bValido=false;
        sErrores += "Debe seleccionar un departamento.";
    }

    if (bValido){
        update();
    }
    else{
        alert(sErrores);
    }
}

function update(){
    var usuario = {
        id: idUsuario,
        nombreUsuario: formModificarUsuario.txtNombreUsuario.value.trim(),
        apellidosUsuario: formModificarUsuario.txtApellidosUsuario.value.trim(),
        correoUsuario: formModificarUsuario.txtCorreoUsuario.value.trim(),
        telefonoUsuario: formModificarUsuario.txtTelefonoUsuario.value.trim(),
        departamentoUsuario: formModificarUsuario.comboDepartamento.value,
        anotacionesUsuario: formModificarUsuario.txtAnotacionesUsuario.value.trim()
    }
    var sParametros = "datosUsuario=" + JSON.stringify(usuario);
    $.get("modificarUsuario/modificarUsuario.php", sParametros, procesoRespuestaUpdateUsuario, "json");
}
function procesoRespuestaUpdateUsuario(oDatos, sStatus, oXHR){
    if(oDatos.error){
        alert(oDatos.mensaje);
    }else{
        alert(oDatos.mensaje);
        formModificarUsuario.reset();
        $('#formModificarUsuario').parent("div").hide("normal");
    }
}