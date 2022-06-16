<?php
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    $datosJSON = $_GET["datosListadoUbicacion"];

    $ubicacion = json_decode($datosJSON);

    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");
    
    $sql = "SELECT usuario.* FROM usuario inner join equipo on usuario.id=equipo.fkusuario where equipo.fkubicacion='$ubicacion->idUbicacion' order by usuario.id";
    $datos = $conexion->query($sql);

    $losDatos=$datos->fetch_all();

    echo json_encode ($losDatos);

    mysqli_close($conexion);
?>