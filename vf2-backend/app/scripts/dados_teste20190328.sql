SET FOREIGN_KEY_CHECKS = 0;

-- insert into tipo_auto values(default,"teste_Tipo_auto");
-- insert into tipo_auto values(default,"teste_Tipo_auto-2");
-- insert into fiscal (matricula, nome) values ("9998","Fiscal1");
-- insert into fiscal (matricula, nome) values ("092555","Fiscal2");

-- insert into cidade (nome, uf) values ("João Pessoa","PB");
-- insert into cidade (nome, uf) values ("Bayeux","PB");

TRUNCATE TABLE dbvisitas.estabelecimento;

insert into estabelecimento (numero, cnpj,razao,cep,id_cidade) values (123,2988,"Estabelecimento-1","58-350",2655);
insert into estabelecimento (numero, cnpj,razao,cep,id_cidade) values (9999,5050,"Estabelecimento-2","20-690",2655);


TRUNCATE TABLE dbvisitas.auto;

insert into auto values (default,1125,'2019-03-28',"eee,TESTE","teste_irregularidade","teste_observacao","sim",1,1,1);
insert into auto values (default,125,'2019-03-28',"ERLON,TESTE","Matando","CUIDADO","nao",2,2,2);

-- INSERT INTO auto
-- (numero, dataa, tipo_auto, irregularidade, observacao, recusa_receber, id_estabelecimento, id_fiscal, id_equipe_auto)
-- VALUES(100, '2019-03-10', 'AUTO DE CONSTATAÇÃO', 'NÃO CONSTA CDC', 'NADA', 'NAO', 1, 1, 0);

SET FOREIGN_KEY_CHECKS = 1;