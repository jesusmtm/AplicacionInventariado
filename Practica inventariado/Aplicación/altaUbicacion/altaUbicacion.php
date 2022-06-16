<?php
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    $datosJSON = $_GET["datosUbicacion"];

    $ubicacion = json_decode($datosJSON);

    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");


    $sql = "INSERT INTO ubicacion (nombre, descripcion) VALUES ('$ubicacion->nombreUbicacion','$ubicacion->descripcionUbicacion');";
    $resultado = mysqli_query($conexion,$sql);

    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Alta de ubicacion realizada"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de alta de ubicacion: ".mysqli_error($conexion);
    }
    echo json_encode($respuesta);

    mysqli_close($conexion);
?>