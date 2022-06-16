<?php
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    $datosJSON = $_GET["idEquipo"];

    $equipo = json_decode($datosJSON);

    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    $sql = "DELETE from equipo where id=$equipo->id";
    $resultado = mysqli_query($conexion,$sql);

    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Borrado de equipo realizado"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de borrado de equipo: ".mysqli_error($conexion);
    }
    echo json_encode($respuesta);

    mysqli_close($conexion);
?>