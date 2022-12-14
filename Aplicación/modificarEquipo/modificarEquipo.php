<?php
    // Configuracion BASE DE DATOS MYSQL
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    // Recojo los datos de entrada
    $datosJSON = $_GET["datosEquipo"];

    // Decodifico los datos enviados
    $equipo = json_decode($datosJSON);

    // Creamos la conexion al servidor.
    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    // Hago el update con los datos recibidos
    $sql = "UPDATE equipo SET ip='$equipo->ip', mac='$equipo->mac', procesador='$equipo->procesador', ram='$equipo->ram', almacenamiento='$equipo->almacenamiento', servidor='$equipo->servidor', anotaciones='$equipo->anotaciones', fkusuario='$equipo->idUsuario', fkSede='$equipo->idSede' where id=$equipo->id";
    $resultado = mysqli_query($conexion,$sql);

    // Muestro el mensaje de respuesta
    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Update de equipo realizada"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de update de equipo: ".mysqli_error($conexion);
    }
    
    // Codifico los datos
    echo json_encode($respuesta);

    // Cierro la conexion
    mysqli_close($conexion);
?>