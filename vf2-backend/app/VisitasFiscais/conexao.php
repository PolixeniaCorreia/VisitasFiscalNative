<?php
    $dsn = "mysql:host=localhost;dbname=dbvisitas;charset=utf8";
    $usuario ="root";
    $senha ="D3vpr0c0n@";

    try{

        $PDO = new PDO($dsn, $usuario, $senha);
        

    }catch(PDOException$erro){
      


    }
?>