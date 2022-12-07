<?php
    // Configuracion BASE DE DATOS MYSQL
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    // Recojo los datos de entrada
    $datosJSON = $_GET["datosListadoSoftware"];

    //Decodifico los datos enviados
    $software = json_decode($datosJSON);

    // Creamos la conexion al servidor.
    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");

    // Hago la consulta con el valor indicado
    $sql = "SELECT equipo.* FROM equipo inner join instala on equipo.id=instala.idequipo where instala.idsoftware='$software->idSoftware' order by equipo.id";
    $datos = $conexion->query($sql);

    // Los resultados de la consulta lo convierto en array
    $losDatos=$datos->fetch_all();

    // Codifico los datos
    echo json_encode ($losDatos);

    // Cierro la conexion
    mysqli_close($conexion);
?>