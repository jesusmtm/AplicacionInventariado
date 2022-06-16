<?php
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    $datosJSON = $_GET["datosUsuario"];

    $usuario = json_decode($datosJSON);

    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    $sql = "UPDATE usuario SET nombre='$usuario->nombreUsuario', apellidos='$usuario->apellidosUsuario', correo='$usuario->correoUsuario', telefono='$usuario->telefonoUsuario', departamento='$usuario->departamentoUsuario', anotaciones='$usuario->anotacionesUsuario' where id=$usuario->id";
    $resultado = mysqli_query($conexion,$sql);

    

    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Update de usuario realizada"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de update de usuario: ".mysqli_error($conexion);
    }
    echo json_encode($respuesta);

    mysqli_close($conexion);
?>