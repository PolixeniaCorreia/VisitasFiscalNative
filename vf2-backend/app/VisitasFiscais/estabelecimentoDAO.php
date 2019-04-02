<?php

include "conexao.php";


$sql_read = "SELECT e.id, e.numero, e.cnpj, e.razao, e.cep, e.id_cidade, c.nome as cidade
FROM dbvisitas.estabelecimento e left join dbvisitas.cidade c on (c.id = e.id_cidade) order by cidade";

$dados=$PDO->query($sql_read);

$session = array();
$resultado = array();
$cidade = '';
$ini = 0;

while ($estabelecimento = $dados->fetch(PDO::FETCH_OBJ)) {
    // var_dump($estabelecimento);
    if ($estabelecimento->nome !== $cidade) {
        $cidade = $estabelecimento->nome;
        $resultado['cidade'] . $cidade;
        $i = 0;
    }

    $resultado['data'][$i]['id'] . $estabelecimento->id .
    $resultado['data'][$i]['razao'] . $estabelecimento->razao .
    $resultado['data'][$i]['numero'] . $estabelecimento->numero .
    $resultado['data'][$i]['cep'] . $estabelecimento->cep .
    $resultado['data'][$i]['id_cidade'] . $estabelecimento->id_cidade .
    $resultado['data'][$i]['cidade'] . $estabelecimento->cidade;
    var_dump($resultado);
    $i++;

    // $resultado[]=array(
    //     "cidade"=>$estabelecimento->cidade, 
    //     "id"=>$estabelecimento->id, 
    //     "razao"=>$estabelecimento->razao, 
    //     "cnpj"=>$estabelecimento->cnpj, 
    //     "cep"=>$estabelecimento->cep, 
    //     "numero"=>$estabelecimento->numero, 
    //     "id_cidade"=>$estabelecimento->id_cidade); 
}

echo json_encode($resultado);

// $fp = fopen('results.json', 'w');
// fwrite($fp, json_encode($resultado));
// fclose($fp);

// $url = 'results.json';
// $data = file_get_contents($url);
// $response = json_decode($data, true);
// if ($ini == 0) {
//     // $data = file_get_contents($estabelecimento);
//     $resultado = json_encode($estabelecimento, true);
//     $ini = 1;
// }

// // var_dump($estabelecimento);
// if ($estabelecimento->nome !== $cidade) {
//     $cidade = $estabelecimento->nome;
//     $resultado['cidade'] . $cidade;
//     $i = 0;
// }

// // $resultado['cidade'] . $cidade;
//     $resultado['data'][$i]['id'] . $estabelecimento->id .
//     $resultado['data'][$i]['razao'] . $estabelecimento->razao .
//     $resultado['data'][$i]['numero'] . $estabelecimento->numero .
//     $resultado['data'][$i]['cep'] . $estabelecimento->cep .
//     $resultado['data'][$i]['id_cidade'] . $estabelecimento->id_cidade .
//     $resultado['data'][$i]['cidade'] . $estabelecimento->cidade;
//     var_dump($resultado);
// $i++;
?>