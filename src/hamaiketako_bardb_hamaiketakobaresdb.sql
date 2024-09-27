-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hamaiketako_bardb
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hamaiketakobaresdb`
--

DROP TABLE IF EXISTS `hamaiketakobaresdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hamaiketakobaresdb` (
  `Nombre` text,
  `Descripcion` text,
  `Localidad` text,
  `Telefono` text,
  `Direccion` text,
  `Email` text,
  `WEB` text,
  `Postal Code` int DEFAULT NULL,
  `URL Link Map` text,
  `idBares` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idBares`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hamaiketakobaresdb`
--

LOCK TABLES `hamaiketakobaresdb` WRITE;
/*!40000 ALTER TABLE `hamaiketakobaresdb` DISABLE KEYS */;
INSERT INTO `hamaiketakobaresdb` VALUES ('Aizian','Este moderno y acogedor restaurante fue diseÃ±ado por el arquitecto Ricardo Legorreta y es ...','Bilbao','944 280 039','Lehendakari Leizaola, 29. (H. MeliÃ¡ Bilbao)','aizian@restaurante-aizian.com','http://www.restaurante-aizian.com',48001,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-aizian/aa30-12375/es/',1),('Beltz','BeltzÂ  estÃ¡ ubicado en la azotea (sÃ©ptima planta) del THE ARTIST GRAND HOTEL O...','Bilbao','944 253 300','Alameda Mazarredo, 61','reservations@hoteldominebilbao.com','',48009,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-beltz/aa30-12375/es/',2),('Embarcadero','Restaurante del hotel del mismo nombre con vistas al Abra y decoraciÃ³n moderna y minimalis...','Areeta/Las Arenas','944 803 100','Avda. Zugazarte, 51','info@hotelembarcadero.com','https://hotelembarcadero.com/restaurante-arenas-getxo/',48930,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-embarcadero/aa30-12375/es/',3),('Atelier Etxanobe','Situado en el corazÃ³n del ensanche de Bilbao, el Atelier Etxanobe es el nuevo restaurante ...','Bilbao','944 421 071','Juan Ajuriaguerra, 8','etxanobe@etxanobe.com','http://www.atelieretxanobe.com',48009,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-etxanobe/aa30-12375/es/',4),('Guetaria','Acogedor asador familiar de cocina tradicional bien elaborada en el centro de Bilbao. Cuenta con ...','Bilbao','944 243 923','ColÃ³n de Larreategui, 12','','http://www.guetaria.com',48001,'https://turismoa.euskadi.eus/es/restaurantes/asador-getaria/aa30-12375/es/',5),('Jauregia','El restaurante Jauregia se encuentra ubicado en el Euskalduna. Ofrece su cobertura a un sinf&iacu...','Bilbao','944 035 151','Avda. Abandoibarra, 4 (Palacio Euskalduna)','info@jauregia.com','http://www.jauregia.com',48011,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-jauregia/aa30-12375/es/',6),('Kate Zaharra','CaserÃ­o restaurante situado en un mirador privilegiado, con las mejores vistas sobre la vi...','Bilbao','944 461 347','Zabalbide 221. Artxanda','reservas@kate-zaharra.com','http://www.kate-zaharra.com',48015,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-kate-zaharra/aa30-12375/es/',7),('La Escuela','Restaurante de la Escuela de HostelerÃ­a situado sobre Bilbao, en el monte Artxanda y rodea...','Bilbao','944 745 200','Ctra. Enekuri-Artxanda Km 3','restaurante@restaurantelaescuela.com','http://www.restaurantelaescuela.com',48015,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-la-escuela/aa30-12375/es/',8),('Le Bol Blanc','Bajo el asesoramiento de FerrÃ¡n AdriÃ¡ el restaurante del Hotel Villa de Bilbao ofre...','Bilbao','944 416 000','Gran VÃ­a, 87 ( H. Villa de Bilbao)','nhcollectionvilladebilbao@nh-hotels.com','https://www.nh-hoteles.es/hotel/nh-collection-villa-de-bilbao',48011,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-la-pergola/aa30-12375/es/',9),('Maider','El restaurante Maider abriÃ³ sus puertas en 1982 y su especialidad son los pescados y maris...','Bilbao','944 248 990','ColÃ³n de Larreategui, 5','info@restaurantemaider.com','',48001,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-maider/aa30-12375/es/',10),('Serantes','Acogedor local en el centro de Bilbao con bar a la entrada. Ofrece tradicional cocina marinera co...','Bilbao','944 212 129','Licenciado Poza, 16','','http://www.restauranteserantes.com/',48011,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-serantes/aa30-12375/es/',11),('Serantes II','Al igual que su hermano Serantes I, su especialidad es la cocina marinera con buen producto, aunq...','Bilbao','944 102 699','Alameda de Urquijo, 51','','http://www.restauranteserantes.com/',48011,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-serantes-ii/aa30-12375/es/',12),('Ander','En la sidrerÃ­a Ander ofrecen tanto el tÃ­pico menÃº de sidrerÃ­a, como u...','Bilbao','944 476 666','Andalucia, 1','sidreriasani@gmail.com','http://www.sidreriasenbilbao.com/',48015,'https://turismoa.euskadi.eus/es/restaurantes/sidreria-ander/aa30-12375/es/',13),('Arraiz','El asador Arraiz se encuentra en un caserÃ­o de estilo rÃºstico, en un entorno rodead...','Bilbao','944 431 919','Monte Arraiz, 116','contacto@AsadorArraiz.com','http://www.asadorarraiz.com/',48002,'https://turismoa.euskadi.eus/es/restaurantes/asador-arraiz/aa30-12375/es/',14),('La Gabarra','Situada a orillas de la RÃ­a de Bilbao, la sidrerÃ­a-asador La Gabarra cuenta con dos...','Bilbao','946 970 156','Botica Vieja, 18','','',48014,'https://turismoa.euskadi.eus/es/restaurantes/asador-la-gabarra/aa30-12375/es/',15),('VÃ­ctor','Restaurante familiar con mÃ¡s de 50 aÃ±os de historia en pleno Casco Viejo bilba&iacu...','Bilbao','944 151 678','Plaza Nueva, 2','victor@cyl.com','http://www.restaurantevictor.com',48005,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-victor/aa30-12375/es/',16),('Yandiola','El joven chef Ricardo PÃ©rez dirige este restaurante de decoraciÃ³n minimalista ubica...','Bilbao','944 133 636','Plaza Arrikibar, 4 (Azkuna Zentroa)','info@grupoyandiola.com','http://www.yandiola.com',48010,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-yandiola/aa30-12375/es/',17),('Zortziko','ClÃ¡sico y emblemÃ¡tico local de elegante decoraciÃ³n con dos ambientes diferen...','Bilbao','944 239 743','Alda. Mazarredo, 17','zortziko@zortziko.es','http://www.zortziko.es',48001,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-zortziko/aa30-12375/es/',18),('Zubinor (Mc Donalds)','Inaugurado en 2005 es el Ãºnico restaurante McDonald\'s de Bilbao. Ofrece comida r&aacut...','Bilbao','944 397 627','Lehendakari Leizaola, 2 - Centro Comercial Zubiarte','','http://mcdonalds.es/',48011,'https://turismoa.euskadi.eus/es/restaurantes/comida-rapida-zubinor-mc-donalds/aa30-12375/es/',19),('Galtzagorri','Acogedora sidrerÃ­a de Santutxu donde podemos degustar los deliciosos manjares que ofrece u...','Bilbao','944 116 111','Juan de la Cosa, 20','','http://www.galtzagorri.com',48004,'https://turismoa.euskadi.eus/es/restaurantes/sidreria-galtzagorri/aa30-12375/es/',20),('Etxaniz','El restaurante Etxaniz estÃ¡ ubicado en el Hotel Indautxu. La decoraciÃ³n roja y azul...','Bilbao','944 440 004','Bombero Etxaniz, s/n','convenciones.indautxu@hoteles-silken.com','http://www.hoteles-silken.com/es/hotel-indautxu-bilbao/restaurantes/',48010,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-etxaniz/aa30-12375/es/',21),('PastelerÃ­a Arrese','La prestigiosa pastelerÃ­a Arrese, que abriÃ³ sus puertas en el aÃ±o 1852, es c...','Bilbao','944 234 052','Gran vÃ­a, 24','','http://www.arrese.biz',48001,'https://turismoa.euskadi.eus/es/restaurantes/pasteleria-confiteria-pasteleria-arrese/aa30-12375/es/',22),('CafÃ© IruÃ±a','El CafÃ© IruÃ±a situado frente a los populares Jardines de Albia, fue inaugurado el 7...','Bilbao','944 237 021','Jardines de Albia','cafeiruna@grupoiruna.net','https://www.cafeirunabilbao.net/',48001,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-cafe-iruna/aa30-12375/es/',23),('Mina','Situado frente al mercado de La Ribera, el restaurante Mina ofrece Ãºnicamente un men&uacut...','Bilbao','944 795 938','Muelle Marzana, s/n','mina@restaurantemina.es','http://www.restaurantemina.es/',48003,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-mina/aa30-12375/es/',24),('CafeterÃ­a Abandoibarra','CafeterÃ­a ubicada en el emblemÃ¡tico Palacio Euskalduna de Bilbao. Como su propio no...','Bilbao','944 035 149','Avenida Abandoibarra, 4','info@jauregia.com','http://jauregia.com/',48011,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-cafeteria-abandoibarra/aa30-12375/es/',25),('Zurekin','Zurekin es un sofisticado y coqueto restaurante que aÃºna la cocina tradicional y la de aut...','Bilbao','946 791 440','Diputacion, 8','bilbao@zurekin.es','http://www.zurekin.es/',48008,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-zurekin/aa30-12375/es/',26),('Palacio San Joseren','El restaurante Palacio San Joseren estÃ¡ situado en Las Arenas (Getxo) y ofrecen almuerzos ...','Areeta/Las Arenas','944 415 050','Avenida de Zugazarte, 52','info@palaciosanjoseren.com','http://www.palaciosanjoseren.com/',48930,'https://turismoa.euskadi.eus/es/restaurantes/restaurante-palacio-san-joseren/aa30-12375/es/',27);
/*!40000 ALTER TABLE `hamaiketakobaresdb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-26 18:12:43
