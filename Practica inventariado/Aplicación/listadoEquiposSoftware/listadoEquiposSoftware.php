<?php
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    $datosJSON = $_GET["datosListadoSoftware"];

    $software = json_decode($datosJSON);

    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    $sql = "SELECT equipo.* FROM equipo inner join instala on equipo.id=instala.idequipo where instala.idsoftware='$software->idSoftware' order by equipo.id";
    $datos = $conexion->query($sql);

    $losDatos=$datos->fetch_all();

    echo json_encode ($losDatos);

    mysqli_close($conexion);
?>