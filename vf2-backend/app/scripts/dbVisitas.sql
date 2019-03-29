DROP DATABASE IF EXISTS dbvisitas;
create database dbvisitas;
use dbvisitas;
SET FOREIGN_KEY_CHECKS = 0;

create table cidade(

	id int primary key,
	nome VARCHAR(150) ,
	uf VARCHAR(2) 
);

create table estabelecimento (
	id int primary key auto_increment,
    numero int,
    cnpj int(12),
    razao varchar(100),
    cep varchar(50),
    id_cidade int,
    
    foreign key (id_cidade) references cidade(id)
);
    
create table fiscal(

	id int primary key auto_increment,
    matricula varchar(20),
    nome varchar(150)

);
create table tipo_auto(

 id int primary key auto_increment,
 
 tipo varchar(50)


);


create table auto(

	id int primary key auto_increment,
    
    numero int (11),
    dataa date,
	equipe varchar(300),
    
    irregularidade varchar(70),
    observacao varchar(100),
    recusa_receber varchar(3),
    
    id_tipo_auto int,
    id_estabelecimento int,
    id_fiscal int,
    
    
    
	constraint fk_tipo_auto foreign key (id_tipo_auto) references tipo_auto(id),
    constraint fk_fiscal foreign key (id_fiscal) references fiscal(id),
    constraint fk_estabelecimento foreign key (id_estabelecimento) references estabelecimento(id)

);


SET FOREIGN_KEY_CHECKS = 1;

