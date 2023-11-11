DROP DATABASE IF EXISTS campeonato_futsal;
CREATE DATABASE campeonato_futsal;
USE campeonato_futsal;

######################################################################################
DROP TABLE IF EXISTS categoria;
CREATE TABLE categoria (
id_categoria INT PRIMARY KEY AUTO_INCREMENT,
categoria VARCHAR(100) NOT NULL
);

######################################################################################
DROP TABLE IF EXISTS equipo;
CREATE TABLE equipo (
id_equipo INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(100) NOT NULL,
patrocinador VARCHAR(100) DEFAULT NULL,
color_1er_camiseta VARCHAR(100) NOT	NULL,
color_2da_camiseta VARCHAR(100) NOT	NULL,
id_categoria INT NOT NULL,
FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);

######################################################################################
DROP TABLE IF EXISTS participantes;
CREATE TABLE participantes (
id_participantes INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(100) NOT NULL,
apellidos VARCHAR(100) NOT NULL,
edad INT UNSIGNED NOT NULL,
direccion VARCHAR(100) DEFAULT NULL,
telefono VARCHAR(100) DEFAULT NULL,
id_equipo INT,
FOREIGN KEY (id_equipo) REFERENCES equipo(id_equipo)
);

######################################################################################
DROP TABLE IF EXISTS arbitro;
CREATE TABLE arbitro (
id_arbitro INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(100) NOT NULL,
apellidos VARCHAR(100) NOT NULL
);

######################################################################################
DROP TABLE IF EXISTS partido;
CREATE TABLE partido (
id_partido INT PRIMARY KEY AUTO_INCREMENT,
resultado VARCHAR(100) DEFAULT NULL,
equipo_1 INT DEFAULT NULL,
equipo_2 INT DEFAULT NULL,
campo VARCHAR(100) NOT NULL,
id_arbitro INT NOT NULL,
incidencias VARCHAR(100) DEFAULT NULL,
FOREIGN KEY (id_arbitro) REFERENCES arbitro(id_arbitro),
FOREIGN KEY (equipo_1) REFERENCES equipo(id_equipo),
FOREIGN KEY (equipo_2) REFERENCES equipo(id_equipo)
);
######################################################################################
INSERT INTO categoria VALUE
(DEFAULT,"SUB-18"),
(DEFAULT,"Senior");

INSERT INTO equipo VALUES
(DEFAULT,"RUMBO",NULL,"ROJO","AZUL",1),
(DEFAULT,"JUCAR",NULL,"BLANCO","VERDE",1);

INSERT INTO participantes VALUES
(DEFAULT,"Antony","Porter",9,NULL,NULL,1),
(DEFAULT,"Agus","Tino",9,NULL,NULL,1),
(DEFAULT,"Tito","Esper",10,NULL,NULL,2),
(DEFAULT,"Ricky","Fort",8,NULL,NULL,2);

INSERT INTO arbitro VALUES
(DEFAULT,"Jose","Perez");

INSERT INTO partido VALUES
(DEFAULT,NULL,NULL,NULL,"Campo Turia",1,NULL);

UPDATE partido
SET equipo_1 = 1, equipo_2 = 2
WHERE id_partido = 1;

UPDATE partido
SET resultado = "1-2"
WHERE id_partido = 1;

ALTER TABLE participantes DROP COLUMN apellidos;

ALTER TABLE participantes CHANGE telefono tel_movil VARCHAR(100);

UPDATE participantes
SET nombre = "Pepito", tel_movil = "691 33 22 11"
WHERE id_participantes = 2;

DELETE FROM participantes
WHERE id_participantes = 1;

DELETE FROM participantes
WHERE id_participantes = 3;
######################################################################################
