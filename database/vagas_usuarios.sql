-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: vagas
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `imagem` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('alan@email.com','$2b$10$cbOnFDeGTMemSgf5iyPAAueTP7jCVVBzPWeElobt.b77Nya1jjJyG','alan','uploads/2022-05-11T17:06:23.719ZCaptura de tela de 2022-03-30 14-05-28.png'),('elizio@email.com','$2b$10$Pm2yeIZCyyfRkYfb3Z4LjeDouHZ..Q2CK5m/qpCglx8OGT5SdLt7u','elizio',NULL),('ryan@email','$2b$10$tg.vGQGHwBhrK0mC60CmWOt6rCHsXcwZjsou/ibKJ6A7IJOdrKoha','ryan',NULL),('teste2@email','$2b$10$hJ5vLrjBbkMoo2cbxcRJtuO9vGWJqgzsjSvLFsa/TpHHSnmFtDUzC','alan','uploads/2022-04-29T16:48:48.448ZCaptura de tela de 2022-04-06 14-26-38.png'),('teste3@email','$2b$10$D13R0YIYpe7CU.MKGsCQVu0W.PtYiVAfAJC9zspuyNCX61IM/1oQS','alan','uploads/2022-05-04T18:09:27.944ZCaptura de tela de 2022-03-30 14-05-28.png'),('teste4@email','$2b$10$NHMsUL4ArUI0Wqls8cGgt.qc8Bi6dFa2N21U5bi5ykHgrLoHjAVPa','alan','uploads/2022-05-04T18:09:49.514ZCaptura de tela de 2022-03-30 14-05-28.png'),('thiago@email.com','$2b$10$IXsesijqejSgpvLSWFiaMuOxSiPUHmLV0Ykz84rNYK4QJTnx3bPS.','thiago',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-16  3:44:37
