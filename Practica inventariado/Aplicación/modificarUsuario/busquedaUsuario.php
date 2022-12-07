<?php
    // Configuracion BASE DE DATOS MYSQL
    $servidor  = "localhost";
    $basedatos = "bdinventariado";
    $usuario   = "root";
    $password  = "";

    // Creamos la conexion al servidor.
    $conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
    mysqli_set_charset($conexion,"utf8");

    // Compruebo que variable es la enviada
    if(isset($_GET["busquedaId"])){
        // Recojo los datos de entrada
        $datosJSON = $_GET["busquedaId"];
        // Decodifico los datos enviados
        $busquedaId = json_decode($datosJSON);

        // Hago la consulta con la condicion de que sea el id enviado
        $sql = "SELECT * FROM usuario where id='$busquedaId->idUsuario'";
        $datos = $conexion->query($sql);
    }
    else{
        // Recojo los datos de entrada
        $datosJSON = $_GET["busquedaNombre"];
        // Decodifico los datos enviados
        $busquedaNombre = json_decode($datosJSON);

        // Hago la consulta con la condicion de que sea el nombre enviado
        $sql = "SELECT * FROM usuario where nombre='$busquedaNombre->nombreUsuario'";
        $datos = $conexion->query($sql);
    }

    // Lo convierto a array
    $losDatos=$datos->fetch_all();

    // Codifico los datos
    echo json_encode ($losDatos);

    // Cierro la conexion
    mysqli_close($conexion);

?>