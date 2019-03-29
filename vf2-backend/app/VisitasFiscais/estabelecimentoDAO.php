<?php

include "conexao.php";


$sql_read = "SELECT e.id, e.numero, e.cnpj, e.razao, e.cep, e.id_cidade, c.nome
FROM dbvisitas.estabelecimento e left join dbvisitas.cidade c on (c.id = e.id_cidade)";

$dados=$PDO->query($sql_read);

$resultado = array();

while($estabelecimento = $dados->fetch(PDO::FETCH_OBJ)){

    $resultado[]=array(    
        "id"=>$estabelecimento->id, 
        "cnpj"=>$estabelecimento->cnpj, 
        "razao"=>$estabelecimento->razao,
        "numero"=>$estabelecimento->numero, 
        "cep"=>$estabelecimento->cep, 
        "id_cidade"=>$estabelecimento->id_cidade, 
        "cidade"=>$estabelecimento->nome
);


}
echo json_encode($resultado);





?>
