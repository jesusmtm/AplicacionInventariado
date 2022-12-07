<?php
    // Configuracion BASE DE DATOS MYSQL
    $servidor = "localhost";
    $basedatos = "bdinventariado";
    $user = "root";
    $password = "";

    // Recojo los datos de entrada
    $datosJSON = $_GET["datosListadoSede"];

    //Decodifico los datos enviados
    $sede = json_decode($datosJSON);

    // Creamos la conexion al servidor.
    $conexion = mysqli_connect($servidor, $user, $password, $basedatos) or die(mysqli_error($conexion));
    mysqli_query($conexion,"utf8");
    
    // Hago la consulta con el valor recibido
    $sql = "SELECT usuario.* FROM usuario inner join equipo on usuario.id=equipo.fkusuario where equipo.fkSede='$sede->idSede' order by usuario.id";
    $datos = $conexion->query($sql);

    // Los resultados de la consulta lo convierto en array
    $losDatos=$datos->fetch_all();

    // Codifico los datos
    echo json_encode ($losDatos);

    // Cierro la conexion
    mysqli_close($conexion);
?>