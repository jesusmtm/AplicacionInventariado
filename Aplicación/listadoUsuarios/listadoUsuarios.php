<?php
    // Configuracion BASE DE DATOS MYSQL
    $servidor  = "localhost";
    $basedatos = "bdinventariado";
    $usuario   = "root";
    $password  = "";

    // Creamos la conexion al servidor.
    $conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
    mysqli_set_charset($conexion,"utf8");

    // Hago la consulta
    $sql = "SELECT usuario.*, departamento.nombre FROM usuario inner join departamento on usuario.departamento=departamento.id";
    $datos = $conexion->query($sql);

    // Los resultados de la consulta lo convierto en array
    $losDatos=$datos->fetch_all();

    // Codifico los datos
    echo json_encode ($losDatos);

    // Cierro la conexion
    mysqli_close($conexion);

?>