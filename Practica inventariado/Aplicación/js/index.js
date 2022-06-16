$(document).ready(function() {
    // Carga dinámica de formularios
    document.querySelector("#mnuAltaUsuario").addEventListener("click",abrirAltaUsuario);
    document.querySelector("#mnuModificarUsuario").addEventListener("click",abrirModificarUsuario);
    document.querySelector("#mnuAltaEquipo").addEventListener("click",abrirAltaEquipo);
    document.querySelector("#mnuModificarEquipo").addEventListener("click",abrirModificarEquipo);
    document.querySelector("#mnuAltaSoftware").addEventListener("click",abrirAltaSoftware);
    document.querySelector("#mnuBorrarSoftware").addEventListener("click",abrirBorrarSoftware);
    document.querySelector("#mnuAsignarSoftware").addEventListener("click",abrirAsignarSoftware);
    document.querySelector("#mnuDesasignarSoftware").addEventListener("click",abrirDesasignarSoftware);    
    document.querySelector("#mnuAltaUbicacion").addEventListener("click",abrirAltaUbicacion);
    document.querySelector("#mnuBorrarUbicacion").addEventListener("click",abrirBorrarUbicacion);
    document.querySelector("#mnuListaXML").addEventListener("click",abrirListaXML);
    document.querySelector("#mnuListaUsuarios").addEventListener("click",abrirListaUsuarios);
    document.querySelector("#mnuListaEquipos").addEventListener("click",abrirListaEquipos);
    document.querySelector("#mnuListaSoftware").addEventListener("click",abrirListaSoftware);
    document.querySelector("#mnuListaAsignaciones").addEventListener("click",abrirListaAsignaciones);
    document.querySelector("#mnuListaUbicaciones").addEventListener("click",abrirListaUbicaciones);
    document.querySelector("#mnuListaUsuariosUbicacion").addEventListener("click",abrirListaUsuariosUbicacion);
    document.querySelector("#mnuListaEquiposSoftware").addEventListener("click",abrirListaEquiposSoftware);
});

function abrirAltaUsuario(datos) {
    let divListados = document.getElementById('listados');
    let firstChild = listados.firstChild;
    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divListados.removeChild(firstChild);
    }
    // Oculto todos los formularios menos este
    $("form:not('#frmAltaUsuario')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmAltaUsuario').size() == 0) {
    if (document.querySelector("#frmAltaUsuario") == null){
        $("<div>").appendTo('#formularios').load("altaUsuario/altaUsuario.html",
            function() {
                $.getScript("altaUsuario/altaUsuario.js")
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaUsuario').parent().show("normal");
    }
}

function abrirModificarUsuario() {

    let divListados = document.getElementById('listados');
    let firstChild = listados.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divListados.removeChild(firstChild);  
    }
    
    // Oculto todos los formularios menos este
    $("form:not('#frmModificarUsuario')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmModificarUsuario').size() == 0) {
    if (document.querySelector("#frmModificarUsuario") == null){
        $("<div>").appendTo('#formularios').load("modificarUsuario/modificarUsuario.html",
            function() {
                $.getScript("modificarUsuario/modificarUsuario.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmModificarUsuario').parent().show("normal");
    }
}

function abrirAltaEquipo() {

    let divListados = document.getElementById('listados');
    let firstChild = listados.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divListados.removeChild(firstChild);
    }

    // Oculto todos los formularios menos este
    $("form:not('#frmAltaEquipo')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmAltaEquipo').size() == 0) {
    if (document.querySelector("#frmAltaEquipo") == null){
        $("<div>").appendTo('#formularios').load("altaEquipo/altaEquipo.html",
            function() {
                $.getScript("altaEquipo/altaEquipo.js");
        });
    } else {
        // Lo muestro si está oculto
        $('#frmAltaEquipo').parent().show("normal");
    }
}

function abrirModificarEquipo() {

    let divListados = document.getElementById('listados');
    let firstChild = listados.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divListados.removeChild(firstChild);
    }
        
    // Oculto todos los formularios menos este
    $("form:not('#frmModificarEquipo')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmModificarEquipo').size() == 0) {
    if (document.querySelector("#frmModificarEquipo") == null){
        $("<div>").appendTo('#formularios').load("modificarEquipo/modificarEquipo.html",
            function() {
                $.getScript("modificarEquipo/modificarEquipo.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmModificarEquipo').parent().show("normal");
    }
}

function abrirAltaSoftware() {

    let divListados = document.getElementById('listados');
    let firstChild = listados.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divListados.removeChild(firstChild);
    }

    // Oculto todos los formularios menos este
    $("form:not('#frmAltaSoftware')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmAltaSoftware').size() == 0) {
    if (document.querySelector("#frmAltaSoftware") == null){
        $("<div>").appendTo('#formularios').load("altaSoftware/altaSoftware.html",
            function() {
                $.getScript("altaSoftware/altaSoftware.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaSoftware').parent().show("normal");
    }
}

function abrirBorrarSoftware() {

    let divListados = document.getElementById('listados');
    let firstChild = listados.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divListados.removeChild(firstChild);
    }

    // Oculto todos los formularios menos este
    $("form:not('#frmBorrarSoftware')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmBorrarSoftware').size() == 0) {
    if (document.querySelector("#frmBorrarSoftware") == null){
        $("<div>").appendTo('#formularios').load("borrarSoftware/borrarSoftware.html",
            function() {
                $.getScript("borrarSoftware/borrarSoftware.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmBorrarSoftware').parent().show("normal");
    }
}

function abrirAsignarSoftware() {

    let divListados = document.getElementById('listados');
    let firstChild = listados.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divListados.removeChild(firstChild);
    }

    // Oculto todos los formularios menos este
    $("form:not('#frmAsignarSoftware')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmAsignarSoftware').size() == 0) {
    if (document.querySelector("#frmAsignarSoftware") == null){
        $("<div>").appendTo('#formularios').load("asignarSoftware/asignarSoftware.html",
            function() {
                $.getScript("asignarSoftware/asignarSoftware.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAsignarSoftware').parent().show("normal");
    }
}

function abrirDesasignarSoftware() {

    let divListados = document.getElementById('listados');
    let firstChild = listados.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divListados.removeChild(firstChild);
    }

    // Oculto todos los formularios menos este
    $("form:not('#frmDesasignarSoftware')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmDesasignarSoftware').size() == 0) {
    if (document.querySelector("#frmDesasignarSoftware") == null){
        $("<div>").appendTo('#formularios').load("desasignarSoftware/desasignarSoftware.html",
            function() {
                $.getScript("desasignarSoftware/desasignarSoftware.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmDesasignarSoftware').parent().show("normal");
    }
}

function abrirAltaUbicacion() {

    let divListados = document.getElementById('listados');
    let firstChild = listados.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divListados.removeChild(firstChild);
    }

    // Oculto todos los formularios menos este
    $("form:not('#frmAltaUbicacion')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmAltaUbicacion').size() == 0) {
    if (document.querySelector("#frmAltaUbicacion") == null){
        $("<div>").appendTo('#formularios').load("altaUbicacion/altaUbicacion.html",
            function() {
                $.getScript("altaUbicacion/altaUbicacion.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaUbicacion').parent().show("normal");
    }
}

function abrirBorrarUbicacion() {

    let divListados = document.getElementById('listados');
    let firstChild = listados.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divListados.removeChild(firstChild);
    }

    // Oculto todos los formularios menos este
    $("form:not('#frmBorrarUbicacion')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmBorrarUbicacion').size() == 0) {
    if (document.querySelector("#frmBorrarUbicacion") == null){
        $("<div>").appendTo('#formularios').load("borrarUbicacion/borrarUbicacion.html",
            function() {
                $.getScript("borrarUbicacion/borrarUbicacion.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmBorrarUbicacion').parent().show("normal");
    }
}

function abrirListaXML(){
    let divFormularios = document.getElementById('formularios');
    let firstChild = formularios.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divFormularios.removeChild(firstChild);
    }

    $.getScript("listadoXML/listadoXML.js");
}

function abrirListaUsuarios() {
    let divFormularios = document.getElementById('formularios');
    let firstChild = formularios.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divFormularios.removeChild(firstChild);
    }

    $.getScript("listadoUsuarios/listadoUsuarios.js");

}

function abrirListaEquipos() {
    let divFormularios = document.getElementById('formularios');
    let firstChild = formularios.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divFormularios.removeChild(firstChild);
    }

    $.getScript("listadoEquipos/listadoEquipos.js");
  
}

function abrirListaSoftware() {
    let divFormularios = document.getElementById('formularios');
    let firstChild = formularios.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divFormularios.removeChild(firstChild);
    }

    $.getScript("listadoSoftware/listadoSoftware.js");

}

function abrirListaAsignaciones() {
    let divFormularios = document.getElementById('formularios');
    let firstChild = formularios.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divFormularios.removeChild(firstChild);
    }

    $.getScript("listadoAsignaciones/listadoAsignaciones.js");

}

function abrirListaUbicaciones() {
    let divFormularios = document.getElementById('formularios');
    let firstChild = formularios.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divFormularios.removeChild(firstChild);
    }

    $.getScript("listadoUbicaciones/listadoUbicaciones.js");

}

function abrirListaUsuariosUbicacion() {

    let divListados = document.getElementById('listados');
    let firstChild = listados.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){
        console.log("hola");
        //Si lo hay, se limpia
        divListados.removeChild(firstChild);
    }
    
    // Oculto todos los formularios menos este
    $("form:not('#frmListadoUsuariosUbicacion')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmListadoUsuariosUbicacion').size() == 0) {
    if (document.querySelector("#frmListadoUsuariosUbicacion") == null){
        $("<div>").appendTo('#formularios').load("listadoUsuariosUbicacion/listadoUsuariosUbicacion.html",
            function() {
                $.getScript("listadoUsuariosUbicacion/listadoUsuariosUbicacion.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmListadoUsuariosUbicacion').parent().show("normal");
    }
}

function abrirListaEquiposSoftware() {

    let divListados = document.getElementById('listados');
    let firstChild = listados.firstChild;

    // Se comprueba si hay algun formulario cargado
    if(!(firstChild == null) || !(firstChild == undefined)){

        //Si lo hay, se limpia
        divListados.removeChild(firstChild);
    }

    // Oculto todos los formularios menos este
    $("form:not('#frmListadoEquiposSoftware')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmListadoEquiposSoftware').size() == 0) {
    if (document.querySelector("#frmListadoEquiposSoftware") == null){
        $("<div>").appendTo('#formularios').load("listadoEquiposSoftware/listadoEquiposSoftware.html",
            function() {
                $.getScript("listadoEquiposSoftware/listadoEquiposSoftware.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmListadoEquiposSoftware').parent().show("normal");
    }
}