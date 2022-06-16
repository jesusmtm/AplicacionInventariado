<?php
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    $datosJSON = $_GET["datosUsuario"];

    $usuario = json_decode($datosJSON);

    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    $sql = "INSERT INTO usuario (nombre, apellidos, correo, telefono, departamento, anotaciones) VALUES ('$usuario->nombreUsuario','$usuario->apellidosUsuario','$usuario->correoUsuario','$usuario->telefonoUsuario','$usuario->departamentoUsuario','$usuario->anotacionesUsuario');";
    $resultado = mysqli_query($conexion,$sql);

    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Alta de usuario realizada"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de alta de usuario: ".mysqli_error($conexion);
    }
    echo json_encode($respuesta);

    mysqli_close($conexion);
?>