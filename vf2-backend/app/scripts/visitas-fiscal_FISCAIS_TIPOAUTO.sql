SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE visitas.fiscal;
TRUNCATE TABLE visitas.tipoauto;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO  `visitas`.`fiscal` (`matricula`, `nome`) VALUES
(143123, 'DANIELLE'),
(143124, 'JOSY'),
(143125, 'KAIO'),
(143126, 'MANOEL'),
(143127, 'NATALUAN'),
(143128, 'SANTANA'),
(143129, 'WESCLEY');


INSERT INTO  `visitas`.`tipoauto` (`tipo_de_auto`) VALUES
('AUTO DE CONSTATAÇÃO'),
('AUTO DE INFRAÇÃO'),
('AUTO DE APREENSÃO'),
('SEM INFRAÇÃO');