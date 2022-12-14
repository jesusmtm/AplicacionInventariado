<?php
    // Configuracion BASE DE DATOS MYSQL
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    // Recojo los datos de entrada
    $datosJSON = $_GET["idUsuario"];

    //Decodifico los datos enviados
    $usuario = json_decode($datosJSON);

    // Creamos la conexion al servidor.
    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    // Hago el delete con el valor recibido
    $sql = "DELETE from usuario where id=$usuario->id";
    $resultado = mysqli_query($conexion,$sql);

    // Mando el mensaje de respuesta
    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Borrado de usuario realizado"; 
    }
    else{
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de borrado de usuario: ".mysqli_error($conexion);
    }
    
    // Codifico los datos
    echo json_encode($respuesta);

    // Cierro la conexion
    mysqli_close($conexion);
?>