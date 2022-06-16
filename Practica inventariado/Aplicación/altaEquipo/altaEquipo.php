<?php
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $usuario = "root";
    $password = "";

    $datosJSON = $_GET["datosEquipo"];

    $equipo = json_decode($datosJSON);

    $conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");


    $sql = "INSERT INTO equipo (ip, mac, procesador, ram, almacenamiento, servidor, anotaciones, fkusuario, fkubicacion) VALUES ('$equipo->ip','$equipo->mac','$equipo->procesador','$equipo->ram','$equipo->almacenamiento','$equipo->servidor','$equipo->descripcion','$equipo->idUsuario','$equipo->idUbicacion');";
    $resultado = mysqli_query($conexion,$sql);

    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Alta de equipo realizada"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de alta de equipo: ".mysqli_error($conexion);
    }
    echo json_encode($respuesta);

    mysqli_close($conexion);
?>