<?php
    $dsn = "mysql:host=localhost;dbname=dbvisitas;charset=utf8";
    $usuario ="root";
    $senha ="poli20";

    try{

        $PDO = new PDO($dsn, $usuario, $senha);
        

    }catch(PDOException$erro){
      


    }
?>