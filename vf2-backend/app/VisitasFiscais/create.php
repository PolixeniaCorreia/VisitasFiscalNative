<?php

    include "conexao.php";

    $matricula = $_POST['matricula'];
    $nome = $_POST['nome'];
    


     $sql_insert = "INSERT INTO fiscal (matricula, nome) VALUES (:MATRICULA,:NOME)";


        $stmt = $PDO-> prepare($sql_insert);

        $stmt ->bindParam(':MATRICULA', $matricula);
        $stmt ->bindParam(':NOME', $nome);

        

    
    if($stmt->execute()){

       
        $dados = array("CREATE"=>"OK");
       

    }else{

        $dados = array("CREATE"=>"ERRO");

    }

   
    echo json_encode($dados);


?>