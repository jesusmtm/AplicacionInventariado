$(document).ready(function() {
    //Escondemos todas las vistas innecesarias al cargar la pagina
    document.getElementById("botones2").style.display = "none";
    document.getElementById("formularios").style.display = "none";
    document.getElementById("listados").style.display = "none";

    //Asignamos los eventos a los botones de inicio
    document.querySelector("#botonUsuario").addEventListener("click",abrirOpcionesUsuario);
    document.querySelector("#botonEquipo").addEventListener("click",abrirOpcionesEquipo);
    document.querySelector("#botonSoftware").addEventListener("click",abrirOpcionesSoftware);
    document.querySelector("#botonDepartamento").addEventListener("click",abrirOpcionesDepartamento);
    document.querySelector("#botonSede").addEventListener("click",abrirOpcionesSede);
    document.querySelector("#botonInstalacion").addEventListener("click",abrirOpcionesInstalacion);

    // Carga dinámica de formularios
    document.querySelector("#mnuAltaUsuario").addEventListener("click",abrirAltaUsuario);
    document.querySelector("#mnuModificarUsuario").addEventListener("click",abrirModificarUsuario);
    document.querySelector("#mnuAltaEquipo").addEventListener("click",abrirAltaEquipo);
    document.querySelector("#mnuModificarEquipo").addEventListener("click",abrirModificarEquipo);
    document.querySelector("#mnuAltaSoftware").addEventListener("click",abrirAltaSoftware);
    document.querySelector("#mnuBorrarSoftware").addEventListener("click",abrirBorrarSoftware);
    document.querySelector("#mnuInstalarSoftware").addEventListener("click",abrirInstalarSoftware);
    document.querySelector("#mnuDesinstalarSoftware").addEventListener("click",abrirDesinstalarSoftware);    
    document.querySelector("#mnuAltaSede").addEventListener("click",abrirAltaSede);
    document.querySelector("#mnuBorrarSede").addEventListener("click",abrirBorrarSede);
    document.querySelector("#mnuAltaDepartamento").addEventListener("click",abrirAltaDepartamento);
    document.querySelector("#mnuBorrarDepartamento").addEventListener("click",abrirBorrarDepartamento);
    document.querySelector("#mnuListaXML").addEventListener("click",abrirListaXML);
    document.querySelector("#mnuListaUsuarios").addEventListener("click",abrirListaUsuarios);
    document.querySelector("#mnuListaEquipos").addEventListener("click",abrirListaEquipos);
    document.querySelector("#mnuListaSoftware").addEventListener("click",abrirListaSoftware);
    document.querySelector("#mnuListaInstalaciones").addEventListener("click",abrirListaInstalaciones);
    document.querySelector("#mnuListaSedes").addEventListener("click",abrirListaSedes);
    document.querySelector("#mnuListaDepartamentos").addEventListener("click",abrirListaDepartamentos);
    document.querySelector("#mnuListaUsuariosSede").addEventListener("click",abrirListaUsuariosSede);
    document.querySelector("#mnuListaEquiposSoftware").addEventListener("click",abrirListaEquiposSoftware);
});

function abrirOpcionesUsuario(datos){
    //Se esconde el main que contiene los botones principales
    document.getElementById("botones").style.display = "none";
    //Se muestra el div que contiene los botones secundarios
    document.getElementById("botones2").style.display = "flex";

    let botonAlta = document.createElement("button");
    let botonModificacion = document.createElement("button");
    let botonListado = document.createElement("button");

    botonAlta.classList.add("btnGrande");
    botonModificacion.classList.add("btnGrande");
    botonListado.classList.add("btnGrande");

    botonAlta.setAttribute("id","botonAltaUsuario");
    botonModificacion.setAttribute("id","botonModificarUsuario");
    botonListado.setAttribute("id","botonListarUsuario");

    let textoBotonAlta = document.createTextNode("Alta");
    let textoBotonModificar = document.createTextNode("Modificar/Borrar"); 
    let textoBotonListado = document.createTextNode("Listado");

    botonAlta.appendChild(textoBotonAlta);
    botonModificacion.appendChild(textoBotonModificar);
    botonListado.appendChild(textoBotonListado);

    botones2.appendChild(botonAlta);
    botones2.appendChild(botonModificacion);
    botones2.appendChild(botonListado);

    document.querySelector("#botonAltaUsuario").addEventListener("click",abrirAltaUsuario);
    document.querySelector("#botonModificarUsuario").addEventListener("click",abrirModificarUsuario);
    document.querySelector("#botonListarUsuario").addEventListener("click",abrirListaUsuarios);
}

function abrirOpcionesEquipo(datos){
    //Se esconde el main que contiene los botones principales
    document.getElementById("botones").style.display = "none";
    //Se muestra el div que contiene los botones secundarios
    document.getElementById("botones2").style.display = "flex";

    let botonAlta = document.createElement("button");
    let botonModificacion = document.createElement("button");
    let botonListado = document.createElement("button");

    botonAlta.classList.add("btnGrande");
    botonModificacion.classList.add("btnGrande");
    botonListado.classList.add("btnGrande");

    botonAlta.setAttribute("id","botonAltaEquipo");
    botonModificacion.setAttribute("id","botonModificarEquipo");
    botonListado.setAttribute("id","botonListarEquipo");

    let textoBotonAlta = document.createTextNode("Alta");
    let textoBotonModificar = document.createTextNode("Modificar/Borrar"); 
    let textoBotonListado = document.createTextNode("Listado");

    botonAlta.appendChild(textoBotonAlta);
    botonModificacion.appendChild(textoBotonModificar);
    botonListado.appendChild(textoBotonListado);

    botones2.appendChild(botonAlta);
    botones2.appendChild(botonModificacion);
    botones2.appendChild(botonListado);

    document.querySelector("#botonAltaEquipo").addEventListener("click",abrirAltaEquipo);
    document.querySelector("#botonModificarEquipo").addEventListener("click",abrirModificarEquipo);
    document.querySelector("#botonListarEquipo").addEventListener("click",abrirListaEquipos);
}

function abrirOpcionesSoftware(datos){
    //Se esconde el main que contiene los botones principales
    document.getElementById("botones").style.display = "none";
    //Se muestra el div que contiene los botones secundarios
    document.getElementById("botones2").style.display = "flex";

    let botonAlta = document.createElement("button");
    let botonModificacion = document.createElement("button");
    let botonListado = document.createElement("button");

    botonAlta.classList.add("btnGrande");
    botonModificacion.classList.add("btnGrande");
    botonListado.classList.add("btnGrande");

    botonAlta.setAttribute("id","botonAltaSoftware");
    botonModificacion.setAttribute("id","botonBorrarSoftware");
    botonListado.setAttribute("id","botonListarSoftware");

    let textoBotonAlta = document.createTextNode("Alta");
    let textoBotonModificar = document.createTextNode("Borrar"); 
    let textoBotonListado = document.createTextNode("Listado");

    botonAlta.appendChild(textoBotonAlta);
    botonModificacion.appendChild(textoBotonModificar);
    botonListado.appendChild(textoBotonListado);

    botones2.appendChild(botonAlta);
    botones2.appendChild(botonModificacion);
    botones2.appendChild(botonListado);

    document.querySelector("#botonAltaSoftware").addEventListener("click",abrirAltaSoftware);
    document.querySelector("#botonBorrarSoftware").addEventListener("click",abrirBorrarSoftware);
    document.querySelector("#botonListarSoftware").addEventListener("click",abrirListaSoftware);
}

function abrirOpcionesDepartamento(datos){
    //Se esconde el main que contiene los botones principales
    document.getElementById("botones").style.display = "none";
    //Se muestra el div que contiene los botones secundarios
    document.getElementById("botones2").style.display = "flex";

    let botonAlta = document.createElement("button");
    let botonModificacion = document.createElement("button");
    let botonListado = document.createElement("button");

    botonAlta.classList.add("btnGrande");
    botonModificacion.classList.add("btnGrande");
    botonListado.classList.add("btnGrande");

    botonAlta.setAttribute("id","botonAltaDepartamento");
    botonModificacion.setAttribute("id","botonBorrarDepartamento");
    botonListado.setAttribute("id","botonListarDepartamento");

    let textoBotonAlta = document.createTextNode("Alta");
    let textoBotonModificar = document.createTextNode("Borrar"); 
    let textoBotonListado = document.createTextNode("Listado");

    botonAlta.appendChild(textoBotonAlta);
    botonModificacion.appendChild(textoBotonModificar);
    botonListado.appendChild(textoBotonListado);

    botones2.appendChild(botonAlta);
    botones2.appendChild(botonModificacion);
    botones2.appendChild(botonListado);

    document.querySelector("#botonAltaDepartamento").addEventListener("click",abrirAltaDepartamento);
    document.querySelector("#botonBorrarDepartamento").addEventListener("click",abrirBorrarDepartamento);
    document.querySelector("#botonListarDepartamento").addEventListener("click",abrirListaDepartamentos);
}

function abrirOpcionesSede(datos){
    //Se esconde el main que contiene los botones principales
    document.getElementById("botones").style.display = "none";
    //Se muestra el div que contiene los botones secundarios
    document.getElementById("botones2").style.display = "flex";

    let botonAlta = document.createElement("button");
    let botonModificacion = document.createElement("button");
    let botonListado = document.createElement("button");

    botonAlta.classList.add("btnGrande");
    botonModificacion.classList.add("btnGrande");
    botonListado.classList.add("btnGrande");

    botonAlta.setAttribute("id","botonAltaSede");
    botonModificacion.setAttribute("id","botonBorrarSede");
    botonListado.setAttribute("id","botonListarSede");

    let textoBotonAlta = document.createTextNode("Alta");
    let textoBotonModificar = document.createTextNode("Borrar"); 
    let textoBotonListado = document.createTextNode("Listado");

    botonAlta.appendChild(textoBotonAlta);
    botonModificacion.appendChild(textoBotonModificar);
    botonListado.appendChild(textoBotonListado);

    botones2.appendChild(botonAlta);
    botones2.appendChild(botonModificacion);
    botones2.appendChild(botonListado);

    document.querySelector("#botonAltaSede").addEventListener("click",abrirAltaSede);
    document.querySelector("#botonBorrarSede").addEventListener("click",abrirBorrarSede);
    document.querySelector("#botonListarSede").addEventListener("click",abrirListaSedes);
}

function abrirOpcionesInstalacion(datos){
    //Se esconde el main que contiene los botones principales
    document.getElementById("botones").style.display = "none";
    //Se muestra el div que contiene los botones secundarios
    document.getElementById("botones2").style.display = "flex";

    let botonAlta = document.createElement("button");
    let botonModificacion = document.createElement("button");
    let botonListado = document.createElement("button");

    botonAlta.classList.add("btnGrande");
    botonModificacion.classList.add("btnGrande");
    botonListado.classList.add("btnGrande");

    botonAlta.setAttribute("id","botonAltaInstalacion");
    botonModificacion.setAttribute("id","botonBorrarInstalacion");
    botonListado.setAttribute("id","botonListarInstalacion");

    let textoBotonAlta = document.createTextNode("Alta");
    let textoBotonModificar = document.createTextNode("Borrar"); 
    let textoBotonListado = document.createTextNode("Listado");

    botonAlta.appendChild(textoBotonAlta);
    botonModificacion.appendChild(textoBotonModificar);
    botonListado.appendChild(textoBotonListado);

    botones2.appendChild(botonAlta);
    botones2.appendChild(botonModificacion);
    botones2.appendChild(botonListado);

    document.querySelector("#botonAltaInstalacion").addEventListener("click",abrirInstalarSoftware);
    document.querySelector("#botonBorrarInstalacion").addEventListener("click",abrirDesinstalarSoftware);
    document.querySelector("#botonListarInstalacion").addEventListener("click",abrirListaInstalaciones);
}

function abrirAltaUsuario(datos) {
    //Se esconde el div de listados
    document.getElementById("listados").style.display = "none";
    // Se limpia el div de listados
    listados.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("formularios").style.display = "block";

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
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios y listados
    document.getElementById("formularios").style.display = "block";
    document.getElementById("listados").style.display = "block";
    // Se limpia el div de listados
    listados.innerHTML = "";
    
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
    //Se esconde el div de listados
    document.getElementById("listados").style.display = "none";
    // Se limpia el div de listados
    listados.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("formularios").style.display = "block";

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
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios y listados
    document.getElementById("formularios").style.display = "block";
    document.getElementById("listados").style.display = "block";
    // Se limpia el div de listados
    listados.innerHTML = "";
        
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
    //Se esconde el div de listados
    document.getElementById("listados").style.display = "none";
    // Se limpia el div de listados
    listados.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("formularios").style.display = "block";

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
    //Se esconde el div de listados
    document.getElementById("listados").style.display = "none";
    // Se limpia el div de listados
    listados.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("formularios").style.display = "block";

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

function abrirInstalarSoftware() {
    //Se esconde el div de listados
    document.getElementById("listados").style.display = "none";
    // Se limpia el div de listados
    listados.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("formularios").style.display = "block";

    // Oculto todos los formularios menos este
    $("form:not('#frmInstalarSoftware')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmInstalarSoftware').size() == 0) {
    if (document.querySelector("#frmInstalarSoftware") == null){
        $("<div>").appendTo('#formularios').load("instalarSoftware/instalarSoftware.html",
            function() {
                $.getScript("instalarSoftware/instalarSoftware.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmInstalarSoftware').parent().show("normal");
    }
}

function abrirDesinstalarSoftware() {
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios y listados
    document.getElementById("formularios").style.display = "block";
    document.getElementById("listados").style.display = "block";
    // Se limpia el div de listados
    listados.innerHTML = "";

    // Oculto todos los formularios menos este
    $("form:not('#frmDesinstalarSoftware')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmDesinstalarSoftware').size() == 0) {
    if (document.querySelector("#frmDesinstalarSoftware") == null){
        $("<div>").appendTo('#formularios').load("desinstalarSoftware/desinstalarSoftware.html",
            function() {
                $.getScript("desinstalarSoftware/desinstalarSoftware.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmDesinstalarSoftware').parent().show("normal");
    }
}

function abrirAltaSede() {
    //Se esconde el div de listados
    document.getElementById("listados").style.display = "none";
    // Se limpia el div de listados
    listados.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("formularios").style.display = "block";

    // Oculto todos los formularios menos este
    $("form:not('#frmAltaSede')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmAltaSede').size() == 0) {
    if (document.querySelector("#frmAltaSede") == null){
        $("<div>").appendTo('#formularios').load("altaSede/altaSede.html",
            function() {
                $.getScript("altaSede/altaSede.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaSede').parent().show("normal");
    }
}

function abrirBorrarSede() {
    //Se esconde el div de listados
    document.getElementById("listados").style.display = "none";
    // Se limpia el div de listados
    listados.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("formularios").style.display = "block";

    // Oculto todos los formularios menos este
    $("form:not('#frmBorrarSede')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmBorrarSede').size() == 0) {
    if (document.querySelector("#frmBorrarSede") == null){
        $("<div>").appendTo('#formularios').load("borrarSede/borrarSede.html",
            function() {
                $.getScript("borrarSede/borrarSede.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmBorrarSede').parent().show("normal");
    }
}

function abrirAltaDepartamento() {
    //Se esconde el div de listados
    document.getElementById("listados").style.display = "none";
    // Se limpia el div de listados
    listados.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("formularios").style.display = "block";

    // Oculto todos los formularios menos este
    $("form:not('#frmAltaDepartamento')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmAltaDepartamento').size() == 0) {
    if (document.querySelector("#frmAltaDepartamento") == null){
        $("<div>").appendTo('#formularios').load("altaDepartamento/altaDepartamento.html",
            function() {
                $.getScript("altaDepartamento/altaDepartamento.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaDepartamento').parent().show("normal");
    }
}

function abrirBorrarDepartamento() {
    //Se esconde el div de listados
    document.getElementById("listados").style.display = "none";
    // Se limpia el div de listados
    listados.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("formularios").style.display = "block";

    // Oculto todos los formularios menos este
    $("form:not('#frmBorrarDepartamento')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmBorrarDepartamento').size() == 0) {
    if (document.querySelector("#frmBorrarDepartamento") == null){
        $("<div>").appendTo('#formularios').load("borrarDepartamento/borrarDepartamento.html",
            function() {
                $.getScript("borrarDepartamento/borrarDepartamento.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmBorrarDepartamento').parent().show("normal");
    }
}

function abrirListaXML(){
    //Se esconde el div de formularios
    document.getElementById("formularios").style.display = "none";
    // Se limpia el div de listados y formularios
    listados.innerHTML = "";
    formularios.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("listados").style.display = "block";

    $.getScript("listadoXML/listadoXML.js");
}

function abrirListaUsuarios() {
    //Se esconde el div de formularios
    document.getElementById("formularios").style.display = "none";
    // Se limpia el div de listados y formularios
    listados.innerHTML = "";
    formularios.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("listados").style.display = "block";

    $.getScript("listadoUsuarios/listadoUsuarios.js");

}

function abrirListaEquipos() {
    //Se esconde el div de formularios
    document.getElementById("formularios").style.display = "none";
    // Se limpia el div de listados y formularios
    listados.innerHTML = "";
    formularios.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("listados").style.display = "block";

    $.getScript("listadoEquipos/listadoEquipos.js");
  
}

function abrirListaSoftware() {
    //Se esconde el div de formularios
    document.getElementById("formularios").style.display = "none";
    // Se limpia el div de listados y formularios
    listados.innerHTML = "";
    formularios.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("listados").style.display = "block";

    $.getScript("listadoSoftware/listadoSoftware.js");

}

function abrirListaInstalaciones() {
    //Se esconde el div de formularios
    document.getElementById("formularios").style.display = "none";
    // Se limpia el div de listados y formularios
    listados.innerHTML = "";
    formularios.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("listados").style.display = "block";

    $.getScript("listadoInstalar/listadoInstalar.js");

}

function abrirListaSedes() {
    //Se esconde el div de formularios
    document.getElementById("formularios").style.display = "none";
    // Se limpia el div de listados y formularios
    listados.innerHTML = "";
    formularios.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("listados").style.display = "block";

    $.getScript("listadoSedes/listadoSedes.js");

}

function abrirListaDepartamentos() {
    //Se esconde el div de formularios
    document.getElementById("formularios").style.display = "none";
    // Se limpia el div de listados y formularios
    listados.innerHTML = "";
    formularios.innerHTML = "";
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    //Mostrar div formularios
    document.getElementById("listados").style.display = "block";

    $.getScript("listadoDepartamentos/listadoDepartamentos.js");

}

function abrirListaUsuariosSede() {
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    // Se limpia el div de listados
    listados.innerHTML = "";

    //Mostrar div formularios y listados
    document.getElementById("formularios").style.display = "block";
    document.getElementById("listados").style.display = "block";
    
    // Oculto todos los formularios menos este
    $("form:not('#frmListadoUsuariosSede')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmListadoUsuariosSede').size() == 0) {
    if (document.querySelector("#frmListadoUsuariosSede") == null){
        $("<div>").appendTo('#formularios').load("listadoUsuariosSede/listadoUsuariosSede.html",
            function() {
                $.getScript("listadoUsuariosSede/listadoUsuariosSede.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmListadoUsuariosSede').parent().show("normal");
    }
}

function abrirListaEquiposSoftware() {
    //Se esconde el main y el div que contienen los botones
    document.getElementById("botones").style.display = "none";
    document.getElementById("botones2").style.display = "none";
    // Se limpia el div de listados
    listados.innerHTML = "";

    //Mostrar div formularios y listados
    document.getElementById("formularios").style.display = "block";
    document.getElementById("listados").style.display = "block";

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