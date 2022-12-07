<?php
    // Configuracion BASE DE DATOS MYSQL
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $usuario = "root";
    $password = "";

    // Recojo los datos de entrada
    $datosJSON = $_GET["datosEquipo"];
    //Decodifico los datos enviados
    $equipo = json_decode($datosJSON);

    // Creamos la conexion al servidor.
    $conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    //Hago el insert con los datos recibidos
    $sql = "INSERT INTO equipo (ip, mac, procesador, ram, almacenamiento, servidor, anotaciones, fkusuario, fkubicacion) VALUES ('$equipo->ip','$equipo->mac','$equipo->procesador','$equipo->ram','$equipo->almacenamiento','$equipo->servidor','$equipo->descripcion','$equipo->idUsuario','$equipo->idUbicacion');";
    $resultado = mysqli_query($conexion,$sql);

    // Mando el mensaje de respuesta
    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Alta de equipo realizada"; 
    }
    else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de alta de equipo: ".mysqli_error($conexion);
    }

    // Codifico los datos
    echo json_encode($respuesta);

    // Cierro la conexion
    mysqli_close($conexion);
?>