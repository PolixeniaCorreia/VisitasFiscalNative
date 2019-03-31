select
(select nome from cidade c where c.id = a.id_estabelecimento)as cidade,
(select cnpj from estabelecimento e where e.id = a.id_estabelecimento) as cnpj,
(select razao from estabelecimento e where e.id = a.id_estabelecimento)as estabelecimento,
(select nome from fiscal f where f.id = a.id_fiscal)as fiscal,
(select tipo  from tipo_auto t where t.id = a.id_tipo_auto)as tipo_auto,observacao,dataa,irregularidade,recusa_receber,equipe,numero from auto a;


SELECT e.id, e.numero, e.cnpj, e.razao, e.cep, e.id_cidade, c.nome
FROM dbvisitas.estabelecimento e left join dbvisitas.cidade c on (c.id = e.id_cidade)