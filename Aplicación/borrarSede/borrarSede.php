<?php
    // Configuracion BASE DE DATOS MYSQL
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    // Recojo los datos de entrada
    $datosJSON = $_GET["idSede"];
    //Decodifico los datos enviados
    $borrar = json_decode($datosJSON);

    // Creamos la conexion al servidor.
    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    //Hago el delete con el valor indicado
    $sql = "DELETE FROM sede WHERE id=$borrar->id";
    $resultado = mysqli_query($conexion, $sql);

    // Mando el mensaje de respuesta
    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Baja de sede realizada"; 
    }
    else{
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de baja de sede: ".mysqli_error($conexion);
    }
    
    // Codifico los datos
    echo json_encode($respuesta);

    // Cierro la conexion
    mysqli_close($conexion);
?>