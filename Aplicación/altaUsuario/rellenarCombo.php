<?php
// Configuracion BASE DE DATOS MYSQL
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    // Creamos la conexion al servidor.
    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    //Hago el insert con los datos recibidos
    $sql = "SELECT id,nombre from departamento order by id";
    $resultado = mysqli_query($conexion,$sql);

    // Lo convierto a array
    $datos=$resultado->fetch_all();

    // Codifico los datos
    echo json_encode ($datos);
    
    // Cierro la conexion
    mysqli_close($conexion);
?>