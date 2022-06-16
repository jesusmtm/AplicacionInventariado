<?php
    // Configuracion BASE DE DATOS MYSQL
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    // Recojo los datos de entrada
    $datosJSON = $_GET["datosAsignacion"];
    //Decodifico los datos enviados
    $desinstala = json_decode($datosJSON);

    // Creamos la conexion al servidor.
    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    $sql = "DELETE FROM instala WHERE idequipo=$desinstala->idEq and idsoftware=$desinstala->idSof;";

    $resultado = mysqli_query($conexion,$sql);

    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Desasignacion realizada"; 
    }
    else{
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de desasignacion: ".mysqli_error($conexion);
    }
    
    echo json_encode($respuesta);

    mysqli_close($conexion);
?>