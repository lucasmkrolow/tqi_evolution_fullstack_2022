-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: livraria
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `compra`
--

DROP TABLE IF EXISTS `compra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_do_livro` int(11) NOT NULL,
  `qtde` int(11) NOT NULL,
  `valor` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compra`
--

LOCK TABLES `compra` WRITE;
/*!40000 ALTER TABLE `compra` DISABLE KEYS */;
INSERT INTO `compra` VALUES (34,24,3,6),(35,25,8,9),(36,38,15,28),(37,39,15,28),(38,40,15,28),(39,41,15,28),(40,42,15,28),(41,26,5,3),(42,29,5,9),(43,30,10,11),(44,31,10,9),(45,32,10,10),(46,33,10,12),(47,34,5,6),(48,35,5,7),(49,36,4,15),(50,37,6,11),(51,23,5,6);
/*!40000 ALTER TABLE `compra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `livro`
--

DROP TABLE IF EXISTS `livro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `livro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `autor` varchar(255) DEFAULT NULL,
  `editora` varchar(255) DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `ano` int(11) NOT NULL,
  `estoque` int(11) NOT NULL,
  `preco_compra` float NOT NULL,
  `preco_venda` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `livro`
--

LOCK TABLES `livro` WRITE;
/*!40000 ALTER TABLE `livro` DISABLE KEYS */;
INSERT INTO `livro` VALUES (23,'Rubem Alves','Paulus','https://img.skoob.com.br/lRntHFE0JBmehd29_NsWmbE_cYY=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/28537/A_PRINCESINHA_QUE_FALAVA_SAPOS_1242809418B.jpg','A princesinha que falava sapos',2005,1,6,10),(24,'Jos├® Paulo Paes; Henriqueta Lisboa; M├írio Quintana','├ütica','https://img.skoob.com.br/rt4lkUGXYk-XK3Txyq8dqFMwp8E=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/9657/VARAL_DE_POESIA_1327941115B.jpg','Varal de poesia',2005,0,6,10),(25,'Angela Lago; Artur Azevedo; Bartolomeu Campos Queir├│s; Christiane Gribel; Eva Furnari; Machado de Assis; Moacyr Scliar; Pedro Bandeira; Rosa Amanda Strausz; Ruth Rocha','Moderna','https://img.skoob.com.br/hbOijKZgK1QH3e4IKJWxr2C8ZDo=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/30755/HISTORINHAS_PESCADAS_155258984530755SK1552589845B.jpg','Historinhas pescadas',2000,8,9,0),(26,'Jos├® Paulo Paes; Drauzio Varela; Moacyr Scliar; Milton Hatoum','Companhia das Letrinhas','https://img.skoob.com.br/0zjsl0ouNkR7K3Dx9DLUbS1AmJI=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/12956/ERA_UMA_VEZ_UM_CONTO_1233952616B.jpg','Era uma vez um conto',2002,5,3,0),(29,'Machado de Assis','├ütica','https://img.skoob.com.br/wstj0B655aeKHlhyd0Q0_oIpCTA=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/2204/A_MAO_E_A_LUVA_1350243417B.jpg','A m├úo e a luva',1998,5,9,0),(30,'Jos├® de Alencar','Klick','https://img.skoob.com.br/ylKcfww84JHB-W8UVjvs3fMnpFs=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/1110/O_GUARANI_1252239767B.jpg','O guarani',1999,10,11,0),(31,'Joaquim Manoel de Macedo','Rideel','https://img.skoob.com.br/JrchfAdPe3miX98SaKomj9Sbzz0=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/529/A_MORENINHA_1587204821529SK1587204825B.jpg','A moreninha',2009,10,9,0),(32,'E├ºa de Queir├│s','Rideel','https://img.skoob.com.br/GsF71KLE2A8WmpJ2Dx-tKSbbFFY=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/6518/OS_MAIAS_1244821120B.jpg','Os maias',2001,10,10,0),(33,'Machado de Assis','Ediouro','https://img.skoob.com.br/uLDJwC3y6kbwHXk_u8GhkHbPc5k=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/797/MEMORIAS_POSTUMAS_DE_BRAS_CUBA_1466373513797SK1466373513B.jpg','Mem├│rias p├│stumas de Br├ís Cubas',1997,10,12,0),(34,'Vera Aguiar (coordena├º├úo)','Projeto','https://img.skoob.com.br/zhCCM0ck6UmzPNYc1mhS4KRXfV0=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/7182/POESIA_FORA_DA_ESTANTE_1232071560B.jpg','Poesia fora da estante',1998,0,6,4),(35,'Elias Jos├®','Paulus','https://img.skoob.com.br/U_im5pQJ-TuQiQPQrR1OLJgMCM8=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/137325/MINIMAS_DESCOBERTAS_1325363162B.jpg','M├¡nimas descobertas',2005,5,7,0),(36,'Humberto Gessinger','Belas Letras','https://img.skoob.com.br/RYlJy8BMrI8rTRWqzbIWVrYA8GA=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/64740/PRA_SER_SINCERO_123_VARIACOES_SOBRE_UM__1259892674B.jpg','Pra ser sincero',2009,4,15,0),(37,'Neil Gaiman; Dave McKean','Conrad','https://img.skoob.com.br/b-RQ-DDmPyblj2TQcSRbsGk9Mcw=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/162807/SINAL_E_RUIDO_1301505502B.jpg','Sinal e ru├¡do',2011,6,11,0),(38,'George R. R. Martin','Leya Brasil','https://img.skoob.com.br/n3vL6eWIFaeZ5MPYjSu_YlbFamQ=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/16048/A_GUERRA_DOS_TRONOS_1299188140B.jpg','A guerra dos tronos',2010,1,28,30),(39,'George R. R. Martin','LeYa Brasil','https://img.skoob.com.br/9AOnIPKn4Y_MMXZi3bNuOaX_mHY=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/16061/A_FURIA_DOS_REIS_1299000959B.jpg','A f├║ria dos reis',2011,15,28,0),(40,'George R. R. Martin','LeYa Brasil','https://img.skoob.com.br/DZ8VhmxqH_44F7I69NlLqGhzKKw=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/150936/A_TORMENTA_DE_ESPADAS_1307507300B.jpg','A tormenta de espadas',2011,15,28,0),(41,'George R. R. Martin','LeYa Brasil','https://img.skoob.com.br/u2IQOYt8re3ShhCz2r3vsfZOknU=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/157355/O_FESTIM_DOS_CORVOS_1447563558157355SK1447563558B.jpg','O festim dos corvos',2011,15,28,0),(42,'George R. R. Martin','LeYa Brasil','https://img.skoob.com.br/01W4v6A3xKR-agfp4pdEQPLJqJw=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/193285/A_DANCA_DOS_DRAGOES_1447563896193285SK1447563896B.jpg','A dan├ºa dos drag├Áes',2012,9,28,35);
/*!40000 ALTER TABLE `livro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venda`
--

DROP TABLE IF EXISTS `venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `venda` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cpf_cnpj_cliente` varchar(255) DEFAULT NULL,
  `id_do_livro` int(11) NOT NULL,
  `nome_cliente` varchar(255) DEFAULT NULL,
  `qtde` int(11) NOT NULL,
  `valor_do_livro` int(11) NOT NULL,
  `valor_total` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venda`
--

LOCK TABLES `venda` WRITE;
/*!40000 ALTER TABLE `venda` DISABLE KEYS */;
INSERT INTO `venda` VALUES (20,'012345678910',23,'fulano',4,10,40),(21,'00000000000',42,'ciclano',1,35,35),(22,'00000000000000',42,'empresa a',5,35,175),(23,'00000000000000',38,'empresa b',14,30,420),(24,'00000000000',24,'beltrano',3,10,30),(25,'000000000000',34,'critinu',5,4,20);
/*!40000 ALTER TABLE `venda` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-28  7:32:43
