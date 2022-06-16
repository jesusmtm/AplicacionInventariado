<?php
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    $datosJSON = $_GET["datosEquipo"];

    $equipo = json_decode($datosJSON);

    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    $sql = "UPDATE equipo SET ip='$equipo->ip', mac='$equipo->mac', procesador='$equipo->procesador', ram='$equipo->ram', almacenamiento='$equipo->almacenamiento', servidor='$equipo->servidor', anotaciones='$equipo->anotaciones', fkusuario='$equipo->idUsuario', fkubicacion='$equipo->idUbicacion' where id=$equipo->id";
    $resultado = mysqli_query($conexion,$sql);

    

    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Update de equipo realizada"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de update de equipo: ".mysqli_error($conexion);
    }
    echo json_encode($respuesta);

    mysqli_close($conexion);
?>