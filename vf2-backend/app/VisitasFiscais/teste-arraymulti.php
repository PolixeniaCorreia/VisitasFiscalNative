<?php

// $books = [
//         ["title" => "Romeo and Juliet", "genre" => "tragedy", "noofpages"=> "100"],
//         ["title" => "Hamlet", "genre" => "tragedy", "noofpages"=> "200"],
//         ["title" => "A Midsummer Night's Dream", "genre" => "comedy", "noofpages"=> "50"],
//         ["title" => "Mcabeth", "genre" => "tragedy", "noofpages"=> "180"],
//         ["title" => "Merchant of Venice", "genre" => "comedy", "noofpages"=> "40"],
//     ];
    
//     $books_by_genre = [];
//     foreach($books as $key => $book) {
//         if(!isset($books_by_genre[$book['title']])) {
//             $books_by_genre[$book['title']] = [];
//         }
//         array_push($books_by_genre[$book['title']], $book);
//     }

//     echo json_encode($books_by_genre);

    include "conexao.php";

    $sql_read = "SELECT e.id, e.numero, e.cnpj, e.razao, e.cep, e.id_cidade, c.nome as cidade
    FROM dbvisitas.estabelecimento e left join dbvisitas.cidade c on (c.id = e.id_cidade) order by cidade";

    $dados=$PDO->query($sql_read);

    while ($estabelecimento = $dados->fetch(PDO::FETCH_OBJ)) {

        $resultado[]=array(
            "cidade"=>$estabelecimento->cidade, 
            "id"=>$estabelecimento->id, 
            "razao"=>$estabelecimento->razao, 
            "cnpj"=>$estabelecimento->cnpj, 
            "cep"=>$estabelecimento->cep, 
            "numero"=>$estabelecimento->numero, 
            "id_cidade"=>$estabelecimento->id_cidade); 
    }

    $estabelecimento = [];
    $CidadesVisitadas = [];
    
    foreach($resultado as $key => $campo) {
        if(!isset($estabelecimento[$campo['cidade']])) {
            $estabelecimento['cidade'] = $campo['cidade'];
        }

        $estabelecimento['data'][0] = $campo['id'];
        $estabelecimento['data'][1] = $campo['cidade'];
        $estabelecimento['data'][2] = $campo['razao'];
        $estabelecimento['data'][3] = $campo['cnpj'];
        $estabelecimento['data'][4] = $campo['cep'];
        $estabelecimento['data'][5] = $campo['id_cidade'];
        array_push($CidadesVisitadas, $estabelecimento);

    }
    
    echo json_encode(array($CidadesVisitadas));
?>