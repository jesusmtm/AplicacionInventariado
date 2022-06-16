<?php
    $servidor  = "localhost";
    $basedatos = "bdinventariado";
    $usuario   = "root";
    $password  = "";

    $conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
    mysqli_set_charset($conexion,"utf8");

    if(isset($_GET["busquedaId"])){
        $datosJSON = $_GET["busquedaId"];
        $busquedaId = json_decode($datosJSON);

        $sql = "SELECT * FROM equipo where id='$busquedaId->idEquipo'";
        $datos = $conexion->query($sql);
    }
    else{
        $datosJSON = $_GET["busquedaIp"];
        $busquedaIp = json_decode($datosJSON);

        $sql = "SELECT * FROM equipo where ip='$busquedaIp->ipEquipo'";
        $datos = $conexion->query($sql);
    }

    $losDatos=$datos->fetch_all();

    echo json_encode ($losDatos);

    header('Content-Type: text/html');
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Fri, 05 Aug 1995 00:00:00 GMT');

    mysqli_close($conexion);

?>