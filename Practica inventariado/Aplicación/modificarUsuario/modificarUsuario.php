<?php
    // Configuracion BASE DE DATOS MYSQL
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    // Recojo los datos de entrada
    $datosJSON = $_GET["datosUsuario"];

    // Decodifico los datos enviados
    $usuario = json_decode($datosJSON);

    // Creamos la conexion al servidor.
    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    // Hago el update con los datos recibidos
    $sql = "UPDATE usuario SET nombre='$usuario->nombreUsuario', apellidos='$usuario->apellidosUsuario', correo='$usuario->correoUsuario', telefono='$usuario->telefonoUsuario', departamento='$usuario->departamentoUsuario', anotaciones='$usuario->anotacionesUsuario' where id=$usuario->id";
    $resultado = mysqli_query($conexion,$sql);

    // Muestro el mensaje de respuesta
    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Update de usuario realizada"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de update de usuario: ".mysqli_error($conexion);
    }

    // Codifico los datos
    echo json_encode($respuesta);

    // Cierro la conexion
    mysqli_close($conexion);
?>