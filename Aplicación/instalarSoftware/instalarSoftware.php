<?php
    // Configuracion BASE DE DATOS MYSQL
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    // Recojo los datos de entrada
    $datosJSON = $_GET["datosInstalacion"];

    //Decodifico los datos enviados
    $instalacion = json_decode($datosJSON);

    // Creamos la conexion al servidor.
    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    // Hago el delete con el valor recibido
    $sql = "INSERT INTO instala (idequipo, idsoftware, fechainstalacion) VALUES ('$instalacion->idEquipo','$instalacion->idSoftware','$instalacion->fechaInstalacion');";
    $resultado = mysqli_query($conexion,$sql);

    // Mando el mensaje de respuesta
    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Instalacion del software realizada"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de instalación : ".mysqli_error($conexion);
    }

    // Codifico los datos
    echo json_encode($respuesta);

    // Cierro la conexion
    mysqli_close($conexion);
?>