<?php
    header("Content-Type:application/json");
    include("conexion.php");
    $limit = $_GET['limit'];
    $filtro = isset($limit) && !empty($limit) ? " limit $limit " : "";

    $sql = "SELECT ID, user_login, user_email, user_registered FROM `{$config['tables']['usuarios']}` {$filtro}";
    $resultado = $mysqli->query($sql);
    //var_dump($resultado);

    $json = [];


    while ($fila = $resultado->fetch_assoc()) {
        //array_push($json,$fila);
        $json[] = $fila;
    }


    //print_r($json);

    echo json_encode($json);