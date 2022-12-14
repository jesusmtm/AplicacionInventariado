<?php
    // Configuracion BASE DE DATOS MYSQL
    $servidor  = "localhost";
    $basedatos = "bdinventariado";
    $usuario   = "root";
    $password  = "";

    // Extraigo los datos del post
    extract($_POST);

    // Creamos la conexion al servidor.
    $conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    //Hago el insert con los datos recibidos
    $sql = "INSERT INTO software (nombre, descripcion) VALUES ('$nombreSoftware','$descripcionSoftware');";
    $resultado = mysqli_query($conexion,$sql);

    // Mando el mensaje de respuesta
    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Alta de software realizada"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de alta de software: ".mysqli_error($conexion);
    }

    // Codifico los datos
    echo json_encode($respuesta);

    // Cierro la conexion
    mysqli_close($conexion);
?>