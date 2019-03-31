<?php

include "conexao.php";


$sql_read = "SELECT * FROM auto";

$dados=$PDO->query($sql_read);

$resultado = array();

while($auto = $dados->fetch(PDO::FETCH_OBJ)){

    $resultado[]=array("id"=>$auto->id, "data"=>$auto->dataa, "equipe"=>$auto->equipe, "irregularidade"=>$auto->irregularidade,
    "observacao"=>$auto->observacao, "id_tipo_auto"=>$auto->id_tipo_auto, "id_estabelecimento"=>$auto->id_estabelecimento,
    "id_fiscal"=>$auto->id_fiscal
);


}
echo json_encode($resultado);





?>
