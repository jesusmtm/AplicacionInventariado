<?php
$servidor  = "localhost";
$basedatos = "bdinventariado";
$usuario   = "root";
$password  = "";

extract($_POST);

$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion,"utf8");


$sql = "INSERT INTO software (nombre, descripcion) VALUES ('$nombreSoftware','$descripcionSoftware');";
$resultado = mysqli_query($conexion,$sql);

if ($resultado){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Alta de software realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta de software: ".mysqli_error($conexion);
}
mysqli_close($conexion);


echo json_encode($respuesta);
?>