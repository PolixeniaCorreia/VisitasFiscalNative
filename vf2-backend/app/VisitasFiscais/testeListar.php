<?php

include_once "conexao.php";


$sql_read = "SELECT
(select nome from cidade c where c.id = a.id_estabelecimento) as cidade,
(select cnpj from estabelecimento e where e.id = a.id_estabelecimento) as cnpj,
(select razao from estabelecimento e where e.id = a.id_estabelecimento) as estabelecimento,
(select nome from fiscal f where f.id = a.id_fiscal) as fiscal,
(select tipo  from tipo_auto t where t.id = a.tipo_auto) as tipo_auto,
observacao,dataa,irregularidade,recusa_receber,equipe,numero from auto a";

$dados=$PDO->query($sql_read);

$resultado = array();

while($auto = $dados->fetch(PDO::FETCH_OBJ)){

    $resultado[]=array("cidade"=>$auto->cidade, "cnpj"=>$auto->cnpj,
     "irregularidade"=>$auto->irregularidade,
    "observacao"=>$auto->observacao,
    "fiscal"=>$auto->fiscal,"dataa"=>$auto->dataa,"recusa_receber"=>$auto->recusa_receber,
    "equipe"=>$auto->equipe,"numero"=>$auto->numero,"estabelecimento"=>$auto->estabelecimento,"tipo_auto"=>$auto->tipo_auto
);


}
echo json_encode($resultado);





?>
