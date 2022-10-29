<?php

    $config = include('configDB.php');
    $mysqli = new mysqli(
        $config['host'],
        $config['usuario'], 
        $config['credencial'],
        $config['bd']
    );
    


